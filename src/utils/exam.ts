import {
  defaultExamSettings,
  questionBank,
  topicOptions,
} from '../data/questionBank';
import type { ExamQuestion, LevelKey, Question, TopicKey } from '../types';

const requiredTopics: TopicKey[] = ['intro'];

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
  const topicSet = new Set<TopicKey>([...requiredTopics, ...selectedTopics]);
  const candidates = questionBank
    .filter((question) => topicSet.has(question.topic))
    .sort((a, b) => levelDistance(a, selectedLevel) - levelDistance(b, selectedLevel));

  const intro = candidates.find((question) => question.topic === 'intro');
  const byTopic = Array.from(topicSet)
    .filter((topic) => topic !== 'intro')
    .flatMap((topic) =>
      shuffle(candidates.filter((question) => question.topic === topic)).slice(0, 2),
    );

  const roleplayAndProblem = shuffle(
    candidates.filter(
      (question) => question.taskType === 'roleplay' || question.taskType === 'problem',
    ),
  ).slice(0, 3);

  const mixed = shuffle([...byTopic, ...roleplayAndProblem, ...candidates])
    .filter((question, index, self) => self.findIndex((item) => item.id === question.id) === index)
    .slice(0, defaultExamSettings.questionCount - 1);

  const questions = intro ? [intro, ...mixed] : mixed;

  return questions.slice(0, defaultExamSettings.questionCount).map((question, index) => ({
    ...question,
    sequence: index + 1,
    timeLimitSec: question.timeLimitSec || defaultExamSettings.questionTimeSec,
  }));
}

export function buildSessionId(): string {
  return `opic-${new Date().toISOString().replace(/[:.]/g, '-')}`;
}
