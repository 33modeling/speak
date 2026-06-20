import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Database,
  Download,
  Headphones,
  Mic,
  Play,
  RotateCcw,
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
import { buildExamQuestions, buildSessionId, formatTime, getTopicLabel } from './utils/exam';
import type { ExamPhase, ExamQuestion, LevelKey, RecordingEntry, TopicKey } from './types';

const groupLabels = {
  profile: '프로필',
  daily: '일상',
  interest: '관심사',
  situation: '상황',
};

const phaseLabels: Record<ExamPhase, string> = {
  setup: '점검',
  survey: '서베이',
  level: '난이도',
  warmup: '워밍업',
  exam: '시험',
  review: '리뷰',
};

const phaseOrder: ExamPhase[] = ['setup', 'survey', 'level', 'warmup', 'exam', 'review'];

function App() {
  const [phase, setPhase] = useState<ExamPhase>('setup');
  const [selectedTopics, setSelectedTopics] = useState<TopicKey[]>([
    'home',
    'movies',
    'music',
    'travel',
    'restaurant',
    'shopping',
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

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const recordStartedAtRef = useRef<number>(0);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const completedCount = recordings.length;
  const canProceedSurvey = selectedTopics.length >= 4;

  const groupedTopics = useMemo(
    () =>
      topicOptions.reduce<Record<string, typeof topicOptions>>((acc, option) => {
        acc[option.group] = acc[option.group] ?? [];
        acc[option.group].push(option);
        return acc;
      }, {}),
    [],
  );

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
    if (phase !== 'exam') return;
    if (totalTimeLeft <= 0) {
      stopRecording();
      setPhase('review');
      return;
    }

    const timer = window.setInterval(() => {
      setTotalTimeLeft((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [phase, totalTimeLeft]);

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

  const stopRecording = useCallback(() => {
    if (recorderRef.current && recorderRef.current.state !== 'inactive') {
      recorderRef.current.stop();
    }
  }, []);

  const startRecording = useCallback(async () => {
    if (!currentQuestion || isRecording) return;

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
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        const durationSec = Math.max(1, Math.round((Date.now() - recordStartedAtRef.current) / 1000));
        const blobUrl = URL.createObjectURL(blob);
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
        setIsRecording(false);
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setMicStatus('ready');
      setIsRecording(true);
    } catch {
      setMicStatus('blocked');
      setIsRecording(false);
    }
  }, [currentQuestion, isRecording]);

  const beginQuestion = useCallback(() => {
    if (!currentQuestion) return;

    setQuestionTimeLeft(currentQuestion.timeLimitSec);
    setStartedQuestionIds((previous) => new Set(previous).add(currentQuestion.id));
    speak(currentQuestion.prompt, startRecording);
  }, [currentQuestion, speak, startRecording]);

  const replayPrompt = useCallback(() => {
    if (!currentQuestion || isRecording) return;
    speak(currentQuestion.prompt);
  }, [currentQuestion, isRecording, speak]);

  const startExam = useCallback(() => {
    const builtQuestions = buildExamQuestions(selectedTopics, selectedLevel);
    setQuestions(builtQuestions);
    setCurrentIndex(0);
    setTotalTimeLeft(defaultExamSettings.totalTimeSec);
    setQuestionTimeLeft(builtQuestions[0]?.timeLimitSec ?? defaultExamSettings.questionTimeSec);
    setRecordings([]);
    setStartedQuestionIds(new Set());
    setSessionId(buildSessionId());
    setPhase('exam');
  }, [selectedLevel, selectedTopics]);

  const nextQuestion = useCallback(() => {
    stopRecording();
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);

    if (currentIndex >= questions.length - 1) {
      setPhase('review');
      return;
    }

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setQuestionTimeLeft(questions[nextIndex]?.timeLimitSec ?? defaultExamSettings.questionTimeSec);
  }, [currentIndex, questions, stopRecording]);

  const resetExam = useCallback(() => {
    stopRecording();
    window.speechSynthesis?.cancel();
    recordings.forEach((entry) => URL.revokeObjectURL(entry.blobUrl));
    setQuestions([]);
    setRecordings([]);
    setCurrentIndex(0);
    setTotalTimeLeft(defaultExamSettings.totalTimeSec);
    setQuestionTimeLeft(defaultExamSettings.questionTimeSec);
    setStartedQuestionIds(new Set());
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
      selectedTopics,
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
                <span className="mini-pill">더미</span>
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

            <button className="primary-button wide" onClick={() => setPhase('survey')}>
              서베이 시작
              <ChevronRight size={20} />
            </button>
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
            <span className="selection-count">{selectedTopics.length} selected</span>
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
              <span>
                <Timer size={17} />
                {formatTime(totalTimeLeft)}
              </span>
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
              <h1>{currentQuestion.prompt}</h1>
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

              <div className="control-grid">
                <button
                  className="primary-button"
                  onClick={beginQuestion}
                  disabled={isSpeaking || isRecording}
                  title="문항을 듣고 답변 녹음을 시작합니다"
                >
                  <Play size={19} />
                  문항 시작
                </button>
                <button
                  className="secondary-button"
                  onClick={replayPrompt}
                  disabled={isSpeaking || isRecording}
                  title="현재 문항을 다시 듣습니다"
                >
                  <Volume2 size={19} />
                  다시 듣기
                </button>
                <button
                  className="secondary-button"
                  onClick={stopRecording}
                  disabled={!isRecording}
                  title="현재 답변 녹음을 종료합니다"
                >
                  <Square size={18} />
                  종료
                </button>
                <button className="secondary-button" onClick={nextQuestion} title="다음 문항으로 이동합니다">
                  <SkipForward size={19} />
                  다음
                </button>
              </div>

              <div className="recording-list compact">
                {recordings
                  .filter((entry) => entry.questionId === currentQuestion.id)
                  .map((entry) => (
                    <audio key={entry.questionId} controls src={entry.blobUrl} />
                  ))}
              </div>
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
