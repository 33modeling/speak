import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const pdfPath = new URL('../db.pdf', import.meta.url);
const outputPath = new URL('../src/data/pdfQuestionBank.ts', import.meta.url);

const topicMatchers = [
  ['intro', [/자기소개/i]],
  ['furniture', [/Furniture/i, /가구/]],
  ['recycling', [/Recycling/i, /재활용/]],
  ['vacationHome', [/Vacations? at Home/i, /집에서 보내는 휴가/]],
  ['home', [/Housing/i, /Relative’s House/i, /Real Estate/i, /집/, /친척집/, /부동산/]],
  ['industry', [/Industry/i, /산업/]],
  ['music', [/Music/i, /MP3/i, /Performance/i, /음악/, /공연/]],
  ['movies', [/Movies?/i, /영화/]],
  ['tv', [/TV/i, /텔레비전/]],
  ['restaurant', [/Restaurant/i, /음식점/]],
  ['gathering', [/Gatherings?/i, /모임/, /파티/]],
  ['food', [/Food Store/i, /Food/i, /음식/]],
  ['health', [/Health/i, /Doctor Appointment/i, /건강/, /병원예약/]],
  ['shopping', [/Shopping/i, /Store Sale/i, /Store 친구/i, /상점/, /쇼핑/]],
  ['domesticTravel', [/Domestic Trips?/i, /국내여행/]],
  ['overseasTravel', [/Overseas Trips?/i, /해외여행/]],
  ['geography', [/Geography/i, /지형/]],
  ['internet', [/Internet/i, /웹사이트/i, /인터넷/]],
  ['phone', [/Phone/i, /전화기/, /휴대폰/, /통신사/]],
  ['technology', [/Technology/i, /기술/]],
  ['weather', [/Weather/i, /날씨/]],
  ['fashion', [/Fashion/i, /Clothing Store/i, /옷가게/, /패션/]],
  ['transportation', [/Transportation/i, /Rental Car/i, /Car Problem/i, /Bicycle/i, /Train/i, /교통/, /렌터카/, /자동차/, /자전거/, /기차/]],
  ['hotel', [/Hotel/i, /호텔/]],
  ['bank', [/Bank/i, /은행/]],
  ['reservation', [/Appointment/i, /예약/, /회사면접/]],
  ['freeTime', [/Free Time/i, /자유시간/]],
  ['familyFriends', [/Family\/Friend/i, /Friend’s Vacation/i, /Eva’s Trip/i, /가족\/친구/, /친구/]],
  ['holiday', [/Holidays?/i, /휴일/, /명절/]],
];

