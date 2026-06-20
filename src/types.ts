export type ExamPhase = 'setup' | 'survey' | 'level' | 'warmup' | 'exam' | 'review';

export type TopicKey =
  | 'intro'
  | 'home'
  | 'work'
  | 'school'
  | 'family'
  | 'friends'
  | 'movies'
  | 'music'
  | 'travel'
  | 'restaurant'
  | 'shopping'
  | 'exercise'
  | 'technology'
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
  group: 'profile' | 'daily' | 'interest' | 'situation';
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
}
