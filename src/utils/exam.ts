import { defaultExamSettings, questionBank, topicOptions } from '../data/questionBank';
import type { ExamQuestion, LevelKey, Question, TaskType, TopicKey } from '../types';

const taskOrder: TaskType[] = [
  'description',
  'routine',
  'experience',
  'comparison',
  'opinion',
  'roleplay',
  'problem',
  'warmup',
];

function shuffle<T>(items: T[]): T[] {
  return [...items]
    .map((item) => ({ item, score: crypto.getRandomValues(new Uint32Array(1))[0] }))
    .sort((a, b) => a.score - b.score)
    .map(({ item }) => item);
}

function levelRank(level: LevelKey): number {
  if (level === 'novice') return 1;
  if (level === 'intermediate') return 2;
  return 3;
}

function levelDistance(question: Question, selectedLevel: LevelKey): number {
  return Math.abs(levelRank(question.level) - levelRank(selectedLevel));
}

function hasTag(question: Question, tag: string): boolean {
  return question.tags.includes(tag);
}

function getSetTag(question: Question): string {
  return question.tags.find((tag) => tag.startsWith('set:')) ?? question.id;
}

function dedupe(questions: Question[]): Question[] {
  return questions.filter(
    (question, index, self) => self.findIndex((item) => item.id === question.id) === index,
  );
}

function isUsed(question: Question, usedIds: Set<string>): boolean {
  return usedIds.has(question.id);
}

function pushQuestions(target: Question[], usedIds: Set<string>, questions: Question[]) {
  questions.forEach((question) => {
    if (!usedIds.has(question.id) && target.length < defaultExamSettings.questionCount) {
      target.push(question);
      usedIds.add(question.id);
    }
  });
}

function levelPattern(selectedLevel: LevelKey): LevelKey[] {
  if (selectedLevel === 'advanced') return ['intermediate', 'advanced', 'advanced'];
  if (selectedLevel === 'novice') return ['intermediate', 'intermediate', 'intermediate'];
  return ['intermediate', 'intermediate', 'advanced'];
}

function taskScore(question: Question, position: number): number {
  const preferredByPosition: TaskType[][] = [
    ['description', 'routine'],
    ['routine', 'experience', 'description'],
    ['experience', 'comparison', 'opinion', 'problem'],
  ];
  const preferred = preferredByPosition[position] ?? taskOrder;
  const index = preferred.indexOf(question.taskType);
  if (index >= 0) return index;
  return taskOrder.indexOf(question.taskType) + 6;
}

function pickBest(pool: Question[], desiredLevel: LevelKey, position: number): Question | undefined {
  return [...pool].sort((a, b) => {
    const levelDelta = levelDistance(a, desiredLevel) - levelDistance(b, desiredLevel);
    if (levelDelta !== 0) return levelDelta;

    const taskDelta = taskScore(a, position) - taskScore(b, position);
    if (taskDelta !== 0) return taskDelta;

    return a.prompt.length - b.prompt.length;
  })[0];
}

function pickTopicSet(topic: TopicKey, selectedLevel: LevelKey, usedIds: Set<string>): Question[] {
  const pool = questionBank.filter(
    (question) =>
      question.topic === topic &&
      question.topic !== 'intro' &&
      !hasTag(question, 'source:roleplay') &&
      !isUsed(question, usedIds),
  );
  const picked: Question[] = [];

  levelPattern(selectedLevel).forEach((desiredLevel, position) => {
    const next = pickBest(
      pool.filter((question) => !picked.some((item) => item.id === question.id)),
      desiredLevel,
      position,
    );
    if (next) picked.push(next);
  });

  return picked;
}

function pickTopicSetFrom(
  topics: TopicKey[],
  selectedLevel: LevelKey,
  usedIds: Set<string>,
): Question[] {
  for (const topic of shuffle(topics)) {
    const picked = pickTopicSet(topic, selectedLevel, usedIds);
    if (picked.length >= 3) return picked;
  }
  return [];
}

function pickRoleplaySet(selectedTopics: TopicKey[], usedIds: Set<string>): Question[] {
  const groups = new Map<string, Question[]>();
  questionBank
    .filter((question) => hasTag(question, 'source:roleplay') && !isUsed(question, usedIds))
    .forEach((question) => {
      const setTag = getSetTag(question);
      groups.set(setTag, [...(groups.get(setTag) ?? []), question]);
    });

  const selectedSet = new Set(selectedTopics);
  const candidates = [...groups.values()]
    .filter((group) => group.length >= 3)
    .sort((a, b) => {
      const aPreferred = a.some((question) => selectedSet.has(question.topic)) ? 0 : 1;
      const bPreferred = b.some((question) => selectedSet.has(question.topic)) ? 0 : 1;
      if (aPreferred !== bPreferred) return aPreferred - bPreferred;
      return b.length - a.length;
    });

  const group = shuffle(candidates.slice(0, 8))[0];
  if (!group) return [];

  return [...group]
    .sort((a, b) => taskOrder.indexOf(a.taskType) - taskOrder.indexOf(b.taskType))
    .slice(0, 3);
}

