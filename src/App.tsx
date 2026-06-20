import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
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
  survey: '서베이',
  level: '난이도',
  warmup: '워밍업',
  practice: '연습',
  database: 'DB',
  exam: '시험',
  review: '리뷰',
};

const phaseOrder: ExamPhase[] = ['setup', 'survey', 'level', 'warmup', 'practice', 'database', 'exam', 'review'];

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

  const startPractice = useCallback(() => {
    const builtQuestions = buildPracticeQuestions(practiceTopic, selectedLevel);
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
