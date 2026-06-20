import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Database,
  Download,
  EyeOff,
  FileSearch,
  Headphones,
  ListChecks,
  Mic,
  Play,
  RotateCcw,
  Search,
  Settings2,
  SkipForward,
  Square,
  Timer,
  Volume2,
} from 'lucide-react';
import {
  defaultExamSettings,
  levelOptions,
  questionBank,
  topicOptions,
} from './data/questionBank';
import {
  buildExamQuestions,
  buildPracticeQuestions,
  buildSessionId,
  formatTime,
  getTopicLabel,
} from './utils/exam';
import type {
  ExamPhase,
  ExamQuestion,
  LevelKey,
  ModelAnswer,
  RecordingEntry,
  SessionMode,
  StudyCard,
  StudyCardCategory,
  StudyPlanDay,
  StudyPlanDuration,
  StudyPlanTask,
  StudyPlanTaskKind,
  TaskType,
  TopicKey,
} from './types';

const groupLabels = {
  profile: '프로필',
  selected: '선택형 주제',
  common: '공통형 주제',
  situation: '상황/서비스',
};

const phaseLabels: Record<ExamPhase, string> = {
  setup: '점검',
  plan: '플랜',
  survey: '서베이',
  level: '난이도',
  warmup: '워밍업',
  practice: '연습',
  database: 'DB',
  exam: '시험',
  review: '리뷰',
};

const phaseOrder: ExamPhase[] = [
  'setup',
  'plan',
  'survey',
  'level',
  'warmup',
  'practice',
  'database',
  'exam',
  'review',
];

const taskLabels: Record<TaskType, string> = {
  warmup: '자기소개',
  description: '묘사',
  routine: '루틴',
  experience: '경험',
  comparison: '비교',
  roleplay: 'Role Play',
  problem: '문제 해결',
  opinion: '의견',
};

const studyCategoryLabels: Record<StudyCardCategory, string> = {
  textType: '문장 훈련',
  vocabulary: '표현/단어',
  pronunciation: '발음',
  stress: '강세',
};

const planTaskLabels: Record<StudyPlanTaskKind, string> = {
  memorize: '암기',
  speaking: '말하기',
  mock: '실전',
};

const planStorageKey = 'opic-study-plan-v1';

const defaultPlanDuration: StudyPlanDuration = 14;

const planDurationOptions: Array<{
  days: StudyPlanDuration;
  label: string;
  caption: string;
}> = [
  { days: 14, label: '2주', caption: '단기 완성' },
  { days: 30, label: '1달', caption: '균형 루틴' },
  { days: 60, label: '2달', caption: '장기 누적' },
];

const planTopicCycle: TopicKey[] = [
  'home',
  'movies',
  'music',
  'restaurant',
  'shopping',
  'domesticTravel',
  'overseasTravel',
  'internet',
  'phone',
  'weather',
  'health',
  'freeTime',
  'familyFriends',
  'transportation',
];