const englishWordPattern = /[A-Za-z][A-Za-z’'.,?!:-]*/g;
const headingPattern =
  /(공통형 주제|선택형 주제|ROLE PLAY|RP\s|[0-9]+세트\s*:|오픽 기출 세트 예시)/i;
const answerHeadingPattern = /(핵심 답변|답변에 활용|답변 추천|소재선정)/;
const promptSignalPattern =
  /(\?|tell me|describe|what|how|why|where|who|when|call|ask|i’d like|i'd like|i’m sorry|i'm sorry|that’s the end|that's the end|you indicated|you want|you borrowed|you have|imagine|have you ever|some people|please|can you|let’s start|let's start)/i;
const answerOpeningPattern =
  /^(hi[,. ]|hello[,. ]|well[, ]|let me see|back in the day|these days[, ] i|i usually|i often|i have|i remember|recently[, ] i|overall,|garbage is|there is clearly)/i;

function extractText() {
  if (!existsSync(pdfPath)) {
    throw new Error('db.pdf not found in the repository root.');
  }

  const tempDir = mkdtempSync(join(tmpdir(), 'opic-pdf-'));
  const textPath = join(tempDir, 'db.txt');
  execFileSync('pdftotext', ['-layout', pdfPath.pathname, textPath], {
    stdio: ['ignore', 'inherit', 'inherit'],
  });
  return readFileSync(textPath, 'utf8');
}

function cleanLine(line) {
  return line
    .replace(/\f/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function detectTopic(text, fallback = 'custom') {
  for (const [topic, patterns] of topicMatchers) {
    if (patterns.some((pattern) => pattern.test(text))) {
      return topic;
    }
  }
  return fallback;
}

function detectTaskType({ prompt, summary, isRoleplay }) {
  const haystack = `${summary} ${prompt}`.toLowerCase();
  if (isRoleplay) {
    if (/problem|broke|broken|wrong|lost|sorry|resolve|issue|대안|고장|문제|분실|환불|교환/.test(haystack)) {
      return 'problem';
    }
    return 'roleplay';
  }
  if (/compare|different|changed|over time|in the past|when you were a child|과거|현재|비교|변화/.test(haystack)) {
    return 'comparison';
  }
  if (/experience|happened|memorable|recent|last time|tell me about a time|event|episode|기억|경험|사건|최근/.test(haystack)) {
    return 'experience';
  }
  if (/prefer|opinion|think|advantages|disadvantages|concern|why do you think|의견|우려|장점|단점/.test(haystack)) {
    return 'opinion';
  }
  if (/usually|routine|often|normally|how do you|주로|일과|평소|반복/.test(haystack)) {
    return 'routine';
  }
  return 'description';
}

function lineHasPromptText(line) {
  const cleaned = cleanLine(line);
  if (!cleaned) return false;
  if (/^\d+$/.test(cleaned)) return false;
  if (/^\d+\s+\[(Novice|Int|Adv)\]/.test(cleaned)) return false;
  if (/^\[(Novice|Int|Adv)\]/.test(cleaned)) return false;
  if (headingPattern.test(cleaned)) return false;
  if (/^(AI|Free Time|Internet|Phone|Technology|Industry|Format)\b/.test(cleaned)) return false;

  const englishWords = cleaned.match(englishWordPattern) ?? [];
  return englishWords.length >= 3;
}

function normalizePrompt(lines) {
  return lines
    .map(cleanLine)
    .filter(lineHasPromptText)
    .map((line) => line.replace(/^\d+\s+/, ''))
    .join(' ')
    .replace(/\s+([,?.!])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectPromptLines(rawLines, startIndex, endIndex) {
  const block = [];
  let started = false;

  for (let index = startIndex; index < endIndex; index += 1) {
    const rawLine = rawLines[index];
    const cleaned = cleanLine(rawLine);

    if (started && rawLine.includes('\f')) break;
    if (started && headingPattern.test(cleaned)) break;
    if (started && /^(오픽|AI 주제|응시자|난이도|Format)\b/.test(cleaned)) break;

    if (lineHasPromptText(rawLine)) {
      started = true;
    }

    block.push(rawLine);
  }

  return block;
}

function toLevel(token) {
  if (token === 'Novice') return 'novice';
  if (token === 'Adv') return 'advanced';
  return 'intermediate';
}

function timeLimitFor(level, taskType) {
  if (level === 'novice') return 90;
  if (taskType === 'roleplay' || taskType === 'problem' || level === 'advanced') return 150;
  return 120;
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function parseQuestions(text) {
  const rawLines = text.split(/\r?\n/);
  let currentHeading = '';
  let currentTopic = 'custom';
  let isRoleplaySection = false;
  const tagged = [];

  rawLines.forEach((line, index) => {
    const cleaned = cleanLine(line);
    if (!cleaned) return;

    if (headingPattern.test(cleaned)) {
      currentHeading = cleaned;
      currentTopic = detectTopic(cleaned, currentTopic);
      isRoleplaySection = /ROLE PLAY|RP\s|4세트/.test(cleaned);
    }

    const match = cleaned.match(/^(?:\d+\s+)?\[(Novice|Int|Adv)\]\s*(.*)$/);
    if (match) {
      tagged.push({
        index,
        level: toLevel(match[1]),
        summary: match[2],
        heading: currentHeading,
        topic: detectTopic(`${currentHeading} ${match[2]}`, currentTopic),
        isRoleplay: isRoleplaySection,
        isAnswerSection: answerHeadingPattern.test(currentHeading),
      });
    }
  });

  const seenPrompts = new Set();
  const questions = [];

  tagged.forEach((entry, index) => {
    if (entry.isAnswerSection) return;

    const nextIndex = tagged[index + 1]?.index ?? rawLines.length;
    const block = collectPromptLines(rawLines, entry.index + 1, nextIndex);
    const prompt = normalizePrompt(block);
    const englishWords = prompt.match(/[A-Za-z]+/g) ?? [];

    if (englishWords.length < 8) return;
    if (englishWords.length > 170) return;
    if (answerOpeningPattern.test(prompt)) return;
    if (!promptSignalPattern.test(prompt)) return;
    if (seenPrompts.has(prompt)) return;
    seenPrompts.add(prompt);

    const taskType = entry.level === 'novice' ? 'warmup' : detectTaskType({ prompt, summary: entry.summary, isRoleplay: entry.isRoleplay });
    const topic = entry.level === 'novice' ? 'intro' : entry.topic;
    const setTag = `set:${slug(entry.heading || topic)}`;
    const tags = [
      'pdf',
      entry.isRoleplay ? 'source:roleplay' : 'source:topic',
      setTag,
      `summary:${entry.summary}`,
    ];

    questions.push({
      id: `${topic}-${String(questions.length + 1).padStart(4, '0')}`,
      topic,
      level: entry.level,
      taskType,
      prompt,
      timeLimitSec: timeLimitFor(entry.level, taskType),
      tags,
    });
  });

  return questions;
}

function emit(questions) {
  const body = JSON.stringify(questions, null, 2);
  const source = `import type { Question } from '../types';\n\nexport const pdfQuestionBank: Question[] = ${body};\n`;
  writeFileSync(outputPath, source);
}

const text = extractText();
const questions = parseQuestions(text);
emit(questions);

const byTopic = questions.reduce((acc, question) => {
  acc[question.topic] = (acc[question.topic] ?? 0) + 1;
  return acc;
}, {});

console.log(`Generated ${questions.length} questions from db.pdf`);
console.log(byTopic);