function pickFinalQuestions(selectedLevel: LevelKey, usedIds: Set<string>): Question[] {
  const desiredLevel: LevelKey = selectedLevel === 'novice' ? 'intermediate' : 'advanced';
  const commonTopics = new Set(
    topicOptions
      .filter((topic) => topic.group === 'common' || topic.group === 'situation')
      .map((topic) => topic.key),
  );

  return shuffle(
    questionBank.filter(
      (question) =>
        commonTopics.has(question.topic) &&
        question.topic !== 'intro' &&
        !hasTag(question, 'source:roleplay') &&
        !isUsed(question, usedIds),
    ),
  )
    .sort((a, b) => {
      const levelDelta = levelDistance(a, desiredLevel) - levelDistance(b, desiredLevel);
      if (levelDelta !== 0) return levelDelta;
      const aHard = a.taskType === 'comparison' || a.taskType === 'opinion' || a.taskType === 'problem' ? 0 : 1;
      const bHard = b.taskType === 'comparison' || b.taskType === 'opinion' || b.taskType === 'problem' ? 0 : 1;
      return aHard - bHard;
    })
    .slice(0, 2);
}

function fillRemaining(
  target: Question[],
  usedIds: Set<string>,
  selectedTopics: TopicKey[],
  selectedLevel: LevelKey,
) {
  const selectedSet = new Set(selectedTopics);
  const fallback = shuffle(
    questionBank.filter((question) => question.topic !== 'intro' && !isUsed(question, usedIds)),
  ).sort((a, b) => {
    const aSelected = selectedSet.has(a.topic) ? 0 : 1;
    const bSelected = selectedSet.has(b.topic) ? 0 : 1;
    if (aSelected !== bSelected) return aSelected - bSelected;
    return levelDistance(a, selectedLevel) - levelDistance(b, selectedLevel);
  });

  pushQuestions(target, usedIds, fallback);
}

export function getTopicLabel(topic: TopicKey): string {
  return topicOptions.find((option) => option.key === topic)?.label ?? '사용자 문제';
}

export function formatTime(totalSec: number): string {
  const safe = Math.max(0, totalSec);
  const min = Math.floor(safe / 60)
    .toString()
    .padStart(2, '0');
  const sec = Math.floor(safe % 60)
    .toString()
    .padStart(2, '0');
  return `${min}:${sec}`;
}

export function buildExamQuestions(
  selectedTopics: TopicKey[],
  selectedLevel: LevelKey,
): ExamQuestion[] {
  const usedIds = new Set<string>();
  const selected: TopicKey[] = selectedTopics.filter((topic) => topic !== 'intro');
  const common = topicOptions
    .filter((topic) => topic.group === 'common' || topic.group === 'situation')
    .map((topic) => topic.key)
    .filter((topic) => !selected.includes(topic));

  const questions: Question[] = [];
  const intro =
    questionBank.find((question) => question.topic === 'intro') ??
    questionBank.find((question) => question.taskType === 'warmup');

  if (intro) pushQuestions(questions, usedIds, [intro]);

  pushQuestions(questions, usedIds, pickTopicSetFrom(selected, selectedLevel, usedIds));
  pushQuestions(questions, usedIds, pickTopicSetFrom(common, selectedLevel, usedIds));
  pushQuestions(questions, usedIds, pickTopicSetFrom([...selected, ...common], selectedLevel, usedIds));
  pushQuestions(questions, usedIds, pickRoleplaySet(selected, usedIds));
  pushQuestions(questions, usedIds, pickFinalQuestions(selectedLevel, usedIds));

  fillRemaining(questions, usedIds, selected, selectedLevel);

  return dedupe(questions)
    .slice(0, defaultExamSettings.questionCount)
    .map((question, index) => ({
      ...question,
      sequence: index + 1,
      timeLimitSec: question.timeLimitSec || defaultExamSettings.questionTimeSec,
    }));
}

export function buildSessionId(): string {
  return `opic-${new Date().toISOString().replace(/[:.]/g, '-')}`;
}
