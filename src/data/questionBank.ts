import type { LevelOption, Question, TopicOption } from '../types';

export const topicOptions: TopicOption[] = [
  { key: 'intro', label: '자기소개', group: 'profile' },
  { key: 'home', label: '집/동네', group: 'profile' },
  { key: 'work', label: '직장', group: 'profile' },
  { key: 'school', label: '학교', group: 'profile' },
  { key: 'family', label: '가족', group: 'daily' },
  { key: 'friends', label: '친구', group: 'daily' },
  { key: 'movies', label: '영화', group: 'interest' },
  { key: 'music', label: '음악', group: 'interest' },
  { key: 'travel', label: '여행', group: 'interest' },
  { key: 'restaurant', label: '식당', group: 'situation' },
  { key: 'shopping', label: '쇼핑', group: 'situation' },
  { key: 'exercise', label: '운동', group: 'interest' },
  { key: 'technology', label: '기술/기기', group: 'daily' },
  { key: 'holiday', label: '휴일/명절', group: 'daily' },
];

export const levelOptions: LevelOption[] = [
  { key: 'novice', label: '기초', target: '짧은 문장으로 익숙한 주제를 답변' },
  { key: 'intermediate', label: '중급', target: '경험과 상황을 이어서 설명' },
  { key: 'advanced', label: '고급', target: '의견, 문제 해결, 비교를 구체적으로 전개' },
];

export const defaultExamSettings = {
  questionCount: 15,
  totalTimeSec: 40 * 60,
  questionTimeSec: 120,
};

