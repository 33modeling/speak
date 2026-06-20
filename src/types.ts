export type ExamPhase =
  | 'setup'
  | 'plan'
  | 'survey'
  | 'level'
  | 'warmup'
  | 'practice'
  | 'database'
  | 'exam'
  | 'review';

export type SessionMode = 'mock' | 'practice';

export type TopicKey =
  | 'intro'
  | 'furniture'
  | 'recycling'
  | 'home'
  | 'industry'
  | 'music'
  | 'movies'
  | 'tv'
  | 'restaurant'
  | 'gathering'
  | 'vacationHome'
  | 'food'
  | 'health'
  | 'shopping'
  | 'domesticTravel'
  | 'overseasTravel'
  | 'geography'
  | 'internet'
  | 'phone'
  | 'technology'
  | 'weather'
  | 'fashion'
  | 'transportation'
  | 'hotel'
  | 'bank'
  | 'reservation'
  | 'freeTime'
  | 'familyFriends'
  | 'holiday'
  | 'custom';

export type LevelKey = 'novice' | 'intermediate' | 'advanced';

export type TaskType =
  | 'warmup'
  | 'description'
  | 'routine'
  | 'experience'
  | 'comparison'
  | 'roleplay'
  | 'problem'
  | 'opinion';

export interface TopicOption {
  key: TopicKey;
  label: string;
  group: 'profile' | 'selected' | 'common' | 'situation';
}

export interface LevelOption {
  key: LevelKey;
  label: string;
  target: string;
}

export interface Question {
  id: string;
  topic: TopicKey;
  level: LevelKey;
  taskType: TaskType;
  prompt: string;
  timeLimitSec: number;
  tags: string[];
}

export interface ExamQuestion extends Question {
  sequence: number;
}

export interface RecordingEntry {
  questionId: string;
  sequence: number;
  durationSec: number;
  blobUrl: string;
  createdAt: string;
}

export interface ExamSettings {
  questionCount: number;
  totalTimeSec: number;
  questionTimeSec: number;
  minSurveyTopics: number;
}

export interface ModelAnswer {
  id: string;
  topic: TopicKey;
  level: LevelKey;
  taskType: TaskType;
  title: string;
  answer: string;
  tags: string[];
}

export type StudyCardCategory = 'textType' | 'vocabulary' | 'pronunciation' | 'stress';

export interface StudyCard {
  id: string;
  title: string;
  category: StudyCardCategory;
  content: string;
  tags: string[];
}

export type StudyPlanTaskKind = 'memorize' | 'speaking' | 'mock';
export type StudyPlanDuration = 14 | 30 | 60;

export interface StudyPlanTask {
  id: string;
  day: number;
  kind: StudyPlanTaskKind;
  title: string;
  detail: string;
  minutes: number;
  topic?: TopicKey;
  level?: LevelKey;
}

export interface StudyPlanDay {
  id: string;
  day: number;
  dateLabel: string;
  focus: string;
  tasks: StudyPlanTask[];
}
