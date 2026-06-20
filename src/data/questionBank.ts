import type { LevelOption, Question, TopicOption } from '../types';
import { pdfQuestionBank } from './pdfQuestionBank';

export const topicOptions: TopicOption[] = [
  { key: 'intro', label: '자기소개', group: 'profile' },
  { key: 'furniture', label: '가구', group: 'common' },
  { key: 'recycling', label: '재활용', group: 'common' },
  { key: 'home', label: '집', group: 'selected' },
  { key: 'industry', label: '산업', group: 'common' },
  { key: 'music', label: '음악', group: 'selected' },
  { key: 'movies', label: '영화', group: 'selected' },
  { key: 'tv', label: 'TV', group: 'selected' },
  { key: 'restaurant', label: '음식점', group: 'common' },
  { key: 'gathering', label: '모임', group: 'common' },
  { key: 'vacationHome', label: '집에서 보내는 휴가', group: 'selected' },
  { key: 'food', label: '음식', group: 'common' },
  { key: 'health', label: '건강', group: 'common' },
  { key: 'shopping', label: '쇼핑', group: 'selected' },
  { key: 'domesticTravel', label: '국내여행', group: 'selected' },
  { key: 'overseasTravel', label: '해외여행', group: 'selected' },
  { key: 'geography', label: '지형', group: 'common' },
  { key: 'internet', label: '인터넷', group: 'common' },
  { key: 'phone', label: '전화기', group: 'common' },
  { key: 'technology', label: '기술', group: 'common' },
  { key: 'weather', label: '날씨', group: 'common' },
  { key: 'fashion', label: '패션', group: 'common' },
  { key: 'transportation', label: '교통', group: 'situation' },
  { key: 'hotel', label: '호텔', group: 'situation' },
  { key: 'bank', label: '은행', group: 'situation' },
  { key: 'reservation', label: '예약', group: 'situation' },
  { key: 'freeTime', label: '자유시간', group: 'common' },
  { key: 'familyFriends', label: '가족/친구', group: 'common' },
  { key: 'holiday', label: '휴일', group: 'common' },
];

export const levelOptions: LevelOption[] = [
  { key: 'novice', label: '3-3 / IL', target: '기본 묘사와 짧은 경험 답변 중심' },
  { key: 'intermediate', label: '5-5 / IM-IH', target: '묘사, 루틴, 경험, 비교를 섞어 답변' },
  { key: 'advanced', label: '6-6 / IH-AL', target: '고급 비교, 문제 해결, 사회 이슈형 질문 포함' },
];

export const defaultExamSettings = {
  questionCount: 15,
  totalTimeSec: 40 * 60,
  questionTimeSec: 120,
  minSurveyTopics: 12,
};

export const questionBank: Question[] = pdfQuestionBank;