export const questionBank: Question[] = [
  {
    id: 'intro-001',
    topic: 'intro',
    level: 'novice',
    taskType: 'warmup',
    prompt:
      'Please introduce yourself. Tell me your name, what you do, and a few things you like.',
    timeLimitSec: 90,
    tags: ['warmup', 'identity'],
  },
  {
    id: 'intro-002',
    topic: 'intro',
    level: 'intermediate',
    taskType: 'warmup',
    prompt:
      'Tell me about yourself in detail. What is your daily life like, and what kind of person are you?',
    timeLimitSec: 120,
    tags: ['warmup', 'identity'],
  },
  {
    id: 'intro-003',
    topic: 'intro',
    level: 'advanced',
    taskType: 'opinion',
    prompt:
      'Describe yourself as a communicator. What are your strengths when speaking with other people, and what do you want to improve?',
    timeLimitSec: 150,
    tags: ['warmup', 'opinion'],
  },
  {
    id: 'home-001',
    topic: 'home',
    level: 'novice',
    taskType: 'description',
    prompt:
      'Describe your home. What rooms do you have, and where do you spend most of your time?',
    timeLimitSec: 120,
    tags: ['place', 'description'],
  },
  {
    id: 'home-002',
    topic: 'home',
    level: 'intermediate',
    taskType: 'routine',
    prompt:
      'Tell me about your neighborhood. What can people do there, and what do you usually do near your home?',
    timeLimitSec: 120,
    tags: ['place', 'routine'],
  },
  {
    id: 'home-003',
    topic: 'home',
    level: 'advanced',
    taskType: 'comparison',
    prompt:
      'Compare the place where you live now with a place where you lived before. What changed, and how did it affect your daily life?',
    timeLimitSec: 150,
    tags: ['comparison', 'place'],
  },
  {
    id: 'work-001',
    topic: 'work',
    level: 'novice',
    taskType: 'description',
    prompt:
      'Tell me about your job or a job you know well. Where do people work, and what do they usually do?',
    timeLimitSec: 120,
    tags: ['work', 'description'],
  },
  {
    id: 'work-002',
    topic: 'work',
    level: 'intermediate',
    taskType: 'experience',
    prompt:
      'Describe a busy day at work. What happened first, what did you need to finish, and how did the day end?',
    timeLimitSec: 120,
    tags: ['work', 'past'],
  },
  {
    id: 'work-003',
    topic: 'work',
    level: 'advanced',
    taskType: 'problem',
    prompt:
      'Think of a problem that can happen at work. Explain the situation, the people involved, and how you would solve it.',
    timeLimitSec: 150,
    tags: ['work', 'problem'],
  },
  {
    id: 'school-001',
    topic: 'school',
    level: 'novice',
    taskType: 'description',
    prompt:
      'Describe a school you attended. What was the building like, and what classes did you take?',
    timeLimitSec: 120,
    tags: ['school', 'description'],
  },
  {
    id: 'school-002',
    topic: 'school',
    level: 'intermediate',
    taskType: 'experience',
    prompt:
      'Tell me about a memorable class or teacher. What made that experience important to you?',
    timeLimitSec: 120,
    tags: ['school', 'past'],
  },
  {
    id: 'school-003',
    topic: 'school',
    level: 'advanced',
    taskType: 'opinion',
    prompt:
      'Some people prefer online classes while others prefer in-person classes. Explain your opinion with examples.',
    timeLimitSec: 150,
    tags: ['school', 'opinion'],
  },
  {
    id: 'family-001',
    topic: 'family',
    level: 'novice',
    taskType: 'description',
    prompt:
      'Tell me about your family or people close to you. Who are they, and what are they like?',
    timeLimitSec: 120,
    tags: ['family', 'description'],
  },
  {
    id: 'family-002',
    topic: 'family',
    level: 'intermediate',
    taskType: 'routine',
    prompt:
      'How do you spend time with family or close people? Describe what you usually do together.',
    timeLimitSec: 120,
    tags: ['family', 'routine'],
  },
  {
    id: 'family-003',
    topic: 'family',
    level: 'advanced',
    taskType: 'experience',
    prompt:
      'Tell me about a time when your family or someone close to you helped you. What happened, and what did you learn?',
    timeLimitSec: 150,
    tags: ['family', 'past'],
  },
  {
    id: 'friends-001',
    topic: 'friends',
    level: 'novice',
    taskType: 'description',
    prompt:
      'Describe one of your friends. What does this person look like, and what kind of personality does this friend have?',
    timeLimitSec: 120,
    tags: ['friends', 'description'],
  },
  {
    id: 'friends-002',
    topic: 'friends',
    level: 'intermediate',
    taskType: 'experience',
    prompt:
      'Tell me about the last time you met a friend. Where did you go, what did you do, and how did you feel?',
    timeLimitSec: 120,
    tags: ['friends', 'past'],
  },
  {
    id: 'friends-003',
    topic: 'friends',
    level: 'advanced',
    taskType: 'roleplay',
    prompt:
      'You want to invite a friend to a small gathering, but your friend is very busy. Call your friend and suggest a plan that works for both of you.',
    timeLimitSec: 150,
    tags: ['friends', 'roleplay'],
  },
  {
    id: 'movies-001',
    topic: 'movies',
    level: 'novice',
    taskType: 'description',
    prompt:
      'What kinds of movies do you like? Describe your favorite kind of movie and why you enjoy it.',
    timeLimitSec: 120,
    tags: ['movies', 'preference'],
  },
  {
    id: 'movies-002',
    topic: 'movies',
    level: 'intermediate',
    taskType: 'experience',
    prompt:
      'Tell me about a movie you watched recently. What was the story, and what did you think about it?',
    timeLimitSec: 120,
    tags: ['movies', 'past'],
  },
  {
    id: 'movies-003',
    topic: 'movies',
    level: 'advanced',
    taskType: 'comparison',
    prompt:
      'Compare watching movies at home and watching movies in a theater. Which do you prefer, and why?',
    timeLimitSec: 150,
    tags: ['movies', 'comparison'],
  },
  {
    id: 'music-001',
    topic: 'music',
    level: 'novice',
    taskType: 'description',
    prompt:
      'What music do you like to listen to? Tell me about your favorite singer, band, or song.',
    timeLimitSec: 120,
    tags: ['music', 'preference'],
  },
  {
    id: 'music-002',
    topic: 'music',
    level: 'intermediate',
    taskType: 'routine',
    prompt:
      'When do you usually listen to music? Describe your listening habits in your daily life.',
    timeLimitSec: 120,
    tags: ['music', 'routine'],
  },
  {
    id: 'music-003',
    topic: 'music',
    level: 'advanced',
    taskType: 'experience',
    prompt:
      'Tell me about a memorable concert, performance, or music-related experience. What made it special?',
    timeLimitSec: 150,
    tags: ['music', 'past'],
  },
  {
    id: 'travel-001',
    topic: 'travel',
    level: 'novice',
    taskType: 'description',
    prompt:
      'Describe a place you want to visit. Where is it, and what do you want to do there?',
    timeLimitSec: 120,
    tags: ['travel', 'description'],
  },
  {
    id: 'travel-002',
    topic: 'travel',
    level: 'intermediate',
    taskType: 'experience',
    prompt:
      'Tell me about a trip you took. Where did you go, who did you go with, and what happened during the trip?',
    timeLimitSec: 120,
    tags: ['travel', 'past'],
  },
  {
    id: 'travel-003',
    topic: 'travel',
    level: 'advanced',
    taskType: 'problem',
    prompt:
      'Imagine your flight is delayed and you may miss an important plan. Call the hotel or travel agency and explain the problem.',
    timeLimitSec: 150,
    tags: ['travel', 'roleplay', 'problem'],
  },
  {
    id: 'restaurant-001',
    topic: 'restaurant',
    level: 'novice',
    taskType: 'description',
    prompt:
      'Describe a restaurant you like. What food do they serve, and why do you like going there?',
    timeLimitSec: 120,
    tags: ['restaurant', 'description'],
  },
  {
    id: 'restaurant-002',
    topic: 'restaurant',
    level: 'intermediate',
    taskType: 'roleplay',
    prompt:
      'Call a restaurant to make a reservation. Ask about the time, number of people, and anything else you need.',
    timeLimitSec: 120,
    tags: ['restaurant', 'roleplay'],
  },
  {
    id: 'restaurant-003',
    topic: 'restaurant',
    level: 'advanced',
    taskType: 'problem',
    prompt:
      'You ordered food at a restaurant, but the order is wrong. Explain the problem politely and ask for a solution.',
    timeLimitSec: 150,
    tags: ['restaurant', 'problem'],
  },
  {
    id: 'shopping-001',
    topic: 'shopping',
    level: 'novice',
    taskType: 'routine',
    prompt:
      'Where do you usually go shopping? Tell me what you buy and how often you go there.',
    timeLimitSec: 120,
    tags: ['shopping', 'routine'],
  },
  {
    id: 'shopping-002',
    topic: 'shopping',
    level: 'intermediate',
    taskType: 'experience',
    prompt:
      'Tell me about something you bought recently. Why did you buy it, and were you satisfied?',
    timeLimitSec: 120,
    tags: ['shopping', 'past'],
  },
  {
    id: 'shopping-003',
    topic: 'shopping',
    level: 'advanced',
    taskType: 'roleplay',
    prompt:
      'You bought an item online, but it arrived damaged. Call customer service and ask for an exchange or refund.',
    timeLimitSec: 150,
    tags: ['shopping', 'problem', 'roleplay'],
  },
  {
    id: 'exercise-001',
    topic: 'exercise',
    level: 'novice',
    taskType: 'description',
    prompt:
      'What exercise or sport do you like? Describe where you do it and what equipment you use.',
    timeLimitSec: 120,
    tags: ['exercise', 'description'],
  },
  {
    id: 'exercise-002',
    topic: 'exercise',
    level: 'intermediate',
    taskType: 'routine',
    prompt:
      'Tell me about your exercise routine. How did you start, and what do you usually do?',
    timeLimitSec: 120,
    tags: ['exercise', 'routine'],
  },
  {
    id: 'exercise-003',
    topic: 'exercise',
    level: 'advanced',
    taskType: 'opinion',
    prompt:
      'Some people prefer exercising alone while others prefer exercising with a group. Which do you prefer, and why?',
    timeLimitSec: 150,
    tags: ['exercise', 'opinion'],
  },
  {
    id: 'technology-001',
    topic: 'technology',
    level: 'novice',
    taskType: 'description',
    prompt:
      'Describe a device or app you use often. What is it, and what do you use it for?',
    timeLimitSec: 120,
    tags: ['technology', 'description'],
  },
  {
    id: 'technology-002',
    topic: 'technology',
    level: 'intermediate',
    taskType: 'experience',
    prompt:
      'Tell me about a time when technology helped you. What problem did it solve?',
    timeLimitSec: 120,
    tags: ['technology', 'past'],
  },
  {
    id: 'technology-003',
    topic: 'technology',
    level: 'advanced',
    taskType: 'opinion',
    prompt:
      'How has smartphone use changed people’s daily communication? Give examples from your life.',
    timeLimitSec: 150,
    tags: ['technology', 'opinion'],
  },
  {
    id: 'holiday-001',
    topic: 'holiday',
    level: 'novice',
    taskType: 'description',
    prompt:
      'Describe your favorite holiday or special day. What do people usually do on that day?',
    timeLimitSec: 120,
    tags: ['holiday', 'description'],
  },
  {
    id: 'holiday-002',
    topic: 'holiday',
    level: 'intermediate',
    taskType: 'experience',
    prompt:
      'Tell me about a holiday you enjoyed recently. Who were you with, and what did you do?',
    timeLimitSec: 120,
    tags: ['holiday', 'past'],
  },
  {
    id: 'holiday-003',
    topic: 'holiday',
    level: 'advanced',
    taskType: 'comparison',
    prompt:
      'Compare how you celebrated holidays as a child with how you celebrate them now. What changed?',
    timeLimitSec: 150,
    tags: ['holiday', 'comparison'],
  },
];