function addDays(date: Date, amount: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function formatPlanDate(date: Date): string {
  return new Intl.DateTimeFormat('ko-KR', {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  }).format(date);
}

function normalizePlanDuration(value: unknown): StudyPlanDuration {
  return planDurationOptions.some((option) => option.days === value)
    ? (value as StudyPlanDuration)
    : defaultPlanDuration;
}

function buildStudyPlan(startDate: Date, durationDays: StudyPlanDuration): StudyPlanDay[] {
  return Array.from({ length: durationDays }, (_, index) => {
    const day = index + 1;
    const topic = planTopicCycle[index % planTopicCycle.length];
    const nextTopic = planTopicCycle[(index + 1) % planTopicCycle.length];
    const progress = day / durationDays;
    const level: LevelKey =
      progress <= 0.3 ? 'novice' : progress <= 0.72 ? 'intermediate' : 'advanced';
    const isCheckpoint = day % 7 === 0 || day === durationDays;
    const isRoleplayDay = day % 6 === 0 || day % 10 === 0 || day % 13 === 0;

    const tasks: StudyPlanTask[] = [
      {
        id: `day-${day}-memorize`,
        day,
        kind: 'memorize',
        title: isCheckpoint ? '누적 모범 답변 리콜' : `${getTopicLabel(topic)} 모범 답변 암기`,
        detail: isCheckpoint
          ? '최근 7일 동안 외운 답변 6개를 보지 않고 60초 안에 재구성한다.'
          : '모범 답변 2개와 암기 카드 1개를 듣고, 핵심 표현 5개를 말로 반복한다.',
        minutes: isCheckpoint ? 35 : 30,
        topic,
        level,
      },
      {
        id: `day-${day}-speaking`,
        day,
        kind: 'speaking',
        title: isRoleplayDay ? 'Role Play 집중 말하기' : `${getTopicLabel(topic)} 말하기 연습`,
        detail: isRoleplayDay
          ? '역할극 문제 3개를 실제처럼 녹음하고, 답변 첫 문장과 대안 제시 표현을 점검한다.'
          : '주제별 연습 모드에서 10문항을 풀고, 답변마다 시작-상세-마무리 구조를 확인한다.',
        minutes: 40,
        topic,
        level,
      },
      {
        id: `day-${day}-mock`,
        day,
        kind: 'mock',
        title: isCheckpoint ? '풀 모의고사' : '실전 미니 세트',
        detail: isCheckpoint
          ? '15문항 실전 모드로 진행하고, 리뷰에서 미응답/짧은 답변을 표시한다.'
          : `${getTopicLabel(topic)}와 ${getTopicLabel(nextTopic)}를 포함해 실전 모드로 최소 5문항을 연속 답변한다.`,
        minutes: isCheckpoint ? 55 : 25,
        topic: nextTopic,
        level,
      },
    ];

    return {
      id: `day-${day}`,
      day,
      dateLabel: formatPlanDate(addDays(startDate, index)),
      focus: isCheckpoint ? '주간 점검' : `${getTopicLabel(topic)} 중심`,
      tasks,
    };
  });
}

interface StudyPlanProgress {
  startedAt: string;
  durationDays: StudyPlanDuration;
  completed: Record<string, boolean>;
  notes: Record<string, string>;
}

function App() {
  const [phase, setPhase] = useState<ExamPhase>('setup');
  const [sessionMode, setSessionMode] = useState<SessionMode>('mock');
  const [selectedTopics, setSelectedTopics] = useState<TopicKey[]>([
    'home',
    'movies',
    'music',
    'tv',
    'restaurant',
    'shopping',
    'vacationHome',
    'domesticTravel',
    'overseasTravel',
    'internet',
    'phone',
    'weather',
    'freeTime',
  ]);
  const [selectedLevel, setSelectedLevel] = useState<LevelKey>('intermediate');
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalTimeLeft, setTotalTimeLeft] = useState(defaultExamSettings.totalTimeSec);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(defaultExamSettings.questionTimeSec);
  const [sessionId, setSessionId] = useState(buildSessionId());
  const [recordings, setRecordings] = useState<RecordingEntry[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [micStatus, setMicStatus] = useState<'idle' | 'ready' | 'blocked'>('idle');
  const [voiceName, setVoiceName] = useState('');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [startedQuestionIds, setStartedQuestionIds] = useState<Set<string>>(new Set());
  const [practiceTopic, setPracticeTopic] = useState<TopicKey>('home');
  const [dbTopicFilter, setDbTopicFilter] = useState<TopicKey | 'all'>('all');
  const [dbLevelFilter, setDbLevelFilter] = useState<LevelKey | 'all'>('all');
  const [dbTaskFilter, setDbTaskFilter] = useState<TaskType | 'all'>('all');
  const [dbView, setDbView] = useState<'questions' | 'answers' | 'cards'>('questions');
  const [dbStudyCategoryFilter, setDbStudyCategoryFilter] = useState<StudyCardCategory | 'all'>('all');
  const [dbSearch, setDbSearch] = useState('');
  const [modelAnswers, setModelAnswers] = useState<ModelAnswer[]>([]);
  const [studyCards, setStudyCards] = useState<StudyCard[]>([]);
  const [studyBankLoaded, setStudyBankLoaded] = useState(false);
  const [planProgress, setPlanProgress] = useState<StudyPlanProgress>(() => {
    try {
      const saved = window.localStorage.getItem(planStorageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<StudyPlanProgress>;
        return {
          startedAt: parsed.startedAt ?? new Date().toISOString(),
          durationDays: normalizePlanDuration(parsed.durationDays),
          completed: parsed.completed ?? {},
          notes: parsed.notes ?? {},
        };
      }
    } catch {
      // Local storage can be unavailable in private or restricted browser contexts.
    }

    return {
      startedAt: new Date().toISOString(),
      durationDays: defaultPlanDuration,
      completed: {},
      notes: {},
    };
  });
  const [questionStartedAt, setQuestionStartedAt] = useState<number | null>(null);
  const [replayAvailableUntil, setReplayAvailableUntil] = useState<number | null>(null);
  const [hasReplayedPrompt, setHasReplayedPrompt] = useState(false);
  const [clockNow, setClockNow] = useState(Date.now());

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const recordStartedAtRef = useRef<number>(0);
  const isRecordingRef = useRef(false);
  const discardNextRecordingRef = useRef(false);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const completedCount = recordings.length;
  const canProceedSurvey = selectedTopics.length >= defaultExamSettings.minSurveyTopics;
  const isStrictExam = sessionMode === 'mock';
  const questionStarted = currentQuestion ? startedQuestionIds.has(currentQuestion.id) : false;
  const replaySecondsLeft =
    isStrictExam && replayAvailableUntil
      ? Math.max(0, Math.ceil((replayAvailableUntil - clockNow) / 1000))
      : 0;
  const nextUnlockSecondsLeft =
    isStrictExam && questionStartedAt
      ? Math.max(0, Math.ceil((questionStartedAt + 10_000 - clockNow) / 1000))
      : 0;
  const canReplayPrompt =
    !!currentQuestion &&
    questionStarted &&
    !isSpeaking &&
    (sessionMode === 'practice' ? !isRecording : !hasReplayedPrompt && replaySecondsLeft > 0);
  const canMoveNext = sessionMode === 'practice' || (questionStarted && nextUnlockSecondsLeft === 0);

  const groupedTopics = useMemo(
    () =>
      topicOptions.reduce<Record<string, typeof topicOptions>>((acc, option) => {
        acc[option.group] = acc[option.group] ?? [];
        acc[option.group].push(option);
        return acc;
      }, {}),
    [],
  );

  const practiceTopics = useMemo(
    () =>
      topicOptions.filter(
        (option) =>
          option.key !== 'intro' && questionBank.some((question) => question.topic === option.key),
      ),
    [],
  );

  const studyPlan = useMemo(
    () => buildStudyPlan(new Date(planProgress.startedAt), planProgress.durationDays),
    [planProgress.durationDays, planProgress.startedAt],
  );
  const planTasks = useMemo(() => studyPlan.flatMap((day) => day.tasks), [studyPlan]);
  const completedPlanCount = planTasks.filter((task) => planProgress.completed[task.id]).length;
  const totalPlanMinutes = planTasks.reduce((total, task) => total + task.minutes, 0);
  const completedPlanMinutes = planTasks
    .filter((task) => planProgress.completed[task.id])
    .reduce((total, task) => total + task.minutes, 0);
  const planCompletionRate = planTasks.length
    ? Math.round((completedPlanCount / planTasks.length) * 100)
    : 0;
  const todayPlanIndex = Math.min(
    planProgress.durationDays - 1,
    Math.max(
      0,
      Math.floor(
        (new Date().setHours(0, 0, 0, 0) -
          new Date(planProgress.startedAt).setHours(0, 0, 0, 0)) /
          86_400_000,
      ),
    ),
  );

  const dbStats = useMemo(() => {
    const topicCount = new Set(questionBank.map((question) => question.topic)).size;
    const roleplayCount = questionBank.filter((question) =>
      question.tags.includes('source:roleplay'),
    ).length;
    const duplicatePrompts = questionBank.length - new Set(questionBank.map((question) => question.prompt)).size;
    const levelCounts = levelOptions.map((level) => ({
      key: level.key,
      label: level.label,
      count: questionBank.filter((question) => question.level === level.key).length,
    }));

    return {
      total: questionBank.length,
      answers: modelAnswers.length,
      studyCards: studyCards.length,
      topicCount,
      roleplayCount,
      duplicatePrompts,
      levelCounts,
    };
  }, [modelAnswers.length, studyCards.length]);

  const dbFilteredQuestions = useMemo(() => {
    const query = dbSearch.trim().toLowerCase();
    return questionBank
      .filter((question) => dbTopicFilter === 'all' || question.topic === dbTopicFilter)
      .filter((question) => dbLevelFilter === 'all' || question.level === dbLevelFilter)
      .filter((question) => dbTaskFilter === 'all' || question.taskType === dbTaskFilter)
      .filter((question) => {
        if (!query) return true;
        return (
          question.prompt.toLowerCase().includes(query) ||
          getTopicLabel(question.topic).toLowerCase().includes(query) ||
          question.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      })
      .slice(0, 80);
  }, [dbLevelFilter, dbSearch, dbTaskFilter, dbTopicFilter]);

  const dbFilteredAnswers = useMemo(() => {
    const query = dbSearch.trim().toLowerCase();
    return modelAnswers
      .filter((answer) => dbTopicFilter === 'all' || answer.topic === dbTopicFilter)
      .filter((answer) => dbLevelFilter === 'all' || answer.level === dbLevelFilter)
      .filter((answer) => dbTaskFilter === 'all' || answer.taskType === dbTaskFilter)
      .filter((answer) => {
        if (!query) return true;
        return (
          answer.title.toLowerCase().includes(query) ||
          answer.answer.toLowerCase().includes(query) ||
          getTopicLabel(answer.topic).toLowerCase().includes(query) ||
          answer.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      })
      .slice(0, 80);
  }, [dbLevelFilter, dbSearch, dbTaskFilter, dbTopicFilter, modelAnswers]);

  const dbFilteredCards = useMemo(() => {
    const query = dbSearch.trim().toLowerCase();
    return studyCards
      .filter((card) => dbStudyCategoryFilter === 'all' || card.category === dbStudyCategoryFilter)
      .filter((card) => {
        if (!query) return true;
        return (
          card.title.toLowerCase().includes(query) ||
          card.content.toLowerCase().includes(query) ||
          card.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      })
      .slice(0, 80);
  }, [dbSearch, dbStudyCategoryFilter, studyCards]);

  const dbCurrentCount =
    dbView === 'questions'
      ? dbFilteredQuestions.length
      : dbView === 'answers'
        ? dbFilteredAnswers.length
        : dbFilteredCards.length;

  const selectedVoice = useMemo(
    () =>
      voices.find((voice) => voice.name === voiceName) ??
      voices.find((voice) => voice.lang.toLowerCase().startsWith('en')) ??
      voices[0],
    [voiceName, voices],
  );

  useEffect(() => {
    const loadVoices = () => {
      const nextVoices = window.speechSynthesis?.getVoices?.() ?? [];
      setVoices(nextVoices);
      if (!voiceName) {
        const englishVoice = nextVoices.find((voice) => voice.lang.toLowerCase().startsWith('en'));
        setVoiceName(englishVoice?.name ?? nextVoices[0]?.name ?? '');
      }
    };

    loadVoices();
    window.speechSynthesis?.addEventListener?.('voiceschanged', loadVoices);
    return () => window.speechSynthesis?.removeEventListener?.('voiceschanged', loadVoices);
  }, [voiceName]);

  useEffect(() => {
    if (phase !== 'database' || studyBankLoaded) return;

    import('./data/studyBank').then((module) => {
      setModelAnswers(module.modelAnswerBank);
      setStudyCards(module.studyCardBank);
      setStudyBankLoaded(true);
    });
  }, [phase, studyBankLoaded]);

  useEffect(() => {
    try {
      window.localStorage.setItem(planStorageKey, JSON.stringify(planProgress));
    } catch {
      // Ignore storage failures so the study flow still works in restricted contexts.
    }
  }, [planProgress]);

  useEffect(() => {
    if (phase !== 'exam' || sessionMode !== 'mock') return;
    if (totalTimeLeft <= 0) {
      stopRecording();
      setPhase('review');
      return;
    }

    const timer = window.setInterval(() => {
      setTotalTimeLeft((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [phase, sessionMode, totalTimeLeft]);

  useEffect(() => {
    if (phase !== 'exam') return;

    const timer = window.setInterval(() => {
      setClockNow(Date.now());
    }, 500);

    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (!isRecording) return;
    if (questionTimeLeft <= 0) {
      stopRecording();
      return;
    }

    const timer = window.setInterval(() => {
      setQuestionTimeLeft((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isRecording, questionTimeLeft]);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const testMicrophone = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      setMicStatus('ready');
    } catch {
      setMicStatus('blocked');
    }
  }, []);

  const speak = useCallback(
    (text: string, onDone?: () => void) => {
      window.speechSynthesis?.cancel();

      if (!('speechSynthesis' in window) || !window.SpeechSynthesisUtterance) {
        onDone?.();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedVoice?.lang ?? 'en-US';
      utterance.voice = selectedVoice ?? null;
      utterance.rate = 0.92;
      utterance.pitch = 1;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        onDone?.();
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        onDone?.();
      };

      window.speechSynthesis.speak(utterance);
    },
    [selectedVoice],
  );

  const stopRecording = useCallback((discard = false) => {
    const recorder = recorderRef.current;

    if (recorder && recorder.state !== 'inactive') {
      discardNextRecordingRef.current = discard;
      recorder.stop();
    } else if (discard) {
      discardNextRecordingRef.current = false;
    }
  }, []);

  const startRecording = useCallback(async () => {
    if (!currentQuestion || isRecordingRef.current) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      streamRef.current = stream;
      recorderRef.current = recorder;
      recordStartedAtRef.current = Date.now();

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        const shouldDiscard = discardNextRecordingRef.current;
        discardNextRecordingRef.current = false;
        isRecordingRef.current = false;
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        const durationSec = Math.max(1, Math.round((Date.now() - recordStartedAtRef.current) / 1000));
        const blobUrl = URL.createObjectURL(blob);
        if (shouldDiscard) {
          URL.revokeObjectURL(blobUrl);
        } else {
          setRecordings((previous) => {
            const next = previous.filter((entry) => entry.questionId !== currentQuestion.id);
            return [
              ...next,
              {
                questionId: currentQuestion.id,
                sequence: currentQuestion.sequence,
                durationSec,
                blobUrl,
                createdAt: new Date().toISOString(),
              },
            ].sort((a, b) => a.sequence - b.sequence);
          });
        }
        setIsRecording(false);
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setMicStatus('ready');
      isRecordingRef.current = true;
      setIsRecording(true);
    } catch {
      setMicStatus('blocked');
      isRecordingRef.current = false;
      setIsRecording(false);
    }
  }, [currentQuestion]);

  const beginQuestion = useCallback(() => {
    if (!currentQuestion) return;

    const startedAt = Date.now();
    setQuestionTimeLeft(currentQuestion.timeLimitSec);
    setQuestionStartedAt(startedAt);
    setReplayAvailableUntil(null);
    setHasReplayedPrompt(false);
    setClockNow(startedAt);
    setStartedQuestionIds((previous) => new Set(previous).add(currentQuestion.id));
    speak(currentQuestion.prompt, () => {
      if (isStrictExam) {
        setReplayAvailableUntil(Date.now() + 5_000);
      }
      startRecording();
    });
  }, [currentQuestion, isStrictExam, speak, startRecording]);

  const replayPrompt = useCallback(() => {
    if (!currentQuestion || isSpeaking) return;

    if (isStrictExam) {
      if (!canReplayPrompt) return;
      setHasReplayedPrompt(true);
      setReplayAvailableUntil(null);
      if (isRecordingRef.current) {
        stopRecording(true);
      }
      speak(currentQuestion.prompt, startRecording);
      return;
    }

    if (isRecording) return;
    speak(currentQuestion.prompt);
  }, [
    canReplayPrompt,
    currentQuestion,
    isRecording,
    isSpeaking,
    isStrictExam,
    speak,
    startRecording,
    stopRecording,
  ]);

  const startExam = useCallback(() => {
    const builtQuestions = buildExamQuestions(selectedTopics, selectedLevel);
    setSessionMode('mock');
    setQuestions(builtQuestions);
    setCurrentIndex(0);
    setTotalTimeLeft(defaultExamSettings.totalTimeSec);
    setQuestionTimeLeft(builtQuestions[0]?.timeLimitSec ?? defaultExamSettings.questionTimeSec);
    setRecordings([]);
    setStartedQuestionIds(new Set());
    setQuestionStartedAt(null);
    setReplayAvailableUntil(null);
    setHasReplayedPrompt(false);
    setClockNow(Date.now());
    setSessionId(buildSessionId());
    setPhase('exam');
  }, [selectedLevel, selectedTopics]);

  const startPracticeForTopic = useCallback((topic = practiceTopic, level = selectedLevel) => {
    const builtQuestions = buildPracticeQuestions(topic, level);
    setSessionMode('practice');
    setQuestions(builtQuestions);
    setCurrentIndex(0);
    setTotalTimeLeft(0);
    setQuestionTimeLeft(builtQuestions[0]?.timeLimitSec ?? defaultExamSettings.questionTimeSec);
    setRecordings([]);
    setStartedQuestionIds(new Set());
    setQuestionStartedAt(null);
    setReplayAvailableUntil(null);
    setHasReplayedPrompt(false);
    setClockNow(Date.now());
    setSessionId(buildSessionId());
    setPhase('exam');
  }, [practiceTopic, selectedLevel]);

  const startPractice = useCallback(() => {
    startPracticeForTopic();
  }, [startPracticeForTopic]);

  const startPlanMock = useCallback(
    (task: StudyPlanTask) => {
      const planTopics = task.topic
        ? Array.from(new Set([task.topic, ...selectedTopics]))
        : selectedTopics;
      const builtQuestions = buildExamQuestions(planTopics, task.level ?? selectedLevel);
      setSessionMode('mock');
      setQuestions(builtQuestions);
      setCurrentIndex(0);
      setTotalTimeLeft(defaultExamSettings.totalTimeSec);
      setQuestionTimeLeft(builtQuestions[0]?.timeLimitSec ?? defaultExamSettings.questionTimeSec);
      setRecordings([]);
      setStartedQuestionIds(new Set());
      setQuestionStartedAt(null);
      setReplayAvailableUntil(null);
      setHasReplayedPrompt(false);
      setClockNow(Date.now());
      setSessionId(buildSessionId());
      setPhase('exam');
    },
    [selectedLevel, selectedTopics],
  );

  const nextQuestion = useCallback(() => {
    if (isStrictExam && !canMoveNext) return;

    stopRecording();
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    setQuestionStartedAt(null);
    setReplayAvailableUntil(null);
    setHasReplayedPrompt(false);
    setClockNow(Date.now());

    if (currentIndex >= questions.length - 1) {
      setPhase('review');
      return;
    }

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setQuestionTimeLeft(questions[nextIndex]?.timeLimitSec ?? defaultExamSettings.questionTimeSec);
  }, [canMoveNext, currentIndex, isStrictExam, questions, stopRecording]);

  const resetExam = useCallback(() => {
    stopRecording(true);
    window.speechSynthesis?.cancel();
    recordings.forEach((entry) => URL.revokeObjectURL(entry.blobUrl));
    setQuestions([]);
    setRecordings([]);
    setCurrentIndex(0);
    setTotalTimeLeft(defaultExamSettings.totalTimeSec);
    setQuestionTimeLeft(defaultExamSettings.questionTimeSec);
    setStartedQuestionIds(new Set());
    setQuestionStartedAt(null);
    setReplayAvailableUntil(null);
    setHasReplayedPrompt(false);
    setSessionMode('mock');
    setPhase('setup');
  }, [recordings, stopRecording]);

  const toggleTopic = (topic: TopicKey) => {
    if (topic === 'intro') return;
    setSelectedTopics((previous) =>
      previous.includes(topic)
        ? previous.filter((item) => item !== topic)
        : [...previous, topic],
    );
  };

  const togglePlanTask = (taskId: string) => {
    setPlanProgress((previous) => ({
      ...previous,
      completed: {
        ...previous.completed,
        [taskId]: !previous.completed[taskId],
      },
    }));
  };

  const updatePlanNote = (taskId: string, note: string) => {
    setPlanProgress((previous) => ({
      ...previous,
      notes: {
        ...previous.notes,
        [taskId]: note,
      },
    }));
  };

  const resetStudyPlan = () => {
    setPlanProgress({
      startedAt: new Date().toISOString(),
      durationDays: planProgress.durationDays,
      completed: {},
      notes: {},
    });
  };

  const openPlanStudy = (task: StudyPlanTask) => {
    setDbView(task.kind === 'memorize' ? 'answers' : 'questions');
    setDbTopicFilter(task.topic ?? 'all');
    setDbLevelFilter(task.level ?? 'all');
    setDbTaskFilter('all');
    setDbSearch('');
    setPhase('database');
  };

  const exportSession = () => {
    const payload = {
      sessionId,
      sessionMode,
      selectedTopics,
      practiceTopic: sessionMode === 'practice' ? practiceTopic : null,
      selectedLevel,
      totalQuestions: questions.length,
      completedCount,
      generatedAt: new Date().toISOString(),
      questions: questions.map(({ id, sequence, topic, level, taskType, prompt }) => ({
        id,
        sequence,
        topic,
        level,
        taskType,
        prompt,
        recording: recordings.find((entry) => entry.questionId === id) ?? null,
      })),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${sessionId}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportStudyPortfolio = () => {
    const payload = {
      generatedAt: new Date().toISOString(),
      startedAt: planProgress.startedAt,
      durationDays: planProgress.durationDays,
      summary: {
        totalTasks: planTasks.length,
        completedTasks: completedPlanCount,
        completionRate: planCompletionRate,
        totalMinutes: totalPlanMinutes,
        completedMinutes: completedPlanMinutes,
      },
      days: studyPlan.map((day) => ({
        ...day,
        tasks: day.tasks.map((task) => ({
          ...task,
          completed: !!planProgress.completed[task.id],
          note: planProgress.notes[task.id] ?? '',
        })),
      })),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `opic-${planProgress.durationDays}day-study-portfolio.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportQuestionDb = () => {
    const payload = {
      generatedAt: new Date().toISOString(),
      filters: {
        view: dbView,
        topic: dbTopicFilter,
        level: dbLevelFilter,
        taskType: dbTaskFilter,
        studyCategory: dbStudyCategoryFilter,
        search: dbSearch,
      },
      stats: dbStats,
      questions: dbView === 'questions' ? dbFilteredQuestions : [],
      modelAnswers: dbView === 'answers' ? dbFilteredAnswers : [],
      studyCards: dbView === 'cards' ? dbFilteredCards : [],
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `opic-${dbView}-db.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <Headphones size={22} />
          </div>
          <div>
            <strong>OPIc Mock Lab</strong>
            <span>Speaking simulator</span>
          </div>
        </div>

        <nav className="phase-nav" aria-label="진행 단계">
          {phaseOrder.map((item) => (
            <span key={item} className={phaseOrder.indexOf(item) <= phaseOrder.indexOf(phase) ? 'active' : ''}>
              {phaseLabels[item]}
            </span>
          ))}
        </nav>
      </header>

      {phase === 'setup' && (
        <section className="workspace setup-grid">
          <div className="panel primary-panel">
            <div className="panel-kicker">
              <Settings2 size={18} />
              시스템 점검
            </div>
            <h1>실전 흐름으로 바로 시작</h1>
            <div className="check-grid">
              <div className={`check-card ${micStatus === 'ready' ? 'ok' : ''}`}>
                <Mic size={24} />
                <strong>마이크</strong>
                <span>{micStatus === 'ready' ? '사용 가능' : micStatus === 'blocked' ? '권한 필요' : '대기'}</span>
                <button className="ghost-button" onClick={testMicrophone}>
                  <CheckCircle2 size={18} />
                  테스트
                </button>
              </div>
              <div className="check-card ok">
                <Volume2 size={24} />
                <strong>TTS</strong>
                <span>{voices.length ? `${voices.length} voices` : '브라우저 기본'}</span>
                <button
                  className="ghost-button"
                  onClick={() => speak('This is a short speaker test for your OPIc practice session.')}
                >
                  <Play size={18} />
                  재생
                </button>
              </div>
              <div className="check-card ok">
                <Database size={24} />
                <strong>문제 DB</strong>
                <span>{questionBank.length} prompts</span>
                <span className="mini-pill">PDF</span>
              </div>
            </div>

            <label className="field-label" htmlFor="voice">
              TTS Voice
            </label>
            <select
              id="voice"
              value={voiceName}
              onChange={(event) => setVoiceName(event.target.value)}
            >
              {voices.length === 0 && <option value="">Browser default</option>}
              {voices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>

            <div className="mode-actions">
              <button className="primary-button wide" onClick={() => setPhase('plan')}>
                <CalendarDays size={19} />
                공부 플랜
              </button>
              <button className="primary-button wide" onClick={() => setPhase('survey')}>
                <ListChecks size={19} />
                모의고사
              </button>
              <button className="secondary-button wide" onClick={() => setPhase('practice')}>
                <BookOpen size={19} />
                주제 연습
              </button>
              <button className="secondary-button wide" onClick={() => setPhase('database')}>
                <FileSearch size={19} />
                DB 관리
              </button>
            </div>
          </div>

          <div className="panel compact-panel">
            <div className="panel-kicker">
              <Timer size={18} />
              시험 설정
            </div>
            <dl className="stats-list">
              <div>
                <dt>문항</dt>
                <dd>{defaultExamSettings.questionCount}</dd>
              </div>
              <div>
                <dt>전체 시간</dt>
                <dd>{formatTime(defaultExamSettings.totalTimeSec)}</dd>
              </div>
              <div>
                <dt>답변 시간</dt>
                <dd>문항별 90-150초</dd>
              </div>
            </dl>
          </div>
        </section>
      )}

      {phase === 'plan' && (
        <section className="workspace">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Study Portfolio</span>
              <h1>공부 플랜</h1>
            </div>
            <span className="selection-count">{planCompletionRate}% complete</span>
          </div>

          <div className="plan-duration" aria-label="공부 플랜 기간">
            {planDurationOptions.map((option) => (
              <button
                key={option.days}
                className={planProgress.durationDays === option.days ? 'active' : ''}
                onClick={() =>
                  setPlanProgress((previous) => ({
                    ...previous,
                    durationDays: option.days,
                  }))
                }
              >
                <strong>{option.label}</strong>
                <span>{option.caption}</span>
              </button>
            ))}
          </div>

          <div className="plan-stats">
            <div className="db-stat-card">
              <ClipboardCheck size={22} />
              <strong>{completedPlanCount}/{planTasks.length}</strong>
              <span>완료 과제</span>
            </div>
            <div className="db-stat-card">
              <Timer size={22} />
              <strong>{completedPlanMinutes}/{totalPlanMinutes}</strong>
              <span>학습 분</span>
            </div>
            <div className="db-stat-card">
              <CalendarDays size={22} />
              <strong>D{todayPlanIndex + 1}/{planProgress.durationDays}</strong>
              <span>오늘 플랜</span>
            </div>
          </div>

          <div className="plan-list">
            {studyPlan.map((day, index) => {
              const dayCompleted = day.tasks.filter((task) => planProgress.completed[task.id]).length;
              return (
                <article
                  className={`plan-day ${index === todayPlanIndex ? 'today' : ''}`}
                  key={day.id}
                >
                  <div className="plan-day-header">
                    <div>
                      <span className="mini-pill">Day {day.day}</span>
                      <h2>{day.focus}</h2>
                    </div>
                    <span>{day.dateLabel} · {dayCompleted}/{day.tasks.length}</span>
                  </div>

                  <div className="plan-tasks">
                    {day.tasks.map((task) => {
                      const completed = !!planProgress.completed[task.id];
                      return (
                        <div className={`plan-task ${completed ? 'done' : ''}`} key={task.id}>
                          <button
                            className="plan-check"
                            onClick={() => togglePlanTask(task.id)}
                            aria-pressed={completed}
                            title="완료 여부"
                          >
                            <CheckCircle2 size={20} />
                          </button>
                          <div className="plan-task-body">
                            <div className="plan-task-title">
                              <span className="mini-pill">{planTaskLabels[task.kind]}</span>
                              <strong>{task.title}</strong>
                              <small>{task.minutes}분</small>
                            </div>
                            <p>{task.detail}</p>
                            <div className="plan-task-actions">
                              {task.kind === 'memorize' && (
                                <>
                                  <button
                                    className="ghost-button small-button"
                                    onClick={() => openPlanStudy(task)}
                                  >
                                    <FileSearch size={16} />
                                    답변 보기
                                  </button>
                                  <button
                                    className="ghost-button small-button"
                                    onClick={() => {
                                      setDbView('cards');
                                      setDbStudyCategoryFilter('all');
                                      setDbSearch('');
                                      setPhase('database');
                                    }}
                                  >
                                    <BookOpen size={16} />
                                    암기 카드
                                  </button>
                                </>
                              )}
                              {task.kind === 'speaking' && (
                                <button
                                  className="ghost-button small-button"
                                  onClick={() =>
                                    startPracticeForTopic(
                                      task.topic ?? practiceTopic,
                                      task.level ?? selectedLevel,
                                    )
                                  }
                                >
                                  <Mic size={16} />
                                  연습 시작
                                </button>
                              )}
                              {task.kind === 'mock' && (
                                <button
                                  className="ghost-button small-button"
                                  onClick={() => startPlanMock(task)}
                                >
                                  <Play size={16} />
                                  실전 시작
                                </button>
                              )}
                            </div>
                            <textarea
                              value={planProgress.notes[task.id] ?? ''}
                              onChange={(event) => updatePlanNote(task.id, event.target.value)}
                              placeholder="실제 수행 내용, 외운 표현, 부족했던 점"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="action-row">
            <button className="secondary-button" onClick={resetStudyPlan}>
              <RotateCcw size={18} />
              플랜 초기화
            </button>
            <button className="secondary-button" onClick={() => setPhase('setup')}>
              이전
            </button>
            <button className="primary-button" onClick={exportStudyPortfolio}>
              <Download size={18} />
              포트폴리오 내보내기
            </button>
          </div>
        </section>
      )}

      {phase === 'survey' && (
        <section className="workspace">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Background Survey</span>
              <h1>시험에 반영할 주제 선택</h1>
            </div>
            <span className="selection-count">
              {selectedTopics.length}/{defaultExamSettings.minSurveyTopics} selected
            </span>
          </div>

          <div className="topic-groups">
            {Object.entries(groupedTopics).map(([group, options]) => (
              <section className="topic-group" key={group}>
                <h2>{groupLabels[group as keyof typeof groupLabels]}</h2>
                <div className="topic-grid">
                  {options.map((option) => {
                    const selected = option.key === 'intro' || selectedTopics.includes(option.key);
                    return (
                      <button
                        key={option.key}
                        className={`topic-chip ${selected ? 'selected' : ''}`}
                        onClick={() => toggleTopic(option.key)}
                        disabled={option.key === 'intro'}
                      >
                        <CheckCircle2 size={17} />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <div className="action-row">
            <button className="secondary-button" onClick={() => setPhase('setup')}>
              이전
            </button>
            <button
              className="primary-button"
              onClick={() => setPhase('level')}
              disabled={!canProceedSurvey}
            >
              난이도 선택
              <ChevronRight size={20} />
            </button>
          </div>
        </section>
      )}

      {phase === 'practice' && (
        <section className="workspace">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Topic Practice</span>
              <h1>주제별 연습</h1>
            </div>
            <span className="selection-count">{getTopicLabel(practiceTopic)}</span>
          </div>

          <div className="practice-layout">
            <section className="topic-group">
              <h2>주제</h2>
              <div className="topic-grid">
                {practiceTopics.map((option) => (
                  <button
                    key={option.key}
                    className={`topic-chip ${practiceTopic === option.key ? 'selected' : ''}`}
                    onClick={() => setPracticeTopic(option.key)}
                  >
                    <CheckCircle2 size={17} />
                    {option.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="topic-group">
              <h2>난이도</h2>
              <div className="level-grid compact-level-grid">
                {levelOptions.map((option) => (
                  <button
                    key={option.key}
                    className={`level-card ${selectedLevel === option.key ? 'selected' : ''}`}
                    onClick={() => setSelectedLevel(option.key)}
                  >
                    <strong>{option.label}</strong>
                    <span>{option.target}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="action-row">
            <button className="secondary-button" onClick={() => setPhase('setup')}>
              이전
            </button>
            <button className="primary-button" onClick={startPractice}>
              연습 시작
              <ChevronRight size={20} />
            </button>
          </div>
        </section>
      )}

      {phase === 'database' && (
        <section className="workspace">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Question DB</span>
              <h1>문제 DB 관리</h1>
            </div>
            <span className="selection-count">{dbCurrentCount}</span>
          </div>

          <div className="db-stats">
            <div className="db-stat-card">
              <Database size={22} />
              <strong>{dbStats.total}</strong>
              <span>전체 문항</span>
            </div>
            <div className="db-stat-card">
              <ListChecks size={22} />
              <strong>{dbStats.answers}</strong>
              <span>모범 답변</span>
            </div>
            <div className="db-stat-card">
              <BookOpen size={22} />
              <strong>{dbStats.studyCards}</strong>
              <span>암기 카드</span>
            </div>
            <div className={`db-stat-card ${dbStats.duplicatePrompts === 0 ? 'ok' : 'warn'}`}>
              <CheckCircle2 size={22} />
              <strong>{dbStats.duplicatePrompts}</strong>
              <span>중복 프롬프트</span>
            </div>
          </div>

          <div className="db-tabs" aria-label="DB view">
            <button
              className={dbView === 'questions' ? 'active' : ''}
              onClick={() => setDbView('questions')}
            >
              문제
            </button>
            <button
              className={dbView === 'answers' ? 'active' : ''}
              onClick={() => setDbView('answers')}
            >
              모범 답변
            </button>
            <button
              className={dbView === 'cards' ? 'active' : ''}
              onClick={() => setDbView('cards')}
            >
              단어 암기
            </button>
          </div>

          <div className="db-toolbar">
            <label className="db-search">
              <Search size={18} />
              <input
                value={dbSearch}
                onChange={(event) => setDbSearch(event.target.value)}
                placeholder="Search prompts or tags"
              />
            </label>
            {dbView !== 'cards' && (
              <select
                value={dbTopicFilter}
                onChange={(event) => setDbTopicFilter(event.target.value as TopicKey | 'all')}
                aria-label="Topic filter"
              >
                <option value="all">All topics</option>
                {practiceTopics.map((topic) => (
                  <option key={topic.key} value={topic.key}>
                    {topic.label}
                  </option>
                ))}
              </select>
            )}
            {dbView !== 'cards' && (
              <select
                value={dbLevelFilter}
                onChange={(event) => setDbLevelFilter(event.target.value as LevelKey | 'all')}
                aria-label="Level filter"
              >
                <option value="all">All levels</option>
                {levelOptions.map((level) => (
                  <option key={level.key} value={level.key}>
                    {level.label}
                  </option>
                ))}
              </select>
            )}
            {dbView === 'cards' ? (
              <select
                value={dbStudyCategoryFilter}
                onChange={(event) =>
                  setDbStudyCategoryFilter(event.target.value as StudyCardCategory | 'all')
                }
                aria-label="Study category filter"
              >
                <option value="all">All cards</option>
                {Object.entries(studyCategoryLabels).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            ) : (
              <select
                value={dbTaskFilter}
                onChange={(event) => setDbTaskFilter(event.target.value as TaskType | 'all')}
                aria-label="Task filter"
              >
                <option value="all">All tasks</option>
                {Object.entries(taskLabels).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            )}
          </div>

          {dbView !== 'cards' && (
            <div className="db-levels">
              {dbStats.levelCounts.map((level) => (
                <span key={level.key}>
                  {level.label}: {level.count}
                </span>
              ))}
            </div>
          )}

          <div className="db-list">
            {dbView === 'questions' &&
              dbFilteredQuestions.map((question) => (
                <article className="db-item" key={question.id}>
                  <div className="db-item-meta">
                    <span className="mini-pill">{getTopicLabel(question.topic)}</span>
                    <span className="mini-pill">{question.level}</span>
                    <span className="mini-pill">{taskLabels[question.taskType]}</span>
                  </div>
                  <p>{question.prompt}</p>
                  <small>{question.id} · {question.tags.slice(0, 3).join(' · ')}</small>
                  <div className="db-item-actions">
                    <button className="ghost-button small-button" onClick={() => speak(question.prompt)}>
                      <Volume2 size={16} />
                      듣기
                    </button>
                  </div>
                </article>
              ))}

            {dbView === 'answers' &&
              dbFilteredAnswers.map((answer) => (
                <article className="db-item answer-item" key={answer.id}>
                  <div className="db-item-meta">
                    <span className="mini-pill">{getTopicLabel(answer.topic)}</span>
                    <span className="mini-pill">{answer.level}</span>
                    <span className="mini-pill">{taskLabels[answer.taskType]}</span>
                  </div>
                  <h2>{answer.title}</h2>
                  <p>{answer.answer}</p>
                  <small>{answer.id} · {answer.tags.slice(0, 3).join(' · ')}</small>
                  <div className="db-item-actions">
                    <button className="ghost-button small-button" onClick={() => speak(answer.answer)}>
                      <Volume2 size={16} />
                      듣기
                    </button>
                  </div>
                </article>
              ))}

            {dbView === 'cards' &&
              dbFilteredCards.map((card) => (
                <article className="db-item answer-item" key={card.id}>
                  <div className="db-item-meta">
                    <span className="mini-pill">{studyCategoryLabels[card.category]}</span>
                    {card.tags.slice(0, 2).map((tag) => (
                      <span className="mini-pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2>{card.title}</h2>
                  <p>{card.content}</p>
                  <div className="db-item-actions">
                    <button className="ghost-button small-button" onClick={() => speak(card.content)}>
                      <Volume2 size={16} />
                      듣기
                    </button>
                  </div>
                </article>
              ))}
          </div>

          <div className="action-row">
            <button className="secondary-button" onClick={() => setPhase('setup')}>
              이전
            </button>
            <button className="primary-button" onClick={exportQuestionDb}>
              <Download size={18} />
              DB 내보내기
            </button>
          </div>
        </section>
      )}

      {phase === 'level' && (
        <section className="workspace">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Self-Assessment</span>
              <h1>목표 난이도 선택</h1>
            </div>
          </div>

          <div className="level-grid">
            {levelOptions.map((option) => (
              <button
                key={option.key}
                className={`level-card ${selectedLevel === option.key ? 'selected' : ''}`}
                onClick={() => setSelectedLevel(option.key)}
              >
                <strong>{option.label}</strong>
                <span>{option.target}</span>
              </button>
            ))}
          </div>

          <div className="panel rehearsal-panel">
            <div className="panel-kicker">
              <BookOpen size={18} />
              Sample
            </div>
            <p>
              Tell me about a place you visit often. What do you do there, and why do you like it?
            </p>
            <button
              className="ghost-button"
              onClick={() =>
                speak(
                  'Tell me about a place you visit often. What do you do there, and why do you like it?',
                )
              }
            >
              <Volume2 size={18} />
              듣기
            </button>
          </div>

          <div className="action-row">
            <button className="secondary-button" onClick={() => setPhase('survey')}>
              이전
            </button>
            <button className="primary-button" onClick={() => setPhase('warmup')}>
              워밍업
              <ChevronRight size={20} />
            </button>
          </div>
        </section>
      )}

      {phase === 'warmup' && (
        <section className="workspace warmup-layout">
          <div className="interviewer-panel">
            <div className="avatar" aria-hidden="true">
              <span />
            </div>
            <div>
              <span className="eyebrow">Warm-Up</span>
              <h1>Let’s begin with a sample question.</h1>
              <p>Tell me about yourself and what you usually do on weekdays.</p>
              <div className="button-row">
                <button
                  className="secondary-button"
                  onClick={() =>
                    speak('Tell me about yourself and what you usually do on weekdays.')
                  }
                >
                  <Volume2 size={18} />
                  듣기
                </button>
                <button className="primary-button" onClick={startExam}>
                  시험 시작
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {phase === 'exam' && currentQuestion && (
        <section className="exam-shell">
          <div className="exam-status">
            <div>
              <span>Question {currentQuestion.sequence}</span>
              <strong>{getTopicLabel(currentQuestion.topic)}</strong>
            </div>
            <div className="timer-strip">
              {sessionMode === 'mock' ? (
                <span>
                  <Timer size={17} />
                  {formatTime(totalTimeLeft)}
                </span>
              ) : (
                <span>
                  <BookOpen size={17} />
                  {currentQuestion.sequence}/{questions.length}
                </span>
              )}
              <span className={questionTimeLeft <= 20 ? 'danger' : ''}>
                <Mic size={17} />
                {formatTime(questionTimeLeft)}
              </span>
            </div>
          </div>

          <div className="progress-track">
            <span style={{ width: `${progress}%` }} />
          </div>

          <div className="exam-grid">
            <section className="prompt-panel">
              <div className="avatar large" aria-hidden="true">
                <span />
              </div>
              <div className="prompt-meta">
                <span className="mini-pill">{currentQuestion.taskType}</span>
                <span className="mini-pill">{currentQuestion.level}</span>
              </div>
              {isStrictExam ? (
                <div className="hidden-prompt">
                  <EyeOff size={42} />
                  <h1>Voice Prompt</h1>
                  <span>{questionStarted ? 'Recording window active' : 'Ready'}</span>
                </div>
              ) : (
                <h1>{currentQuestion.prompt}</h1>
              )}
            </section>

            <aside className="response-panel">
              <div className="response-state">
                <div className={`record-ring ${isRecording ? 'recording' : ''}`}>
                  <Mic size={32} />
                </div>
                <strong>
                  {isSpeaking
                    ? '문항 재생 중'
                    : isRecording
                      ? '답변 녹음 중'
                      : startedQuestionIds.has(currentQuestion.id)
                        ? '답변 저장됨'
                        : '대기 중'}
                </strong>
                <div className="wave" aria-hidden="true">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
              </div>

              <div className="exam-rules">
                <span className={replaySecondsLeft > 0 ? 'active' : ''}>
                  다시듣기 {sessionMode === 'practice' ? 'free' : `${replaySecondsLeft}s`}
                </span>
                <span className={canMoveNext ? 'active' : ''}>
                  NEXT {sessionMode === 'practice' ? 'free' : nextUnlockSecondsLeft > 0 ? `${nextUnlockSecondsLeft}s` : 'ready'}
                </span>
              </div>

              <div className="control-grid">
                <button
                  className="primary-button"
                  onClick={beginQuestion}
                  disabled={isSpeaking || isRecording || (isStrictExam && questionStarted)}
                  title="문항을 듣고 답변 녹음을 시작합니다"
                >
                  <Play size={19} />
                  문항 시작
                </button>
                <button
                  className="secondary-button"
                  onClick={replayPrompt}
                  disabled={!canReplayPrompt}
                  title="현재 문항을 다시 듣습니다"
                >
                  <Volume2 size={19} />
                  다시 듣기
                </button>
                <button
                  className="secondary-button"
                  onClick={() => stopRecording()}
                  disabled={!isRecording || isStrictExam}
                  title="현재 답변 녹음을 종료합니다"
                >
                  <Square size={18} />
                  종료
                </button>
                <button
                  className="secondary-button"
                  onClick={nextQuestion}
                  disabled={!canMoveNext}
                  title="다음 문항으로 이동합니다"
                >
                  <SkipForward size={19} />
                  다음
                </button>
              </div>

              {sessionMode === 'practice' && (
                <div className="recording-list compact">
                  {recordings
                    .filter((entry) => entry.questionId === currentQuestion.id)
                    .map((entry) => (
                      <audio key={entry.questionId} controls src={entry.blobUrl} />
                    ))}
                </div>
              )}
            </aside>
          </div>
        </section>
      )}

      {phase === 'review' && (
        <section className="workspace">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Review</span>
              <h1>응답 기록</h1>
            </div>
            <span className="selection-count">
              {completedCount}/{questions.length}
            </span>
          </div>

          <div className="review-list">
            {questions.map((question) => {
              const recording = recordings.find((entry) => entry.questionId === question.id);
              return (
                <article className="review-item" key={question.id}>
                  <div>
                    <span className="mini-pill">Q{question.sequence}</span>
                    <h2>{question.prompt}</h2>
                    <p>{getTopicLabel(question.topic)} · {question.taskType}</p>
                  </div>
                  {recording ? (
                    <div className="review-audio">
                      <span>{recording.durationSec}s</span>
                      <audio controls src={recording.blobUrl} />
                    </div>
                  ) : (
                    <span className="missing">미응답</span>
                  )}
                </article>
              );
            })}
          </div>

          <div className="action-row">
            <button className="secondary-button" onClick={resetExam}>
              <RotateCcw size={18} />
              새 시험
            </button>
            <button className="primary-button" onClick={exportSession}>
              <Download size={18} />
              세션 내보내기
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
