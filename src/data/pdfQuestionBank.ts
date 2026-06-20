import type { Question } from '../types';

export const pdfQuestionBank: Question[] = [
  {
    "id": "intro-0001",
    "topic": "intro",
    "level": "novice",
    "taskType": "warmup",
    "prompt": "Let’s start the interview. Tell me something about yourself.",
    "timeLimitSec": 90,
    "tags": [
      "pdf",
      "source:topic",
      "set:5-5",
      "summary:자기소개"
    ]
  },
  {
    "id": "vacationHome-0002",
    "topic": "vacationHome",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "You indicated in the survey that you stay at home for vacations. Who are the people you would like to see or spend time with on your vacation?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:1",
      "summary:집에서 보내는 휴가 중 만나고 싶은 사람 묘사"
    ]
  },
  {
    "id": "vacationHome-0003",
    "topic": "vacationHome",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Describe some of the things that you would like to do with the people you visit or see during your vacation.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:1",
      "summary:휴가 때 만나는 사람들과 하고 싶은 일들 묘사"
    ]
  },
  {
    "id": "vacationHome-0004",
    "topic": "vacationHome",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Describe exactly what you did during the last vacation that you spent at home. Give me a description from the first to the last day of all the people you saw and everything that you did.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:1",
      "summary:지난번 휴가 때 했던 일들 자세히 묘사"
    ]
  },
  {
    "id": "weather-0005",
    "topic": "weather",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "Tell me about the weather in your country. Are there different seasons? What is the weather typically like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:2",
      "summary:우리나라 날씨와 계절 묘사"
    ]
  },
  {
    "id": "weather-0006",
    "topic": "weather",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How has the weather in your country changed over time? What was the weather typically like when you were a child? How was the weather different from the weather today?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:2",
      "summary:어렸을 때 날씨와 최근 날씨 비교"
    ]
  },
  {
    "id": "weather-0007",
    "topic": "weather",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Severe weather can often cause serious problems. Tell me about an experience you had when the weather created some kind of problems. Maybe roads were flooded, maybe schools and businesses were closed due to snow or snow or cold weather conditions. Tell me about an experience you had when severe weather created some kind of problem. Give me lots of details.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:2",
      "summary:극단적 날씨 관련 경험 묘사"
    ]
  },
  {
    "id": "domesticTravel-0008",
    "topic": "domesticTravel",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "You indicated in the survey that you take vacations domestically. Tell me some of the places you like to travel and why you like going there.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:3",
      "summary:본인이 좋아하는 국내여행 장소들 묘사"
    ]
  },
  {
    "id": "domesticTravel-0009",
    "topic": "domesticTravel",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Tell me about some of the trips you took in your youth. Where did you go? Who did you go with? And what did you see or do during those early trips?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:3",
      "summary:본인이 어렸을 때 갔었던 여행들 설명"
    ]
  },
  {
    "id": "domesticTravel-0010",
    "topic": "domesticTravel",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Traveling can lead to many kinds of interesting, funny and unexpected experiences. Tell me about one travel experience you had that was unforgettable. Start by telling me when this happened, where you were, and who you were with. Then, tell me all the things that happened to make that experience so unforgettable.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:3",
      "summary:여행 중에 있었던 잊을 수 없는 에피소드 설명"
    ]
  },
  {
    "id": "music-0011",
    "topic": "music",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to buy an MP3 Player. You have a friend who knows a lot about MP3 players. Call your friend and ask three or four questions to get information about buying an MP3 Player.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:4-role-play-mp3",
      "summary:친구가 쓰는 MP3 플레이어에 대해 전화로 질문"
    ]
  },
  {
    "id": "music-0012",
    "topic": "music",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You borrowed your friend's MP3 player and broke it. Call your friend, explain in detail how the MP3 player broke and the current condition of the MP3 player. Then, offer two or three options to get your friend a working MP3 player as soon as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:4-role-play-mp3",
      "summary:친구의 MP3 플레이어 빌렸다가 고장. 대안제시"
    ]
  },
  {
    "id": "music-0013",
    "topic": "music",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Tell me about a situation you've had with some sort of equipment which broke or did not work properly. Give me the background of the situation and then tell me what happened, and how you resolved the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:4-role-play-mp3",
      "summary:본인의 기기가 고장 나서 해결한 방법 설명"
    ]
  },
  {
    "id": "health-0014",
    "topic": "health",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Describe how people usually stayed in good shape when you were a child. What kinds of sports did they play? Did people go to gyms? Describe what fitness was like then, and how it has changed over the years.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:5",
      "summary:사람들의 건강 유지 방법 과거 현재 비교"
    ]
  },
  {
    "id": "health-0015",
    "topic": "health",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Describe a recent event in your area that involved health issues. Perhaps, something happened in the food or medical industries. Perhaps, something related to sports happened or a ban on smoking was enacted. Describe what happened in detail including the reaction of your community.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:5",
      "summary:건강 관련 최근 발생한 사건 설명"
    ]
  },
  {
    "id": "internet-0016",
    "topic": "internet",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "What do the people you know, friends and family et cetera usually use the internet to do? Do they use the internet for work, playing online games, watching television et cetera? What do the people you know usually do online?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-01",
      "summary:지인들이 인터넷상에서 주로 하는 일들 묘사"
    ]
  },
  {
    "id": "internet-0017",
    "topic": "internet",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about what you do when you surf the internet. What kinds of sites do you usually visit? Do you usually share videos, do your shopping, read the news, etc? What kinds of information are you usually looking for?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-01",
      "summary:본인이 인터넷상에서 하는 일들 묘사"
    ]
  },
  {
    "id": "internet-0018",
    "topic": "internet",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "The internet has definitely changed over time. Describe for me some of your early memories of surfing the internet. How was internet surfing different in the past?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-01",
      "summary:본인의 초창기 인터넷 서핑 경험 묘사"
    ]
  },
  {
    "id": "internet-0019",
    "topic": "internet",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "When did you first become interesting in surfing the internet? Tell me about your first experience or experiences of surfing the internet in great detail. What was your first impression of it? What do you remember about it?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-03",
      "summary:본인의 초창기 인터넷 서핑 경험 묘사"
    ]
  },
  {
    "id": "internet-0020",
    "topic": "internet",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Tell me about a project that you worked on that involved doing research on the internet. Start with giving me some background about the project. When and where was it? And then, tell me how you used the internet to get the project done.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-03",
      "summary:리서치를 해야 했던 프로젝트를 하며 인터넷을 활용한 방법 설명"
    ]
  },
  {
    "id": "internet-0021",
    "topic": "internet",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "We all have things that we remember on the internet. Talk about the memorable things that you have seen on the internet. Why were they memorable?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-04",
      "summary:인터넷 서핑 중 기억에 남는 게시물 설명"
    ]
  },
  {
    "id": "internet-0022",
    "topic": "internet",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "What kinds of videos do you like to watch online for fun, for work or for school? Tell me more about the kinds of videos that you like to watch online.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-05",
      "summary:본인이 인터넷에서 주로 보는 동영상 묘사"
    ]
  },
  {
    "id": "internet-0023",
    "topic": "internet",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about your typical routine when you get online at work. What about in your free time? Tell me about your online activities.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-05",
      "summary:본인이 반복적으로 인터넷상에서 하는 일들 묘사"
    ]
  },
  {
    "id": "internet-0024",
    "topic": "internet",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Describe something memorable you saw online for work or for leisure. Maybe it was impressive, unusual, humorous or meaningful for you. What did you notice about it? What made it special?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-05",
      "summary:인터넷상에서 기억에 남는 동영상 묘사"
    ]
  },
  {
    "id": "internet-0025",
    "topic": "internet",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Describe something memorable you saw online for work or for leisure. Maybe it was something impressive, unusual, humorous or meaningful for you. What did you notice about it? What made it special?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-06",
      "summary:본인이 인터넷상에서 기억에 남는 동영상 묘사"
    ]
  },
  {
    "id": "internet-0026",
    "topic": "internet",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Tell me all about what you did online yesterday for work, school, or fun? How did you get online? What website did you visit and what did you look at? Tell me about the things you did online yesterday.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-06",
      "summary:본인이 어제 인터넷으로 했던 일들 묘사"
    ]
  },
  {
    "id": "internet-0027",
    "topic": "internet",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "What kinds of concerns do people have about internet use regarding security, privacy or safety? How have these concerns changed over time? Please discuss this in more detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-07",
      "summary:14번 인터넷 관련 사람들의 우려 설명"
    ]
  },
  {
    "id": "internet-0028",
    "topic": "internet",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How does internet use vary among people with different ages from old to young? Why do they use the internet? What do they do online? Please discuss this in more detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-07",
      "summary:15번 사람들의 연령별 인터넷 이용 차이점 설명"
    ]
  },
  {
    "id": "internet-0029",
    "topic": "internet",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How has surfing the internet changed since you first began doing it? What is similar and what are some of the differences?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-08",
      "summary:14번 인터넷 서핑과 초창기와 지금 비교"
    ]
  },
  {
    "id": "internet-0030",
    "topic": "internet",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "What kinds of problems or concerns do people have concerning the internet? Give me some background on one of these issues. Why is this problem of concern or interest to people who surf the internet?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-08",
      "summary:15번 인터넷 관련 사람들의 우려나 문제점 설명"
    ]
  },
  {
    "id": "phone-0031",
    "topic": "phone",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "What is the best thing about your phone? Is it the camera? Is it applications or games on the phone? Tell me what you like the best about your phone and why you like it in as much detail as possible.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-01",
      "summary:본인이 전화기에 대해 가장 좋아하는 기능 묘사"
    ]
  },
  {
    "id": "phone-0032",
    "topic": "phone",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "What kinds of things do you and you friends usually do on your phones besides talking to each other over the phone? Do you update social media pages? Do you play games? What do you usually do with your phone?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-01",
      "summary:전화통화 외에 전화기로 주로 무엇을 하는지 묘사"
    ]
  },
  {
    "id": "phone-0033",
    "topic": "phone",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Describe the first phone you remember you were using. What did it look like? What feature did it have? How was it different from the phone you are using now? Describe your first phone in as much detail as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-01",
      "summary:본인이 썼던 첫 전화기와 지금 전화기 비교"
    ]
  },
  {
    "id": "phone-0034",
    "topic": "phone",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Some features, applications, services on phones are easy to use, but you may have to get help from friends, family members or phone service providers for certain services: battery, applications, or other features. Tell me about a time when you had a problem using your phone. What was the problem and how did you get help to solve the situation?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-02",
      "summary:본인의 전화기 사용 중 겪었던 문제 설명 – 배터리"
    ]
  },
  {
    "id": "phone-0035",
    "topic": "phone",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Describe how people used cell phones 5 years ago. What could they do with their phone functions and applications? What are some of the biggest changes as to how people use their phones? Describe the phone you used to use in the past in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-03",
      "summary:14번 사람들의 휴대전화 이용 방식 5년 전과 지금 비교"
    ]
  },
  {
    "id": "phone-0036",
    "topic": "phone",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "In some societies, there is a concern that young people are not developing face-to-face communication skills because they spend too much time on their phones. What do people in your country think about the way in which young people use their phones?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-03",
      "summary:15번 젊은이들의 휴대전화 과다사용 부작용 설명"
    ]
  },
  {
    "id": "phone-0037",
    "topic": "phone",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "We can use phones to do more now than before, like finding travel directions, reading restaurant reviews, and doing other information searches. Describe how using a phone to find information has changed from the time you first started using phones until now.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-05",
      "summary:14번 휴대전화를 통한 정보검색 과거와 현재 비교"
    ]
  },
  {
    "id": "phone-0038",
    "topic": "phone",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Many people use their phones to find out about current events in their countries. They can find information about everything from their favorite sports teams to what is happening in their country and around the world. Tell me about something that happened in your country or abroad. Tell me what electronic device you used, what happened from beginning to end, and why what happened was so memorable.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-05",
      "summary:15번 본인이 전화기를 사용하여 검색한 국내외 이슈 설명"
    ]
  },
  {
    "id": "technology-0039",
    "topic": "technology",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "What kind of technology do people typically use in your country? Do people use computers, cell phones, or hand-held devices? What are some common forms of technology that people have?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:technology-01",
      "summary:우리나라 사람들이 보편적으로 사용하는 기술 묘사"
    ]
  },
  {
    "id": "technology-0040",
    "topic": "technology",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about a piece of technology that you use every day? What kind of things do you use it for?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:technology-01",
      "summary:본인이 매일 가장 자주 사용하는 기술 묘사"
    ]
  },
  {
    "id": "technology-0041",
    "topic": "technology",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "an early memory that you have about a piece of technology. It could be a computer or a mobile phone from many years ago. Describe for me what this thing was like back then. How has that technology changed over time?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:technology-01",
      "summary:특정 기술의 과거 현재 비교"
    ]
  },
  {
    "id": "technology-0042",
    "topic": "technology",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Problems often come up because of our dependence on technology. Think about a time when you experienced a problem because some piece of technology was not working properly. Maybe your computer crashed or maybe your cell phone had no service. Tell me the story about a time when you had some kind of problem getting your technology to work.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:technology-02",
      "summary:어떤 기술에 문제가 있어서 본인이 겪은 불편 묘사"
    ]
  },
  {
    "id": "industry-0043",
    "topic": "industry",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about one industry in your country that is well-known. You can talk about any industry such as the entertainment, technology, automotive or another industry. Pick one industry and tell me all about it.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-01",
      "summary:우리나라에 잘 알려진 산업 분야 묘사"
    ]
  },
  {
    "id": "industry-0044",
    "topic": "industry",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Can you tell me about one promising or famous company in this particular industry? Tell me how the company started, and all the things that have happened to make it so well-known.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-01",
      "summary:그 산업에서 잘 알려진 저명한 기업 묘사, 성장 과정"
    ]
  },
  {
    "id": "industry-0045",
    "topic": "industry",
    "level": "advanced",
    "taskType": "description",
    "prompt": "When this company introduced its most important products, were they successful right away? Describe to me the challenges this company faced and how the company was able to succeed. Tell me in as much detail as you can.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-01",
      "summary:방금 언급한 기업의 성공 과정과 난관 극복 과정 설명"
    ]
  },
  {
    "id": "industry-0046",
    "topic": "industry",
    "level": "advanced",
    "taskType": "description",
    "prompt": "How did this industry help you in your life? Tell me about what this industry does and how you use its products or services.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-02",
      "summary:그 산업의 혜택과 우리 삶에 주는 도움 설명"
    ]
  },
  {
    "id": "industry-0047",
    "topic": "industry",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "What are some of the companies that young people want to work for these days? Why do young people want to work for these companies?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-03",
      "summary:요즘 젊은이들이 들어가고 싶어하는 기업들 묘사"
    ]
  },
  {
    "id": "industry-0048",
    "topic": "industry",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Describe a company or industry in your country that is attractive to workers. When did this company or industry start and how has it grown? What has made this company or industry so attractive to workers?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-03",
      "summary:근로자들에게 매력적으로 다가오는 산업 분야 설명"
    ]
  },
  {
    "id": "industry-0049",
    "topic": "industry",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me a story about something you did to prepare for your work or career. Tell me specifically what happened from beginning to end in as much detail as you can.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-03",
      "summary:본인 커리어를 위해 한 노력들 묘사"
    ]
  },
  {
    "id": "industry-0050",
    "topic": "industry",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "What do people usually do to prepare for their future careers? How do they learn about the different types of industries and how do they get ready to apply for those jobs?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-04",
      "summary:사람들이 자신 커리어를 위해 하는 노력들 묘사"
    ]
  },
  {
    "id": "industry-0051",
    "topic": "industry",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Can you tell me about an industry that you follow? Maybe you are interested in the food industry, energy, mobile computing, or another industry. What was this industry like 3 years ago? How has it changed since then?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-05",
      "summary:14번 본인이 관심 갖고 있는 업계 최근 근황. 3년 전과 비교"
    ]
  },
  {
    "id": "industry-0052",
    "topic": "industry",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a time when a product did NOT meet the expectations of the public. Maybe the gaming industry produced a new video game platform that did not perform well or a new smartphone or a software program had problems when it was first released. Tell me all about what happened in detail and describe the reactions of the public and the industry to that issue.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-05",
      "summary:15번 그 업계에서 기대에 못 미친 상품/서비스 묘사"
    ]
  },
  {
    "id": "industry-0053",
    "topic": "industry",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How do people prepare for future work in your country’s industries? Do they get general education first or receive specific training once they join the company? Do they receive specific job training from a young age? How has the process changed over the past 5 years? Give me all the details.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-06",
      "summary:14번 사람들이 자신 커리어를 위해 하는 노력. 5년 전과 비교"
    ]
  },
  {
    "id": "industry-0054",
    "topic": "industry",
    "level": "advanced",
    "taskType": "description",
    "prompt": "What is an industry or a company that people in your country are talking about nowadays? Tell me why people are interested in this industry and what they are saying about it. Give me lots of details.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:industry-06",
      "summary:15번 우리나라 사람들이 관심을 갖는 산업 분야 설명"
    ]
  },
  {
    "id": "internet-0055",
    "topic": "internet",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Your friend has found a cool website. Call your friend and ask three or four questions about this new website.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-internet-01",
      "summary:친구가 찾은 웹사이트에 대해 친구에게 전화로 질문"
    ]
  },
  {
    "id": "internet-0056",
    "topic": "internet",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. When you tried to visit the site that your friend has recommended, nothing comes up. Call your friend and explain what happened. Then, make some suggestions as to how you might want to see the site as soon as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-internet-01",
      "summary:그 사이트가 접속이 안 되어 친구에게 전화로 도움 요청"
    ]
  },
  {
    "id": "internet-0057",
    "topic": "internet",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had a problem while you were surfing the internet? Maybe the site you were looking for was not available. Maybe you lost your internet connection. Tell me about the time when you ran into some kind of problem. Tell me everything that happened as well as what you did to fix the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-internet-01",
      "summary:본인이 인터넷을 하면서 겪은 문제와 대응방법 묘사"
    ]
  },
  {
    "id": "internet-0058",
    "topic": "internet",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Your friend has found a cool website. Call your friend and ask three or four questions about the website he/she has found.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-internet-02",
      "summary:친구가 찾은 웹사이트에 대해 친구에게 전화로 질문"
    ]
  },
  {
    "id": "internet-0059",
    "topic": "internet",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You have tried to log on to that website, but there is something wrong with your web browser. Call the internet help desk and ask for help. Explain why you need to get help as soon as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-internet-02",
      "summary:웹 브라우저 문제 발생. 인터넷 서비스 센터에 전화 도움 요청"
    ]
  },
  {
    "id": "internet-0060",
    "topic": "internet",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. How did you use the internet to get a project done in the past? What was the project about? Give me all the details.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-internet-02",
      "summary:인터넷을 이용해서 본인이 최근에 한 프로젝트 묘사"
    ]
  },
  {
    "id": "industry-0061",
    "topic": "industry",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "You have been writing a report about the technology industry. Your friend knows a lot about this industry. Call her and ask three or four questions to learn more about this industry for your report.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-technology-industry-report",
      "summary:기술산업 관련 보고서를 쓰기 위해 많이 아는 친구에게 전화 질문"
    ]
  },
  {
    "id": "industry-0062",
    "topic": "industry",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "Your friend offers to meet you, so that you can learn more about the industry which she works in. However, a few days before meeting your friend, a member of your family has an emergency and need to help him. Call your friend, explain the situation and offer two or three alternatives, so that you can get the information later on.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-technology-industry-report",
      "summary:가족 중 한 사람이 긴급 상황 발생. 기술산업 관련 보고서 쓰는 것을"
    ]
  },
  {
    "id": "industry-0063",
    "topic": "industry",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "Tell me about a time you learned about an exciting new product. It might have been the first time you learned about smartphones, video games, cars or other products. Tell me about the product and how you learned about it. Tell me everything you did from beginning to end in as much detail as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-technology-industry-report",
      "summary:신제품을 처음으로 접해 본 본인 경험 묘사"
    ]
  },
  {
    "id": "freeTime-0064",
    "topic": "freeTime",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about some places people in your country like to spend their free time. Do they visit parks, beaches or other places? What are some popular free time locations?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:free-time-01",
      "summary:우리나라 사람들이 자유시간에 가는 장소들 묘사 – 야외활동"
    ]
  },
  {
    "id": "freeTime-0065",
    "topic": "freeTime",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Do you have more or less free time now than you did in the past? Describe for me how your free time has changed over time.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:free-time-01",
      "summary:본인의 자유시간 과거 현재 비교"
    ]
  },
  {
    "id": "freeTime-0066",
    "topic": "freeTime",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about the last time you had some free time. What did you do? Who did you spend your free time with? Tell me everything that happened the last time you had some free time.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:free-time-01",
      "summary:최근 자유시간에 본인이 한 일 설명"
    ]
  },
  {
    "id": "freeTime-0067",
    "topic": "freeTime",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "What do people in your country like to do in their free time? What are some popular free time activities?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:free-time-02",
      "summary:우리나라 사람들이 자유시간에 하는 일들 묘사"
    ]
  },
  {
    "id": "familyFriends-0068",
    "topic": "familyFriends",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Describe two different friends or family members. Describe each in as much detail as you can. Then, tell me what similarities they have in common and what the differences between them are.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-06",
      "summary:14번 가족/친구 2명 비교 (유사점/차이점) – 부모님"
    ]
  },
  {
    "id": "familyFriends-0069",
    "topic": "familyFriends",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "When you get together with friends and family, what are some of the topics of interests that are discussed. Why are these things of interest or concern? How do these things affect their lives? Please explain in as much detail as you can.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-06",
      "summary:15번 가족/친구들을 만날 때 하는 대화 주제 설명"
    ]
  },
  {
    "id": "holiday-0070",
    "topic": "holiday",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about some of the popular holidays in your country. Where do people typically celebrate these holidays? What kinds of things do they use to celebrate?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:holidays-02",
      "summary:우리나라 사람들이 휴일을 보내는 장소/활동 묘사 – 명절"
    ]
  },
  {
    "id": "holiday-0071",
    "topic": "holiday",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Describe for me a special holiday memory that you have from your childhood. Tell me where you were and what the place looked like and everything you remember from the holiday scene.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:holidays-02",
      "summary:어렸을 때 특별했던 휴일 관련 추억 설명 – 놀이공원"
    ]
  },
  {
    "id": "holiday-0072",
    "topic": "holiday",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me in detail about the last holiday that you celebrated. Did anything special or memorable happen? Tell me everything you did to celebrate this most recent holiday.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:holidays-02",
      "summary:가장 최근 휴일에 했던 일들 자세히 묘사"
    ]
  },
  {
    "id": "vacationHome-0073",
    "topic": "vacationHome",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Could you tell me about an unusual, unexpected, or satisfying experience you had while at home on vacation? Tell me all the details of that experience. What happened? Who was involved? And why was this experience so memorable?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:vacations-at-home-02",
      "summary:집에서 보낸 휴가 중에 기억에 남는 경험 묘사"
    ]
  },
  {
    "id": "geography-0074",
    "topic": "geography",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me a little bit about a country close to your own country. Tell me what the country looks like, about its people, and some of its traditions.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-04",
      "summary:이웃국가 묘사, 그 나라 사람들 성향/전통 묘사 – 강/산/바다"
    ]
  },
  {
    "id": "geography-0075",
    "topic": "geography",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "I'd like you to pick a favorite place in your country from your childhood and describe that place for me. What are your memories of that place? What was it like when you were a child?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-04",
      "summary:어렸을 때 가장 좋아했던 우리나라 장소 묘사 – 해변여행"
    ]
  },
  {
    "id": "geography-0076",
    "topic": "geography",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How has your country changed in the past decade? Choose one area of change and provide a lot of details about urban development, tourism, or any other area.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-04",
      "summary:우리나라가 지난 10년간 겪은 변화 중 하나 설명"
    ]
  },
  {
    "id": "geography-0077",
    "topic": "geography",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Think about a country that is geographically close to your home country. In what ways has this country changed over the years? Has there been any changes in its economy, politics, etc? Describe this country and its changes in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-05",
      "summary:14번 우리나라와 지리적으로 근접 국가 변화 추세 설명"
    ]
  },
  {
    "id": "geography-0078",
    "topic": "geography",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me in detail about a news item you read or heard recently about a country near your country. What was the news story about? Tell me in as much detail as you can about this report. Tell me why this story is important.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-05",
      "summary:15번 이웃국가 관련 최근 읽거나 들은 뉴스 설명"
    ]
  },
  {
    "id": "furniture-0079",
    "topic": "furniture",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about the furniture you have in your home. Is there a piece that is your favorite?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:furniture-01",
      "summary:본인 집에 있는 가구. 가장 좋아하는 가구 묘사 – 침대"
    ]
  },
  {
    "id": "furniture-0080",
    "topic": "furniture",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about how you use your furniture on a typical day. What kinds of things do you do with your furniture?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:furniture-01",
      "summary:평소에 가구들을 어떤 용도로 사용하는지 설명 – 소파/옷장"
    ]
  },
  {
    "id": "furniture-0081",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Tell me about the furniture that you had in your childhood home. Was there anything different from the furniture that you have today? Describe for me what your home looked like at that time.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:furniture-01",
      "summary:어렸을 때 가구 지금 가구 비교 – 크기/색상"
    ]
  },
  {
    "id": "furniture-0082",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Sometimes, problems arise when it comes to furniture. Things might break, the fabric might get stained or ripped. Tell me about a time when you had a problem with a piece of furniture. Tell me everything that happened and how you fixed the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:furniture-02",
      "summary:특정 가구에 생긴 문제/해결방법 묘사 – 가구 손상/얼룩"
    ]
  },
  {
    "id": "furniture-0083",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Hm… Let me see… My childhood furniture… Hm… Honestly, I do NOT remember the furniture from my childhood THAT well. It was a such a long time ago, so my memory is unclear. I barely remember anything. But I guess the furniture I used when I was a kid was a lot smaller. For example, I probably used a crib when I was baby. And then, in grade school, my bed was a single bed for children. The one I use now is a queen-sized bed for adults. I think my desk and chair were a lot smaller back then as well. Next, I think the color of the furniture used to be brighter. For instance, my bookshelf was light brown when I was a kid. The one I use now is dark brown. I think the table and some chairs were brighter colors as well. So, I guess the size and color of the furniture are the biggest differences. That is pretty much all I remember.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:furniture",
      "summary:어렸을 때 가구 지금 가구 비교 – 크기/색상"
    ]
  },
  {
    "id": "recycling-0084",
    "topic": "recycling",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "I’d like to know about how recycling is practiced in your country. What do people specifically do? Tell me how things are recycled.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-01",
      "summary:우리나라의 재활용 현황 묘사 – 환경"
    ]
  },
  {
    "id": "recycling-0085",
    "topic": "recycling",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "Recycling is a common practice. Tell me about all the different kinds of things that you recycle.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-01",
      "summary:본인이 재활용하는 물건들 묘사 – 분리수거"
    ]
  },
  {
    "id": "recycling-0086",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Can you tell me about a story or an experience you had related to recycling? Maybe something went wrong with recycling, or you might have had a discussion with a friend who disagrees with recycling. Describe your experience in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-01",
      "summary:재활용 관련된 기억에 남는 에피소드 설명 – 플라스틱"
    ]
  },
  {
    "id": "recycling-0087",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Tell me what recycling was like when you were a child. Was there a particular place to throw away the recyclables? Did you have special containers? Describe what it was like and what you did in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-02",
      "summary:어렸을 때 했던 재활용 방법 묘사 – 인식 변화"
    ]
  },
  {
    "id": "recycling-0088",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Tell me what recycling was like when you were a child. Was there a particular place to bring the recyclables? Did you have special containers? Describe what it was like and what you did in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-03",
      "summary:어렸을 때 했던 재활용 방법 묘사 – 인식 변화"
    ]
  },
  {
    "id": "recycling-0089",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Problems sometimes occur when recycling. Perhaps, the pick-up service does not come as planned. Or the items are too big for the containers. Or the container turns over and spills the items. Tell me about something memorable that happened to you or your family.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-03",
      "summary:재활용 관련된 문제가 발행했던 경험 설명 – 플라스틱"
    ]
  },
  {
    "id": "recycling-0090",
    "topic": "recycling",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "How do you go about recycling? What do you do first, second, and next until you complete the process? Tell me everything.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-04",
      "summary:본인이 집에서 재활용하는 방법 묘사 – 분리수거"
    ]
  },
  {
    "id": "recycling-0091",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "The handling of recycling materials has changed over the years. Tell me how the collection of recycling materials used to be in the past. And how has it evolved to the present?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-06",
      "summary:14번 재활용 수거 방법 과거와 현재 변화 서술 – 환경 / 인식 변화"
    ]
  },
  {
    "id": "recycling-0092",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Stories about recycling are often in the media. Tell me about one news story that you have heard related to recycling or perhaps the environment. Describe what the story was about, what happened, and what the reaction was to the story. Describe these things in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-06",
      "summary:15번 재활용 혹은 환경에 대해 본 뉴스 내용 서술 – 플라스틱"
    ]
  },
  {
    "id": "recycling-0093",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Describe what the attitude was toward recycling when you were a child. Did people recycle then? Did they throw everything out in the garbage? What were people's views on recycling at that time and how have they changed over the years?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-07",
      "summary:14번 재활용에 대한 대중 인식 과거 현재 변화 서술 – 인식 변화"
    ]
  },
  {
    "id": "recycling-0094",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "description",
    "prompt": "What are some of the stories in the news with respect to recycling or the environment today? Describe what the current news reports are saying about recycling or the environment.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:recycling-07",
      "summary:15번 재활용 혹은 환경에 대해 본 뉴스 보도 서술 – 플라스틱"
    ]
  },
  {
    "id": "furniture-0095",
    "topic": "furniture",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "I would like to now talk about where you live. Can you describe your home to me? What does it look like? How many rooms does it have? Give me a description with lots of details.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-01",
      "summary:본인이 현재 살고 있는 집 묘사 – 가구/가전제품 중심 묘사"
    ]
  },
  {
    "id": "recycling-0096",
    "topic": "recycling",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "What is your normal routine at home? What do you usually do during the weekdays? What kinds of things do you do on the weekend?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-01",
      "summary:본인의 집에서 주중/주말 일과 묘사 – 집안일 / 재활용"
    ]
  },
  {
    "id": "home-0097",
    "topic": "home",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Describe the home you lived in as a child. How was that home different from the home you live in now?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-01",
      "summary:어렸을 때 살았던 집과 지금 집 비교 – 동네 묘사"
    ]
  },
  {
    "id": "furniture-0098",
    "topic": "furniture",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "I would like to now talk about where you live. Tell me about your favorite room in your home. What does it look like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-02",
      "summary:본인 집에 가장 좋아하는 방 묘사 – 가구/가전제품 중심 묘사"
    ]
  },
  {
    "id": "recycling-0099",
    "topic": "recycling",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me what you do to keep your home clean and comfortable. What kinds of housework do you do around your home?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-02",
      "summary:본인이 집에서 하는 집안 일 묘사 – 집안일 / 재활용"
    ]
  },
  {
    "id": "home-0100",
    "topic": "home",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Sometimes we want to change something in our home, maybe get new furniture or do some painting or decorating. Tell me about one change that you made in your home. Tell me why you decided to make that change and everything you had to do to make that change happen.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-03",
      "summary:집에 준 변화 중 하나 자세히 묘사 – 가전제품 구매"
    ]
  },
  {
    "id": "home-0101",
    "topic": "home",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Tell me about a house or apartment where you grew up. What did your home and the surrounding area look like when you were young? How has it changed?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-04",
      "summary:어렸을 때 살았던 집과 동네 묘사 – 동네 묘사"
    ]
  },
  {
    "id": "home-0102",
    "topic": "home",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Talk about a special memory you had with your family members at home. Maybe it was something funny, surprising, or important that happened. Tell me about that moment that stands out in your memory. Give me lots of details.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-04",
      "summary:집에서 가족들과 있었던 추억 묘사 – 가족모임 + 배달음식"
    ]
  },
  {
    "id": "recycling-0103",
    "topic": "recycling",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "What is your normal routine at home? What things do you usually do during the weekdays. What kinds of things do you do on the weekend?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-05",
      "summary:본인의 집에서 주중/주말 일과 묘사 – 집안일 / 재활용"
    ]
  },
  {
    "id": "furniture-0104",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "There are always problems which happen in any home. Things break, projects do not go as planned, or people you live with don't cooperate. Tell me about some problems or issues that have happened in your home.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-05",
      "summary:본인 집에 생겼던 여러 문제점들 묘사 – 고장 + 가구 문제"
    ]
  },
  {
    "id": "furniture-0105",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Pick one of those problems you just mentioned and explain to me everything that happened. Start with when it happened and anything that may have caused the problem. Then, explain in detail everything you did to resolve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-06",
      "summary:위의 문제 중 한 가지 구체적 설명, 대처방법 – 가구 문제"
    ]
  },
  {
    "id": "home-0106",
    "topic": "home",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "I’d like to now talk about where you live. Many homes today are equipped with new appliances or electronic devices that make everyday life more convenient. What are some of these new home appliances or electronic devices? How have they changed household responsibilities?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-07",
      "summary:14번 새로운 가전/전자제품들이 가사노동에 가져온 변화 묘사"
    ]
  },
  {
    "id": "home-0107",
    "topic": "home",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "Think about a specific modern appliance or device that people consider as useful or convenient at home. What do people say about this home appliance or device?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-07",
      "summary:15번 생활에 유용한 특정 가전/전자제품 세부 묘사"
    ]
  },
  {
    "id": "home-0108",
    "topic": "home",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How have home appliances changed our lives? How was life before the appliances different from life now? What is the biggest change on our lives?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-08",
      "summary:15번 가전제품이 우리 삶에 가져온 변화 묘사"
    ]
  },
  {
    "id": "home-0109",
    "topic": "home",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "I would now like to talk about where you live. Compare how you solve problems in your home now to how your parents or friends solve problems that occur in their homes. How is it the same? How is it different?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-09",
      "summary:14번 집에 생기는 문제 부모님과 본인이 해결하는 방법 차이 묘사"
    ]
  },
  {
    "id": "home-0110",
    "topic": "home",
    "level": "advanced",
    "taskType": "description",
    "prompt": "What are the major problems most people have when they rent a home or an apartment? How do people deal with these issues? How do these things affect how or where people live?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-09",
      "summary:15번 집을 구할 때 사람들이 겪는 문제 묘사"
    ]
  },
  {
    "id": "home-0111",
    "topic": "home",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "I would like to now talk about where you live. How has the style of homes changed over the past 5 or 10 years at where you live? Are the homes being built today different from the homes built 10 years ago? What developments or changes have you noticed?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-10",
      "summary:14번 5~10년 간 우리나라 주택들의 변화 추세 설명 – 가전제품"
    ]
  },
  {
    "id": "home-0112",
    "topic": "home",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "Sometimes the issues of too many new homes or not enough new homes can create a controversy in a community. Think of a time when the issue regarding housing was in the news in your area. What was the issue and why were people talking about it?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing-10",
      "summary:15번 우리나라 주택시장 문제 관련 뉴스 설명"
    ]
  },
  {
    "id": "furniture-0113",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "As I mentioned, I remember having several problems with my furniture at home. Once, I remember when my chair got damaged. One of the legs broke and fell off. +wheels +handles +the back of the chair It was impossible to fix it, so I had to throw it away. I eventually got a new chair. Also, I remember when my desk got scratched. There were some marks and the paint peeled off. It did NOT look good, so I covered it up. Next, I remember when my bed got a stain. I spilled something on it by mistake. I wiped it off as soon as I could, but it left a stain. I had to wash the blanket, the bed sheet and the pillow. Plus, I remember when my chair got ripped. The surface got worn out because I used it for a long time. I decided to get a new chair and bought a new one. So, these were the problems I have had with my furniture.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:housing",
      "summary:위의 문제 중 한 가지 구체적 설명, 대처방법 – 가구 파손"
    ]
  },
  {
    "id": "music-0114",
    "topic": "music",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "You indicated in the survey that you listen to music. What kinds of music do you listen to? Who are some of your favorite musicians and/or composers?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:music-01",
      "summary:본인이 좋아하는 음악 장르, 가수 묘사"
    ]
  },
  {
    "id": "music-0115",
    "topic": "music",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "When and where do you usually go to listen to music? Do you listen to radio? Do you go to concerts? Tell me about the different ways you enjoy music.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:music-01",
      "summary:본인이 음악을 듣는 장소, 시간 묘사"
    ]
  },
  {
    "id": "music-0116",
    "topic": "music",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "When did you first become interested in music? What kinds of music did you like first? Tell me how your interest in music developed from your childhood until today.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:music-01",
      "summary:본인이 음악을 처음 좋아하게 된 계기, 취향 변화"
    ]
  },
  {
    "id": "music-0117",
    "topic": "music",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Could you think back to a particularly memorable time when you heard live music? Describe that experience in detail. When was it? Where were you? Who were you with? Who did you hear? What happened? And what happened that made that performance so memorable or special?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:music-02",
      "summary:본인이 라이브 음악 들었던 경험 묘사 – 콘서트 경험"
    ]
  },
  {
    "id": "music-0118",
    "topic": "music",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "You indicated in the survey that you listen to music. Pick two different kinds of music or composers. Describe each in as much detail as possible, and then compare the similarities and differences between them.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:music-03",
      "summary:14번 다른 종류의 2가지 음악 비교"
    ]
  },
  {
    "id": "music-0119",
    "topic": "music",
    "level": "advanced",
    "taskType": "description",
    "prompt": "What new electronic gadgets or equipment are people who like music interested in these days? What are they talking about? What new products excite them and why?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:music-03",
      "summary:15번 요즘 관심을 끄는 새로운 음악 기기/설비 묘사"
    ]
  },
  {
    "id": "movies-0120",
    "topic": "movies",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "You indicated in the survey that you go to movies with adults. Tell me about the kinds of movies that you like to see.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:movies-01",
      "summary:본인이 가장 좋아하는 영화 장르 묘사"
    ]
  },
  {
    "id": "movies-0121",
    "topic": "movies",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me what you usually do when you go to see movies. Who do you like to go with? What do you do before and after the movie?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:movies-01",
      "summary:본인이 영화를 누구와 보러 가고, 전후로 하는 일들 묘사"
    ]
  },
  {
    "id": "movies-0122",
    "topic": "movies",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "I would like to know about the last time you went to the movies. Tell me everything that happened that day, including all the things you did before and after the movie.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:movies-01",
      "summary:최근 영화관에 가서 본인이 영화 전후로 했던 일들 묘사"
    ]
  },
  {
    "id": "movies-0123",
    "topic": "movies",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "What was a memorable movie you watched in the past? What was it about? What was special about that movie? Would you recommend that movie to other people?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:movies-02",
      "summary:본인 기억에 남는 영화 묘사. 재미있었던 이유 설명"
    ]
  },
  {
    "id": "movies-0124",
    "topic": "movies",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Who is one of your favorite actors? Tell me a specific story about something this actor did that you heard about in the news. Begin the story with some details about the actor or the actress and then tell me all the details of what happened, especially things that made this incident so interesting to movie fans.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:movies-03",
      "summary:본인이 가장 좋아하는 영화배우에 관한 최근 본 뉴스 설명"
    ]
  },
  {
    "id": "movies-0125",
    "topic": "movies",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "You indicated in the survey that you go to movies with adults. Could you compare the movies made today to movies you saw growing up? How have movies changed? What are the differences and similarities?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:movies-04",
      "summary:14번 영화 작품들의 과거와 현재 변화 설명"
    ]
  },
  {
    "id": "movies-0126",
    "topic": "movies",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "When your friends or family talk about movies, what topics or issues regarding movies do you discuss? Why are these issues of interest or concern to your friends? What makes them so important?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:movies-04",
      "summary:15번 친구들과 이야기하는 영화 관련 토픽 설명"
    ]
  },
  {
    "id": "movies-0127",
    "topic": "movies",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me more about the kinds of TV shows or movies that you like to watch.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:tv-01",
      "summary:본인이 좋아하는 TV 방송 혹은 영화 묘사"
    ]
  },
  {
    "id": "movies-0128",
    "topic": "movies",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me what you usually do when you watch TV shows or movies. When do you watch it? Who do you watch it with? Where do you watch it? Tell me about your typical routine when you what TV shows or movies.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:tv-01",
      "summary:본인의 TV 방송 혹은 영화 시청 습관 묘사"
    ]
  },
  {
    "id": "tv-0129",
    "topic": "tv",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "TV shows have definitely changed over time. Describe for me the TV shows that you remember from your childhood. What was the show like? How was it different from the TV shows that are popular today?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:tv-01",
      "summary:TV 방송 프로그램 과거와 현재 비교"
    ]
  },
  {
    "id": "movies-0130",
    "topic": "movies",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about the last TV show or movie that you watched. What was the story about? What happened? Give me all the details about the story.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:tv-02",
      "summary:본인이 특별히 기억에 남는 TV 방송이나 영화에 대해 설명"
    ]
  },
  {
    "id": "movies-0131",
    "topic": "movies",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Pick your favorite TV or movie character and tell me all the things that character does in the show or movie.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:tv-03",
      "summary:본인이 좋아하는 TV 혹은 영화 캐릭터 설명"
    ]
  },
  {
    "id": "movies-0132",
    "topic": "movies",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Tell me how you first became interested in watching TV or movies, and how that interest has changed or developed from when you first became interested until today.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:tv-03",
      "summary:본인이 TV 또는 영화에 처음 관심을 갖게 된 계기, 취향 변화"
    ]
  },
  {
    "id": "tv-0133",
    "topic": "tv",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Have changes in audio visual technology such as cable TV, big screen TVs, computers, tablets, phones and video formats changed the way people are entertained at home? Describe the changes that you have noticed within the past 10 years. What was it like before and how is it different from now?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:tv-05",
      "summary:14번 지난 10년간 기술 변화가 영상 시청 방식 변화에 끼친 영향 설명"
    ]
  },
  {
    "id": "tv-0134",
    "topic": "tv",
    "level": "advanced",
    "taskType": "description",
    "prompt": "What are some of the new trends that you have noticed regarding TV, movie viewing, shows or technology? What are people talking about? What is it getting people excited? Why are these things of interest or importance to viewers?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:tv-05",
      "summary:15번 영상 시청 관련 새로운 트렌드, 시청자들에게 관심을 끄는 이유"
    ]
  },
  {
    "id": "tv-0135",
    "topic": "tv",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Honestly, although I like movies very much, I have NOT been going to theaters as much as I used to. Instead, I think I watch a lot of movies and TV programs at home now. The rise of streaming services such as Netflix has triggered this change. Most of the people around me use at least one of these services. The best thing about them is that you can watch movies very easily, with a simple click. You can watch them on your TV, laptop, cell phones, or tablets. So, you can watch them wherever you are, even when you are on the move. Plus, the movie industry is growing very fast in Korea. Many Korean movies have become mainstream on the global stage these days. So, watching movies is one of the most popular forms of entertainment in this country. And since Korea is one of the most wired countries in the world, streaming services have taken root very, very well.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:tv",
      "summary:14번 지난 10년간 기술 변화가 영상 시청 방식 변화에 끼친 영향 설명"
    ]
  },
  {
    "id": "home-0136",
    "topic": "home",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about a restaurant near where you live. What kind of food does it serve? How are the prices? How often do you go there? Tell me as much as you can about one of your favorite local places to eat.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-01",
      "summary:본인 동네에 가장 좋아하는 음식점 묘사 – 한국 고깃집"
    ]
  },
  {
    "id": "restaurant-0137",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Do you have a favorite type of food such as American, Chinese or Japanese? Tell me about your favorite type of restaurant. What kind of food do they serve there? Tell me as much as you can about it.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-01",
      "summary:본인이 가장 좋아하는 음식, 음식점 묘사 – 외국 음식점"
    ]
  },
  {
    "id": "home-0138",
    "topic": "home",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Describe your favorite restaurant with an ethnic or international menu. Tell me all about that place in as much detail as possible.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-01",
      "summary:본인이 가장 좋아하는 외국 음식점 묘사 – 햄버거집"
    ]
  },
  {
    "id": "home-0139",
    "topic": "home",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Describe your favorite restaurant with an ethnic or international menu. Tell me all about the place in as much detail as possible.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-02",
      "summary:본인이 가장 좋아하는 외국 음식점 묘사 – 햄버거집"
    ]
  },
  {
    "id": "restaurant-0140",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "When was the last time you ate at a restaurant with an international menu? What was the occasion? Who was with you? What did you eat and so on? Tell me the entire story of that visit.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-02",
      "summary:외국 음식점에서 최근에 간 경험 묘사 – 외국 음식점"
    ]
  },
  {
    "id": "home-0141",
    "topic": "home",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about the restaurants in your country. What is a typical restaurant like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-03",
      "summary:우리나라 보편적인 음식점 묘사 – 고깃집"
    ]
  },
  {
    "id": "restaurant-0142",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about what you usually do when you eat at a restaurant. What do you do first, second, etc? Take me through a typical restaurant visit.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-03",
      "summary:음식점에 가면 어떻게 하는지 순서대로 묘사"
    ]
  },
  {
    "id": "home-0143",
    "topic": "home",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Describe for me a restaurant that you remember from your childhood. What was the restaurant like? Was it different from the restaurants you visit today?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-03",
      "summary:어렸을 때 갔던 음식점 묘사 – 햄버거집"
    ]
  },
  {
    "id": "restaurant-0144",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me the story of the last time you had a chance to eat out at a restaurant. Where did you go? Who was with you? What did you have? Tell me everything that happened from start to finish.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-04",
      "summary:최근에 음식점 갔었던 경험 묘사 – 외국 음식점"
    ]
  },
  {
    "id": "home-0145",
    "topic": "home",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Do you have a favorite take-out or delivery restaurant you use? Tell me about it.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-05",
      "summary:본인이 좋아하는 테이크아웃/배달 음식점 묘사 – 햄버거집"
    ]
  },
  {
    "id": "restaurant-0146",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "When was the last time you ordered a take-out or delivery meal? Tell me all the details. When was it? What did you order? Were you satisfied with the order? Tell me everything about the last time you ordered a meal this way.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-05",
      "summary:테이크아웃/배달 음식점을 최근에 이용한 경험 묘사 – 햄버거"
    ]
  },
  {
    "id": "restaurant-0147",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Have you ever used the delivery or take-out service for a special occasion for a large group of people? It may have been a simple, personal occasion or for a work-related event. Tell me the whole story of a time when you used a delivery or take-out service for a special occasion.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-05",
      "summary:테이크아웃/배달 음식점을 통해 특별한 행사 준비 경험 묘사"
    ]
  },
  {
    "id": "restaurant-0148",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "opinion",
    "prompt": "Tell me about your favorite take-out or delivery routine. Do you order it at a counter, by phone, or on the internet? Do you pick up or prefer delivery? What kind of things do you usually order this way?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-06",
      "summary:본인이 선호하는 음식 테이크아웃/배달 방법 – 음식 배달앱"
    ]
  },
  {
    "id": "restaurant-0149",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "There is a trend in the restaurant industry to offer healthier choices designed to attract the health-conscious consumer. What changes have you observed in this regard in recent years?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-07",
      "summary:14번 음식점 업계의 건강식 추세로의 변화 설명"
    ]
  },
  {
    "id": "restaurant-0150",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "The advantage of chain restaurants such as McDonald’s is that the consumer knows what to expect in terms of menu, prices, etc. Are there certain advantages to small, local restaurants? How would you compare the two in terms of the overall experience",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-07",
      "summary:15번 음식점 체인점과 지역 음식점의 고객 경험 차이 설명"
    ]
  },
  {
    "id": "restaurant-0151",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "What kinds of changes in restaurants or eating out have you noticed over the last few years? How was eating out different? What has brought about some of these changes?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-08",
      "summary:14번 음식점 업계와 외식 문화의 변화 설명"
    ]
  },
  {
    "id": "restaurant-0152",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "When your friends or family discuss restaurants they like or dislike, what are some of the characteristics they discuss the most? How do these characteristics affect their dining experiences?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-08",
      "summary:15번 사람들과 음식점에 대해 언급하는 요소 설명"
    ]
  },
  {
    "id": "restaurant-0153",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Many fast-food, take-out or delivery restaurants are now offering healthy choices. Why do you think this change has come about in recent years? Was it a result of consumer pressure, market forces or something else?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-09",
      "summary:14번 테이크아웃/배달 음식점들의 건강 메뉴 추세 설명"
    ]
  },
  {
    "id": "restaurant-0154",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "What are the latest trends people are talking about related to take-out or delivery food options? Perhaps, it has to do with ordering online or an app, or it has to do with some kinds of new offerings. Discuss the changes that you have observed recently regarding take-out or delivery food options.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-09",
      "summary:15번 테이크아웃/배달 음식의 트랜드 변화 설명"
    ]
  },
  {
    "id": "restaurant-0155",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "How do busy working people usually get their meals during the workweek? Do they order food from restaurants, go out to eat, or something else? What do they usually do?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-10",
      "summary:직장인들이 평일 식사를 주로 어떻게 해결하는지 묘사"
    ]
  },
  {
    "id": "restaurant-0156",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Tell me about how you found out about a very special food or grocery store. Maybe a new specialty store opened in your community or a new farmer’s market opened and you wanted to try it out. How did you find out about this new food or grocery store? What was your first visit like?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-10",
      "summary:본인이 새로운 식료품점을 찾은 방법 설명"
    ]
  },
  {
    "id": "restaurant-0157",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a time when you were having a meal and something unusual or unexpected happened. Tell me the whole story in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-10",
      "summary:식사를 하다가 겪은 예기치 않은 에피소드 묘사"
    ]
  },
  {
    "id": "restaurant-0158",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "What do you usually do for dinner during the week? Do you order food or go out to eat? Do you make your own meals or does someone else make them for you? Do you eat alone or with other people? What do you usually do for dinner during the workweek?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant-11",
      "summary:본인이 주로 평일 저녁식사를 어떻게 하는지 묘사"
    ]
  },
  {
    "id": "home-0159",
    "topic": "home",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "I go to American fast food places from time to time. Among them, I go to burger chains most often. When I go there, I know what to get in advance, because they have a pre-set menu. I normally order a burger combo, which is one of their signature menus. I get a soft drink or a milkshake for the drink. I sometimes get French fries or onion rings as a side dish. I sometimes order chicken nuggets, chicken wings, chicken tenders or drumsticks. I sometimes get biscuits or ice cream. I sometimes get the food to go, but I sometimes eat it on the spot. Fast food tastes amazing especially when I am starving. The French fries are so crispy. Other side dishes are very tasty as well. The only downside is that the food is very greasy and is high in calories. [캴르뤼z] I could gain weight if I eat fast food too often. So, this is one of my favorite foreign restaurants.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant",
      "summary:본인이 가장 좋아하는 외국 음식점 묘사 – 햄버거집"
    ]
  },
  {
    "id": "restaurant-0160",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "When I arrive at a restaurant, I first decide where to sit. I sometimes decide on my own. Sometimes, one of the waiters shows me to my table. When I get the menu, I decide what to get. If I do NOT know what to order, I ask for help. When the food comes out, I start to dig in. I ask for more water or sauce whenever I need to. After I am done with the main dish, I sometimes have some dessert. Before I leave the restaurant, I go up to the counter and pay for my meal. I usually pay with my credit card or my debit card. I rarely pay in cash these days. So, these are the things I do when I go to a restaurant.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant",
      "summary:음식점에 가면 어떻게 하는지 순서대로 묘사"
    ]
  },
  {
    "id": "home-0161",
    "topic": "home",
    "level": "intermediate",
    "taskType": "opinion",
    "prompt": "There are tons of take-out restaurants in Korea. I think they are everywhere these days. I think almost all restaurants offer take-out or delivery services. Many take-out places are on busy streets with a lot of foot traffic. They are concentrated near subway stations or universities. One of the most typical take-out places is burger chains. Many people get the food to go when they go to these places. Some people use the drive thru to get their food. Other people use food delivery apps to order their food. In fact, these apps have become the norm and they are all the rage these days. Personally, when I go to these fast food chains, I know what to get in advance, because they have a pre-set menu. For example, when I go to Burger King, I always order the Whopper combo. That is my go-to menu at that place. So, this is what my favorite take-out restaurant is like.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant",
      "summary:본인이 좋아하는 테이크아웃/배달 음식점 묘사 – 햄버거집"
    ]
  },
  {
    "id": "restaurant-0162",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "When I go to chain restaurants, I know what to get in advance, because they have a pre-set menu. For example, when I go to Burger King, I normally order a Whopper combo, which is one of their signature menus. I get a soft drink or a milkshake for the drink. I sometimes get French fries or onion rings as a side dish. I sometimes order chicken nuggets, chicken wings, chicken tenders or drumsticks. I sometimes get biscuits or ice cream. On the other hand, when I go to small local restaurants, I do NOT know what to get. That’s because they do NOT have a pre-set menu. I have to look at the menu carefully to see what to get. If I do NOT know what to order, I ask for help. So, this is the biggest difference between chain restaurants and local restaurants.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:restaurant",
      "summary:15번 음식점 체인점과 지역 음식점의 고객 경험 차이 설명"
    ]
  },
  {
    "id": "gathering-0163",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about some of the gatherings or celebrations that happen at where you live.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-01",
      "summary:본인이 사는 지역에 진행되는 모임/기념행사 묘사"
    ]
  },
  {
    "id": "gathering-0164",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a gathering or a celebration that was held in the area in which you live. Describe where the gathering was held, who was there, what the purpose of the gathering was, and what happened from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-01",
      "summary:본인이 참석했던 모임/기념행사에서 있었던 일들 자세히 묘사"
    ]
  },
  {
    "id": "gathering-0165",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Sometimes when people get together for celebrations or gatherings, unexpected things can happen. Tell me all about something unexpected that happened at a celebration or a gathering in the area where you live. Tell me what happened from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-01",
      "summary:본인이 참석했던 기념행사/모임에서 예기치 않았던 에피소드 묘사"
    ]
  },
  {
    "id": "gathering-0166",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Where do people usually have celebrations or parties in the area where you live or work? Is it at someone’s home, or a park, or somewhere else? Tell me about this place in as much detail as you can.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-02",
      "summary:본인 지역 사람들이 하는 기념행사/파티 장소 묘사"
    ]
  },
  {
    "id": "gathering-0167",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about the last holiday party or celebration that you attended. Give me lots of details about what happened, who was there, and what you did from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-02",
      "summary:최근에 본인이 갔던 휴일파티/기념행사에서 있었던 묘사"
    ]
  },
  {
    "id": "gathering-0168",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a time when you helped with a party or a celebration. Perhaps you helped invite people, or you helped decorate, or get the food or drinks. Tell me about this experience from beginning to end in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-02",
      "summary:본인이 파티/기념행사 준비를 도와 준 경험 묘사 – 가족모임"
    ]
  },
  {
    "id": "gathering-0169",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Pick a major holiday that people celebrate in your country. What do people do to celebrate the holiday? Where do they go? Who do they spend time with? Tell me as much as you can.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-03",
      "summary:우리나라 주요 휴일 설명 >> 휴일 주제 답변 활용 : 전통 명절"
    ]
  },
  {
    "id": "gathering-0170",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How have celebrations and gatherings in your country changed since you were a child? Are there more of these events now than before? What sorts of events are more popular today than in the past?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-04",
      "summary:14번 어렸을 때 기념행사/모임과 요즘 행사들 비교"
    ]
  },
  {
    "id": "gathering-0171",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "When the celebrations and gatherings may be important to people in a city or town, it takes a lot of work, organization and money to put on a successful event. Have there been discussions about the difficulties of having these sorts of events in your area? Tell me about one such event and things people discussed regarding the difficulties of organizing it.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-04",
      "summary:15번 기념행사/모임 관련해서 사람들이 논의했던 이슈 설명"
    ]
  },
  {
    "id": "gathering-0172",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Gatherings and celebrations in small towns are often different from those in big cities. Tell me about some of the similarities and differences between the celebrations people have in small towns and in big cities in your country.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-05",
      "summary:14번 작은 마을과 대도시 간 모임/기념행사 비교"
    ]
  },
  {
    "id": "gathering-0173",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "What kinds of concerns do you hear people express when they have gatherings and celebrations in your area? Do people complain about traffic, parking, noise, garbage or other problems? What do people in your area say about such celebrations?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:gatherings-05",
      "summary:15번 모임/기념행사 관련 사람들이 갖고 있는 우려 설명"
    ]
  },
  {
    "id": "vacationHome-0174",
    "topic": "vacationHome",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "You indicated in the survey that you stay at home for vacations. How do most people spend their vacations in your country? How does that compare to the way people spent their vacations when you were growing up? Are they doing things differently? How have things changed and why have things changed? Please take a minute to discuss this topic.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:vacations-at-home-03",
      "summary:14번 사람들이 휴가를 보내는 방법 과거 현재 비교"
    ]
  },
  {
    "id": "food-0175",
    "topic": "food",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Many people try to eat healthy these days. What kinds of foods are healthy and why are they healthy for us?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-01",
      "summary:건강식 종류와 건강에 좋은 이유 설명 – 건강식"
    ]
  },
  {
    "id": "food-0176",
    "topic": "food",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "How do you shop for healthy food? What kinds of things do you have to do to cook healthy food?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-01",
      "summary:건강식 구매 방법 및 조리법 설명 – 식료품점"
    ]
  },
  {
    "id": "food-0177",
    "topic": "food",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Tell me how you found out about eating healthy. Did your family eat healthy when you were growing up? Did you learn about healthy eating from a friend? Describe in detail how you started to eat healthy.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-01",
      "summary:어렸을 때 건강식을 먹게 된 계기 설명 – 어머니"
    ]
  },
  {
    "id": "food-0178",
    "topic": "food",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "When was the last time you had some healthy food? Who was it with and how did you feel? What was special about that experience?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-02",
      "summary:최근에 건강식을 먹어 본 경험 묘사 – 김치"
    ]
  },
  {
    "id": "food-0179",
    "topic": "food",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "What are some of the typical foods in your country? What dishes are popular?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-03",
      "summary:우리나라 대표음식 묘사 – 김치"
    ]
  },
  {
    "id": "food-0180",
    "topic": "food",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about the kinds of foods you eat on a regular day. When and where do you usually eat?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-03",
      "summary:본인이 먹는 일상음식 묘사 – 건강식"
    ]
  },
  {
    "id": "food-0181",
    "topic": "food",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a memorable experience you had while eating something. It could have been something good or bad. What happened? Why was it so memorable or special? Tell me everything in as much detail as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-03",
      "summary:음식 관련 기억에 남는 에피소드 묘사 – 소화불량"
    ]
  },
  {
    "id": "food-0182",
    "topic": "food",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a memory you have about a special food or a dish from your childhood. Tell me where and when you had this dish. Describe in detail. What made this experience so memorable?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-04",
      "summary:어렸을 때 먹었던 특별한 음식 관련 경험 묘사 – 햄버거"
    ]
  },
  {
    "id": "food-0183",
    "topic": "food",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a memory that you have about a special food or a dish from your childhood. Tell me where and when you had this dish. Describe in detail. What made this experience so memorable?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-05",
      "summary:어렸을 때 먹었던 특별한 음식 관련 경험 묘사 – 햄버거"
    ]
  },
  {
    "id": "food-0184",
    "topic": "food",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Sometimes when we plan a meal, things do not work out. Reservations at restaurants get lost or meals delivered to offices or homes have missing items. Tell me the story of a time when a plan for a meal did not work out as planned for you or someone you know. Tell me everything you did to resolve this situation from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-05",
      "summary:식사 관련 기억에 남는 에피소드 묘사 – 소화불량"
    ]
  },
  {
    "id": "food-0185",
    "topic": "food",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How has food shopping changed over the last 20 years? What have been some of the trends or changes you have noticed when comparing shopping today with that of the past?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-06",
      "summary:14번 20년간 사람들의 식품 구매 방식 변화 – 온라인 쇼핑"
    ]
  },
  {
    "id": "home-0186",
    "topic": "home",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "There have been many stories in the news of foods that have been contaminated or that contained dangerous bacteria. Tell me about the food scare stories you heard about or read about.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food-06",
      "summary:15번 식품 오염 사건 관련 뉴스 보도 설명 – 집단 식중독"
    ]
  },
  {
    "id": "food-0187",
    "topic": "food",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "The best way to cook healthy food is to use healthy ingredients. So, I always make sure to get fresh ingredients for cooking. I also check the expiration date when I buy processed foods. I get groceries at a local supermarket chain near my home. The store is very large in size. They sell everything from fresh fruits and vegetables to all kinds of seafood. They sell fish, shrimp, crab, shellfish, squid, tuna, salmon and octopus. So, there are a lot of options to choose from. They have good prices and good-quality goods, so I can get great deals there. I am a regular and I go there at least once or twice a week on average. So, this is where I buy fresh ingredients for cooking. [+온라인 쇼핑 추가] However, these days. I also get groceries online very often.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:food",
      "summary:건강식 구매 방법 및 조리법 설명 – 식료품점 + 온라인 쇼핑"
    ]
  },
  {
    "id": "food-0188",
    "topic": "food",
    "level": "advanced",
    "taskType": "description",
    "prompt": "When I was a kid, my mom used to be very health-conscious. She made sure we were getting the nutrients we needed. First, she used to make sure we were having balanced meals. She made us eat vegetables, eggs and meat every day. Also, she made us drink milk or juice every single day. So, my mom was the one who made me learn about eating healthy. I became more conscious about what I eat because of my mom. As an adult, I still try to eat healthy myself. I also try to cut back on unhealthy food such as junk food. I also try to eat less instant food. So, I guess I learned about eating healthy from my mom.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food",
      "summary:어렸을 때 건강식을 먹게 된 계기 설명 – 어머니"
    ]
  },
  {
    "id": "food-0189",
    "topic": "food",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "One of the most typical foods in Korea is kimchi. It is very tasty, but it is very healthy for us as well. In fact, kimchi was selected as one of the healthiest foods in the world. Kimchi is rich in vitamins and fiber. It makes us healthier because it strengthens our immune system. I think one of the reasons Koreans have a long life-expectancy is kimchi. Like most Koreans, I have kimchi every single day when I have meals. I actually had some yesterday during dinner. I think Korean meals are NOT the same without kimchi. Once again, kimchi is one of the healthiest foods I have almost every day.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:food",
      "summary:건강식을 최근에 먹어 본 경험 묘사"
    ]
  },
  {
    "id": "food-0190",
    "topic": "food",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about the kinds of foods healthy people eat. What foods are they? Where do they buy these foods?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-01",
      "summary:건강한 사람들이 먹는 음식 묘사"
    ]
  },
  {
    "id": "health-0191",
    "topic": "health",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about all the things you do in order to stay healthy.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-01",
      "summary:본인이 건강을 위해 평상시 하는 일들 묘사"
    ]
  },
  {
    "id": "health-0192",
    "topic": "health",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Ideas about what good health is and how to maintain it change frequently. What did people do to maintain good health when you were a child? What was considered to be a healthy diet at that time? How did people usually exercise? Describe how our ideas of what is healthy have changed over time.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-01",
      "summary:건강에 대한 인식과 운동법 과거 현재 비교"
    ]
  },
  {
    "id": "health-0193",
    "topic": "health",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Ideas about what good health is and how to maintain it change frequently. What did people think about to maintain good health when you were a child? What was considered to be a healthy diet at that time? How did people usually exercise? Describe how our ideas of what means to be healthy have changed over time.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-02",
      "summary:건강에 대한 인식과 운동법 과거 현재 비교"
    ]
  },
  {
    "id": "health-0194",
    "topic": "health",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a specific incident related to being healthy that happened to you. Maybe you went to hunt for a restaurant, try to cook a healthy dish or began an exercise program. Tell me the story from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-02",
      "summary:본인의 건강을 위해 했던 일 묘사 – 식료품점"
    ]
  },
  {
    "id": "health-0195",
    "topic": "health",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about a local health food store in your neighborhood. What does this place look like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-03",
      "summary:본인이 동네에 건강한 식품 파는 식료품점 묘사"
    ]
  },
  {
    "id": "health-0196",
    "topic": "health",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "What are the eating habits of healthy people? What do they usually eat during the week, for breakfast, lunch, dinner, snacks, etc?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-03",
      "summary:건강한 사람들의 식습관 묘사"
    ]
  },
  {
    "id": "health-0197",
    "topic": "health",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How have the eating habits of healthy people changed since you were a child? Was the healthy diet same as it is now? Describe in detail the major differences.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-04",
      "summary:건강한 사람들의 식습관의 과거 현재 변화"
    ]
  },
  {
    "id": "health-0198",
    "topic": "health",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a specific time when you learned something about how to maintain good health. It might have been a class you took, or a book you read. Describe what happened from beginning to end in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-04",
      "summary:본인 건강 유지를 위해 뭔가 새롭게 배웠던 경험 묘사"
    ]
  },
  {
    "id": "health-0199",
    "topic": "health",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about someone you know who is very healthy. What is this person like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-05",
      "summary:본인이 아는 건강한 사람 습관 묘사"
    ]
  },
  {
    "id": "health-0200",
    "topic": "health",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about a time when you or someone you know did something new to become healthier. Maybe it was playing a sport or eating healthier food. Tell me about this change in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-05",
      "summary:본인이 건강을 위해 새로운 것을 시도해 본 경험 묘사"
    ]
  },
  {
    "id": "health-0201",
    "topic": "health",
    "level": "advanced",
    "taskType": "description",
    "prompt": "People do a lot of things to try to be healthy. They might join a healthy cooking class or join a new exercise program. Tell me about something you have done to try to improve your health. Tell me why you chose this particular activity and how it all worked out.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-05",
      "summary:본인이 건강을 위해서 했던 행동 구체적으로 설명"
    ]
  },
  {
    "id": "health-0202",
    "topic": "health",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Different generations have different views on what is healthy. Some generations think people have to be skinny in order to be healthy, while others believe people must be muscular. What did your parents’ generation think people have to be like in order to be healthy? How does that compare to what your generation believes?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-06",
      "summary:14번 건강에 대한 세대간 인식 과거 현재 비교"
    ]
  },
  {
    "id": "health-0203",
    "topic": "health",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "There are often health related news stories. Tell me about a recent news story related to health issues. Describe what happened in detail and what the reaction of your community was to the story.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health-06",
      "summary:15번 건강 관련 최근 본 뉴스 내용 설명"
    ]
  },
  {
    "id": "health-0204",
    "topic": "health",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Frankly, the way people eat healthy has NOT changed THAT much over the years. Healthy people try to eat well every day. First, they try to eat vegetables and fruits as often as they can. They contain a lot of vitamins, minerals and fiber. For example, they eat fruits such as apples, grapes, bananas, and strawberries. They also eat pineapples, pears, peaches and oranges. They eat vegetables such as tomatoes, onions, carrots, cucumbers and potatoes. Next, they try to eat fish, beef, pork and chicken as much as they can. They also eat beans, tofu and eggs whenever they have the chance. They are rich in healthy protein. Also, they try to eat organic food whenever they can. They are NOT grown with chemicals, so they are much healthier. So, these are the types of food that healthy people eat.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health",
      "summary:건강한 사람들의 식습관의 과거 현재 변화"
    ]
  },
  {
    "id": "health-0205",
    "topic": "health",
    "level": "advanced",
    "taskType": "routine",
    "prompt": "I try to make healthy home-cooked meals as often as I can. The best way to cook healthy food is to use healthy ingredients. So, I always make sure to get fresh ingredients for cooking. I also check the expiration date on processed foods. I get groceries at a local supermarket chain near my home. The store is very large in size. They sell everything from fresh vegetables to all kinds of seafood. So, there are a lot of options to choose from. They have good prices and good-quality goods, so I can get great deals there. I am a regular and I go there at least once or twice a week on average. So, this is where I buy fresh ingredients for cooking. [+온라인 쇼핑 추가] However, I also get groceries online very often these days.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health",
      "summary:본인의 건강을 위해 했던 일 묘사"
    ]
  },
  {
    "id": "health-0206",
    "topic": "health",
    "level": "advanced",
    "taskType": "routine",
    "prompt": "Eating healthy was one of the most effective ways to stay healthy. So, I tried to eat healthy every day. For starters, I tried to eat vegetables and fruits as often as I could. They contain a lot of vitamins, minerals and fiber. My favorite vegetables are tomatoes and potatoes. I also like to have cabbages and onions. I also like cucumbers and carrots because they are very crunchy. My favorite fruits are apples and bananas. I also like strawberries, watermelons and oranges. I also like to have pears, peaches and grapes when they are in season. Next, I tried to eat fish, pork, beef and chicken as much as I could. I tried to eat beans, tofu and eggs whenever I had the chance. They are rich in healthy protein. Also, I tried to eat organic food whenever I could. They are NOT grown with chemicals, so they are much healthier. In the end, eating properly helped me stay healthy and lose some weight.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:health",
      "summary:본인이 건강을 위해서 했던 행동 구체적으로 설명 - 건강식"
    ]
  },
  {
    "id": "shopping-0207",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "You indicated in the survey that you go shopping. Tell me about the stores or shopping centers in your country. What are these places like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-01",
      "summary:우리나라 상점/쇼핑센터 묘사 – 아웃렛 몰"
    ]
  },
  {
    "id": "shopping-0208",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Where do you go when you go shopping for something? What do you buy when you go there? What is special about that place?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-01",
      "summary:본인이 즐겨 가는 쇼핑 장소와 사는 물건 묘사 - 온라인 쇼핑"
    ]
  },
  {
    "id": "shopping-0209",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about your early memories of shopping and how you came to enjoy it so much. You might include information about where and when you used to shop, the people you went shopping with, what kinds of things you used to do while shopping or anything else that would give a clear picture of that experience.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-01",
      "summary:어렸을 때 쇼핑 추억과 좋아하게 된 계기 묘사 – 장 본 경험"
    ]
  },
  {
    "id": "shopping-0210",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Describe a typical shopping day for you. Tell me everything you do from the moment you leave home until you return.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-02",
      "summary:본인이 쇼핑을 하러 가는 날 하는 일들 순서대로 묘사"
    ]
  },
  {
    "id": "shopping-0211",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Think about your early memories of shopping. Is there a store or a market that you remember from your childhood? Describe this place for me. What did it look like? What were your impressions of the place?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-02",
      "summary:어렸을 때 기억에 남는 상점/시장 묘사 – 장 보러 간 경험"
    ]
  },
  {
    "id": "shopping-0212",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Sometimes, funny or unexpected things happen while shopping. Tell me the story of a memorable shopping experience you had. Maybe you saw a friend at a store, maybe the item you bought was broken or did not work. Tell me in detail about a shopping trip that you still remember for some reason.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-03",
      "summary:쇼핑 중 겪은 예상치 못한 경험 묘사 – 품절/교환/환불"
    ]
  },
  {
    "id": "shopping-0213",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "You indicated in the survey that you go shopping. I'd like to know more about your interest in shopping. For example, where do you go? Who do you shop with and why?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-04",
      "summary:본인의 쇼핑 습관 묘사 - 온라인 쇼핑"
    ]
  },
  {
    "id": "shopping-0214",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Think about your early memories of shopping. Is there a store or a market that you remember from your childhood? Describe this place for me. What did it look like? What was your impression of the place?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-05",
      "summary:어렸을 때 기억에 남는 상점/시장 묘사 – 장 보러 간 경험"
    ]
  },
  {
    "id": "shopping-0215",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "You have probably had many interesting experiences while shopping, some good, some funny, some problematic. Tell me about one particular shopping experience with as much detail as possible, where you were, what happened, how it happened, what you and/or others did, and how it all turnd out.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-05",
      "summary:본인이 겪은 특정 쇼핑 에피소드 묘사 – 품절/교환/환불"
    ]
  },
  {
    "id": "shopping-0216",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about one particular shopping experience with much detail as possible. Where you were, what happened, how that happened, what you and/or others did and how all turned out.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-06",
      "summary:본인이 겪은 특정 쇼핑 에피소드 묘사 – 품절/교환/환불"
    ]
  },
  {
    "id": "shopping-0217",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "You indicated in the survey that you go shopping. Going shopping has changed a great deal over the years. Talk about the most significant changes in shopping over the years.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-07",
      "summary:14번 사람들의 쇼핑 습관 관련된 가장 큰 변화 묘사"
    ]
  },
  {
    "id": "shopping-0218",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "What kinds of products and services do you hear shoppers are talking about the most these days? Why do you think they are generating so much interest? Tell me in detail about those products. What are people saying about them and why?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping-07",
      "summary:15번 사람들이 요즘 많이 언급하는 인기 상품/서비스 묘사"
    ]
  },
  {
    "id": "shopping-0219",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "There are tons of stores and shopping centers in Korea. They are everywhere these days. Many stores are on busy streets with a lot of foot traffic. They are concentrated near subway stations or universities. One of the largest places to shop is outlet malls. There are many types of stores at these places. You can find all sorts of brands for clothes and shoes. These stores normally sell products from the previous season, so you can get discounts and get great deals there. Plus, there are many restaurants and cafes at outlet malls. There are large-scale food courts as well. So, you can grab a bite if you are hungry. Once again, there are many stores and shopping centers in Korea.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping",
      "summary:우리나라 상점/쇼핑센터 묘사 – 아웃렛 몰"
    ]
  },
  {
    "id": "shopping-0220",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "On a typical shopping day, I first decide what to buy. I also think about where to go and when to go. I also think about who to go with. I make sure to dress light and wear comfortable shoes, because I have to walk around a lot. When I get to the shopping mall, I first look around and do some window shopping. And then, I compare prices and try things on in the fitting room. When I find something I want to buy, I go up to the counter and pay for it. I usually pay with my credit card or debit card. I rarely pay in cash these days. So, this is what I do on a typical shopping day.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:shopping",
      "summary:본인이 쇼핑을 하러 가는 날 하는 일들 순서대로 묘사"
    ]
  },
  {
    "id": "domesticTravel-0221",
    "topic": "domesticTravel",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Can you tell me all the things you do in order to prepare to take trips?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:domestic-trips-01",
      "summary:본인이 여행 가기 전에 하는 준비 설명 – 예약+짐싸기"
    ]
  },
  {
    "id": "domesticTravel-0222",
    "topic": "domesticTravel",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Traveling can lead to many kinds of interesting, funny and unexpected experiences. Tell me about one travel experience you had that was unforgettable. Start by telling me when this happened, where you were, and who you were with. Then, tell me about all the things that happened to make that experience so unforgettable.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:domestic-trips-01",
      "summary:여행 중에 있었던 잊을 수 없는 에피소드 설명 – 체한/취한 경험"
    ]
  },
  {
    "id": "domesticTravel-0223",
    "topic": "domesticTravel",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "You indicated in the survey that you take vacations domestically. Most people say that traveling has become more difficult in the past 5 years. Tell me what types of changes you have observed when traveling and how these changes affected the traveler or travel experience.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:domestic-trips-04",
      "summary:14번 지난 5년간 여행이 더 어려워진 이유 설명 - 교통"
    ]
  },
  {
    "id": "domesticTravel-0224",
    "topic": "domesticTravel",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "When people talk about traveling, what are the main issues or concerns they typically raise or discuss? What has caused these concerns? What is being done to address these concerns for the future?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:domestic-trips-04",
      "summary:15번 여행 관련 사람들이 갖고 있는 걱정 설명 – 안전"
    ]
  },
  {
    "id": "overseasTravel-0225",
    "topic": "overseasTravel",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "You indicated in the survey that you take vacations internationally. Can you describe for me one of the countries or cities you’ve visited? What does it look like? And what are the people there like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-01-set",
      "summary:본인이 가본 해외 국가나 도시, 현지인 묘사 – 강/산/바다"
    ]
  },
  {
    "id": "shopping-0226",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Can you tell me about the things you like to do when visiting another country?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-01-set",
      "summary:본인이 해외여행지에 가서 주로 하는 일들 묘사 - 관광/먹방/쇼핑"
    ]
  },
  {
    "id": "overseasTravel-0227",
    "topic": "overseasTravel",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Describe for me your first trip to another country. When was the trip? Where did you go? Who did you go with and what did you do? Describe that experience for me in as much detail as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-01-set",
      "summary:본인이 처음으로 가본 해외 국가나 도시 묘사 – 호텔"
    ]
  },
  {
    "id": "overseasTravel-0228",
    "topic": "overseasTravel",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Sometimes, something out of the ordinary happens while traveling. I wonder if you have ever experienced anything surprising, unexpected or unusual while on a trip. Tell me about the story of that experience in detail. Start by telling me when and where you were traveling. And then, tell me all the details of that experience, especially what happened that made it so unforgettable.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-02-set",
      "summary:해외여행 중에 겪은 잊을 수 없는 에피소드 설명 - 체한/취한 경험"
    ]
  },
  {
    "id": "overseasTravel-0229",
    "topic": "overseasTravel",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about a popular place tourists like to go to when traveling outside your country.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-03-set",
      "summary:우리나라 관광객들이 주로 가는 해외여행지 묘사 – 강/산/바다"
    ]
  },
  {
    "id": "overseasTravel-0230",
    "topic": "overseasTravel",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "Think about another country that you visited when you were young. Describe what this other country was like with lots of details. What were your impressions of that place?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-03-set",
      "summary:본인이 어렸을 때 가보았던 외국 국가 묘사 – 호텔"
    ]
  },
  {
    "id": "overseasTravel-0231",
    "topic": "overseasTravel",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me a specific story about a time that you or someone you know travelled outside of your country. Perhaps, something happened that was funny, interesting, frightening, etc. Tell me the story of what happened from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-03-set",
      "summary:해외여행 중에 겪은 잊을 수 없는 에피소드 설명 - 체한/취한 경험"
    ]
  },
  {
    "id": "overseasTravel-0232",
    "topic": "overseasTravel",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about what tourists usually do when they visit another country. Where do they go? What do they do there?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-04-set",
      "summary:우리나라 관광객들이 해외여행지에서 하는 일들 묘사"
    ]
  },
  {
    "id": "overseasTravel-0233",
    "topic": "overseasTravel",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "You indicated in the survey that you take vacations internationally. How has traveling to other countries changed over the years? Is it easier or more difficult? Describe what the experience was like in the past and what changes you have seen.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-05-set",
      "summary:14번 해외여행 과거와 현재 비교 – 교통편"
    ]
  },
  {
    "id": "overseasTravel-0234",
    "topic": "overseasTravel",
    "level": "advanced",
    "taskType": "description",
    "prompt": "When people discuss traveling to other countries, what are the things that they are most interested in doing or seeing? Why are these things of such interest or importance to travelers?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips-05-set",
      "summary:15번 해외로 나가는 여행객들이 관심 갖는 것들 묘사"
    ]
  },
  {
    "id": "overseasTravel-0235",
    "topic": "overseasTravel",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Koreans often go to Japan when they travel overseas. Japan is one of our closest neighboring countries. It is only a short flight from Korea. It takes 2 hours to get there. Japan has a diverse geography because it has many mountains, beaches and rivers. First, there are many rivers that flow through large cities. The rivers provide water for these cities. Plus, there are many bridges over the rivers, which are very pretty. Next, there are many mountains in Japan. In fact, nearly half of the country is mostly mountains. The mountains create a pretty landscape. They change into beautiful colors especially in the fall season. The trees change colors to red, yellow and orange. The colors are beautiful. Plus, there are tons of beaches and islands in Japan. Some of them are popular vacation spots and the coastline is very scenic. People can enjoy various types of seafood in Japan. +해산물 종류 Once again, Koreans often go to Japan when they take trips overseas.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:overseas-trips",
      "summary:우리나라 관광객들이 주로 가는 해외여행지 묘사 – 강/산/바다"
    ]
  },
  {
    "id": "geography-0236",
    "topic": "geography",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Describe your country’s geography for me. Are there mountains, lakes, or rivers? What is your country like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-01",
      "summary:우리나라의 지형적 특징 묘사 – 강/산/바다"
    ]
  },
  {
    "id": "geography-0237",
    "topic": "geography",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about the kinds of outdoor activities that are popular in your country. Do people hike, bike or swim? What do people typically do outdoors?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-01",
      "summary:우리나라 사람들의 보편적인 야외 활동 묘사 – 운동/등산/여행"
    ]
  },
  {
    "id": "geography-0238",
    "topic": "geography",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Describe for me an early memory that you have of your country’s geography. Perhaps, you visited a special place or went to an important natural landmark. Describe what you saw when you visited this special place.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-01",
      "summary:어렸을 때 갔던 지형 관련 특별했던 추억 묘사 – 해변여행"
    ]
  },
  {
    "id": "restaurant-0239",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "People often have memorable and moving experiences when they explore their country’s geography. You might climb a famous mountain or swim at a beautiful beach. Tell me the story of a memorable time you had while visiting a natural place in your country.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-02",
      "summary:지형 관련해서 본인이 가본 국내 장소 추억 묘사 – 음식점"
    ]
  },
  {
    "id": "geography-0240",
    "topic": "geography",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Please tell me about what kinds of free time activities people in your country do?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-03",
      "summary:우리나라 사람들이 시간날 때 하는 활동 묘사 – 운동/등산/여행"
    ]
  },
  {
    "id": "geography-0241",
    "topic": "geography",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Tell me in detail about changes you have observed concerning the relationship between your country and other countries. The change might be related to economics, sports, arts, culture or politics. Describe the changes in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-06",
      "summary:14번 우리나라와 다른 국가와의 관계와 관계 변화 설명 – 한일관계"
    ]
  },
  {
    "id": "geography-0242",
    "topic": "geography",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "I'd like for you to think about a specific historic event that has affected the relationship between your country and one of its neighboring nations. It could be a treaty signed between two countries, a cultural event or the visit of another country's minister or president. Tell me in detail about everything that happened.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography-06",
      "summary:15번 우리나라와 이웃 국가와의 역사적 사건과 여파 설명 – 남북관계"
    ]
  },
  {
    "id": "geography-0243",
    "topic": "geography",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Korea has a diverse geography because it has many mountains, beaches and rivers. First, there are many rivers that flow through large cities. The rivers provide water for these cities. Plus, there are many bridges over the rivers. They are especially pretty at night when they are lit up. Next, there are many mountains in Korea. In fact, 70 percent of the country is mostly mountains. The mountains create a pretty landscape. They change into beautiful colors especially in the fall season. The trees change colors to red, yellow and orange. The colors are so beautiful. Many people go hiking to enjoy the mountains in fall. Plus, there are tons of beaches and islands in Korea. Some of them are popular vacation spots and the coastline is very scenic. People can enjoy various types of seafood in Korea. +해산물 종류 Once again, Korea’s geography is very diverse.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography",
      "summary:우리나라의 지형적 특징 묘사 - 강/산/바다"
    ]
  },
  {
    "id": "geography-0244",
    "topic": "geography",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Korea and Japan have a very long and complicated history. Relations between the two countries have gone through many ups and downs. Back in the early 1900s, Japan occupied Korea for 36 years. It committed numerous war crimes during its occupation. Many of them were crimes against humanity. Nevertheless, Japan has NOT fully apologized for its wrongdoings. Over the years, the two countries made efforts to improve bilateral ties. However, in recent years, relations between Korea and Japan have become very bad again. Japan imposed trade sanctions on Korea because of a court ruling. Korea retaliated by imposing sanctions of its own. Koreans started to boycott Japanese products and cancelled trips to Japan. The two nations still have uneasy feelings over this matter. More recently, with new governments in both nations, Korea and Japan are trying to mend ties and improve relations. All in All, the relationship between Korea and Japan is very complicated. The problems we have cannot be solved overnight.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:geography",
      "summary:14번 우리나라와 다른 국가와의 관계와 관계 변화 설명 – 한일관계"
    ]
  },
  {
    "id": "internet-0245",
    "topic": "internet",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about your favorite website or type of website you visit. Why do you like it? Give me as many details as you can.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet-02",
      "summary:본인 가장 좋아하는 웹사이트 묘사, 좋아하는 이유 설명"
    ]
  },
  {
    "id": "internet-0246",
    "topic": "internet",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "One of my favorite websites is YouTube. There are tons of video clips that are posted on that site every day. Video clips have become much better than in the past. They are very fun to watch and entertaining. Some clips are very addictive and I cannot stop watching them. Personally, I just watch whatever is fun. I watch news clips, music videos or movie trailers most often. I also watch comedy clips, sports clips or TV show clips on and off. I also have several YouTube channels I am subscribed to. My favorite channel is a movie channel. I get regular updates when there are new postings. Plus, I take online courses or remote video classes from time to time. They are very helpful and informative. It takes much less time and effort to learn things on the internet. Plus, they are much safer because you can take classes at home. So, these are the video clips I watch online.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:internet",
      "summary:본인이 인터넷상에서 주로 보는 동영상 묘사"
    ]
  },
  {
    "id": "phone-0247",
    "topic": "phone",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How have phones changed over the years? What were they like when you were younger? How were they different from the phones today? And how have these changes affected people's ability to stay connected with other people?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-04",
      "summary:14번 휴대전화 과거 현재 비교. 사람들 간의 소통방법에 미친 변화"
    ]
  },
  {
    "id": "phone-0248",
    "topic": "phone",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "What kinds of concerns or problems come up when people discuss the use of cell phones? Give me some background about this problem. Why are these issues of interest or concern to people?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-04",
      "summary:15번 사람들이 언급하는 휴대전화 사용 관련 문제점/우려"
    ]
  },
  {
    "id": "health-0249",
    "topic": "health",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about the kinds of things you and your friends talk about on the phone.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-06",
      "summary:친구들과 전화통화 주제 묘사 – 건강/"
    ]
  },
  {
    "id": "phone-0250",
    "topic": "phone",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "I'd like to know about your routine of talking on the phone. Who do you talk with, when do you usually talk on the phone and how long do you talk for? Do you do other things at the same time when you are on the phone?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-06",
      "summary:본인의 전화통화 습관 묘사 (상대, 시점, 통화길이, 함께 하는 일)"
    ]
  },
  {
    "id": "music-0251",
    "topic": "music",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Can you tell me about a memorable phone conversation you had using your phone? Maybe your friend or your relative told you some exciting news. Maybe something funny happened while you were on the phone. Tell me about that story from beginning to end with all the details about why it was so memorable.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-06",
      "summary:본인 기억에 남는 전화통화 설명 - 뉴스 / 영화 / 음악"
    ]
  },
  {
    "id": "phone-0252",
    "topic": "phone",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "How did you choose the phone that you currently use? How did you hear about it? Did you do research? Tell me everything you can remember about your experience of choosing your phone from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone-07",
      "summary:본인의 지금 전화기 기종 선택 이유 설명"
    ]
  },
  {
    "id": "phone-0253",
    "topic": "phone",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "I can talk to whomever I want to over the phone. I call my family members such as my mom, dad and sister. I also call my friends or wife/husband. I sometimes talk with my co-workers or clients. Some calls are personal, while others are work-related. I normally make calls when I’m indoors. But now, I use a cell phone, so I often make calls when I’m on the move. For example, I can make calls when I’m on the bus or the subway. I can also make calls when I’m walking down the street. I can also make calls when I’m driving my car. It is very convenient if I use my earphones when I talk on the phone. So, I can now make phone calls wherever I am, whenever I need to.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:phone",
      "summary:본인의 전화통화 습관 묘사 (상대, 시점, 통화길이, 함께 하는 일)"
    ]
  },
  {
    "id": "weather-0254",
    "topic": "weather",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "Tell me more about the weather at where you are today. What is happening right now?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:weather-01",
      "summary:오늘 현재의 날씨 상태 묘사"
    ]
  },
  {
    "id": "weather-0255",
    "topic": "weather",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Severe weather can often cause serious problems. Tell me about an experience you had when the weather created some kind of problems. Maybe roads were flooded, maybe schools and businesses were closed due to snow or cold weather conditions. Tell me about an experience you had when severe weather created some kind of problem. Give me lots of details.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:weather-01",
      "summary:극단적 날씨 관련 경험 묘사 - 2020년 최장 장마 / 수해피해"
    ]
  },
  {
    "id": "weather-0256",
    "topic": "weather",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Korea has four distinct seasons: spring, summer, fall and winter. The weather is very nice in spring and fall. The temperatures are mild and it is great for outdoor activities. People like to go hiking or camping and go on picnics during these seasons. They also do a lot of outdoor sports such as soccer, basketball or tennis. On the other hand, summer is scorching hot. It is very humid and sticky and people sweat a lot. We have the rainy season in summer and it pours. Winter is the complete opposite. It is freezing cold and the morning lows drop to -10 degrees Celsius very often. We need to bundle up to keep ourselves warm / when we go outside. Plus, we get a lot of snow in winter. It is very slippery when it snows, so we have to be careful NOT to slip and fall. Once again, there are four distinct seasons in Korea.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:weather",
      "summary:우리나라 날씨와 계절 묘사"
    ]
  },
  {
    "id": "weather-0257",
    "topic": "weather",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "It is mid-fall here in Korea right now. +early-summer +mid-spring +late-winter It is very cool temperature-wise. +Because it is very cool and humid, people are sweating a lot. +The temperature drops to below zero. The weather today is sunny and we have clear skies. +It is cloudy and windy today. +It is raining outside right now. +It is extremely hot and humid today. +It is snowing outside right now. The weather seems to be getting cooler and cooler every day. Soon, it will be early-winter, which is when the weather starts to get cold. +colder and colder +hotter and hotter +warmer and warmer The weather forecast says that temperatures will drop even further next week. +it is going to snow this weekend +it is going to rain this weekend +skies will clear up this weekend",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:weather",
      "summary:오늘 현재의 날씨 상태 묘사"
    ]
  },
  {
    "id": "fashion-0258",
    "topic": "fashion",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "What kinds of clothes do people in your country typically wear? Are there different clothes for work and for play? Tell me about the clothes in your country.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:fashion-01",
      "summary:우리나라 사람들의 패션 묘사 – 근무/여가/옷"
    ]
  },
  {
    "id": "fashion-0259",
    "topic": "fashion",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "What kinds of clothes do you like to wear personally? What are you wearing today? What kind of fashion style do you like? Give me all the details about your fashion style.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:fashion-01",
      "summary:본인이 좋아하는 옷, 패션 스타일 묘사 – 계절/옷"
    ]
  },
  {
    "id": "fashion-0260",
    "topic": "fashion",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Fashions are always changing. Tell me about the kinds of clothes that were popular when you were younger. What did the styles look like? How were they different from what is popular now?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:fashion-01",
      "summary:어렸을 때 유행했던 패션과 지금 패션 비교"
    ]
  },
  {
    "id": "fashion-0261",
    "topic": "fashion",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about the last time you bought a new piece of clothing. Give me all the details of the story. What did you need? Where did you find it? Were there any problems or challenges along the way?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:fashion-02",
      "summary:최근에 옷 사러 갔던 본인 경험, 겪은 문제 묘사 – 품절/교환/환불"
    ]
  },
  {
    "id": "shopping-0262",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "What do you usually do when you go shopping for new clothes? Where do you go and what do you look for? Tell me about a typical shopping trip for you.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:fashion-03",
      "summary:본인이 평소 옷을 사러 갈 때 하는 일들 묘사 – 쇼핑 순서"
    ]
  },
  {
    "id": "fashion-0263",
    "topic": "fashion",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "Koreans like to follow the latest fashion trends. They are very stylish and tend to dress well. For work, they dress formally. Many people wear suits when they go to work. On the other hand, for play, they dress casually. Many people wear comfortable clothes when they go out with friends. Meanwhile, Korea has four distinct seasons: spring, summer, fall and winter. People wear different clothes for each season, so fashion styles are seasonal. Once again, I think people in my country are very fashionable.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:fashion",
      "summary:우리나라 사람들의 패션 묘사 – 근무/여가/옷"
    ]
  },
  {
    "id": "fashion-0264",
    "topic": "fashion",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "I like to follow my own style when it comes to fashion. I just wear things that look good on me. Of course, I wear suitable clothes for the weather. In summer, I like to dress light because it is very hot and humid. I also like to wear brighter colors in summer. On the other hand, in winter, I have to dress warm because it is freezing cold. It is good to bundle up to keep myself warm. I also like to wear darker colors in winter. When it comes to fashion style, I guess I am NOT that fashionable. However, I pay attention to detail when I dress up for special occasions such as weddings, funerals, dates or interviews.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:fashion",
      "summary:본인이 좋아하는 옷, 패션 스타일 묘사 – 계절/옷"
    ]
  },
  {
    "id": "shopping-0265",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "On a typical shopping day, I first decide what to buy. I also think about where to go. I make sure to dress light and wear comfortable shoes, because I have to walk around a lot. When I get to the shopping mall, I first look around and do some window shopping. And then, I compare prices and try things on. When I find something I want to buy, I pay for it. I usually pay with my credit card or debit card. I rarely pay in cash these days. So, this is what I do when I go to buy new clothes.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:fashion",
      "summary:본인이 평소 옷을 사러 갈 때 하는 일들 묘사 – 쇼핑 순서"
    ]
  },
  {
    "id": "transportation-0266",
    "topic": "transportation",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about how people typically GET AROUND in your country. Do people drive their own cars or do they use trains or buses? What are some typical means of transportation?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:transportation-01",
      "summary:우리나라 사람들 교통 수단 묘사 – 대중교통(일상/여행)/자가용"
    ]
  },
  {
    "id": "transportation-0267",
    "topic": "transportation",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about the kinds of transportation you use on a typical day. Where do you usually go and how do you get there?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:transportation-01",
      "summary:본인이 자주 이용하는 교통 수단 묘사 – 버스/지하철/택시/운전"
    ]
  },
  {
    "id": "transportation-0268",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "How did you travel when you were a child? Were the types of transportation different back then? Describe for me how people used to GET AROUND in your city or town.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:transportation-01",
      "summary:어렸을 때의 사람들의 교통 수단 묘사 - 교통 수단의 발달"
    ]
  },
  {
    "id": "transportation-0269",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "routine",
    "prompt": "Problems often arise related to transportation. Cars break down, trains run late, or there are traffic jams. Tell me about a transportation problem that you once faced. Tell me everything that you did in as much detail as possible to deal with the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:transportation-02",
      "summary:교통편 사용 중 본인이 겪은 문제 설명 – 휴일 교통 정체"
    ]
  },
  {
    "id": "transportation-0270",
    "topic": "transportation",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "People get around in various ways in Korea. In general, it is quite easy to move around because public transportation is very well-organized. People take the bus or take the subway on a daily basis. They also take trains or take planes when they go on trips. Plus, many people drive their own cars. Korea’s population is 52 million, but there are more than 23 million cars. Because there are so many cars, traffic gets very bad, especially during rush hours. People often get stuck in traffic for a long time. Plus, parking can also be a headache since there are NOT enough parking spaces. So, people use public transportation or drive their own cars to get around.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:transportation",
      "summary:우리나라 사람들 교통 수단 묘사 – 대중교통(일상/여행)/자가용"
    ]
  },
  {
    "id": "hotel-0271",
    "topic": "hotel",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about the hotels in your country. What are those places like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:hotels-01",
      "summary:우리나라의 보편적인 호텔들 묘사"
    ]
  },
  {
    "id": "hotel-0272",
    "topic": "hotel",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me what you typically do when you go to a hotel. What do you do first, second, et cetera? When do you usually stay at hotels?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:hotels-01",
      "summary:호텔에 언제 투숙하는지, 도착해서 하는 일들 설명"
    ]
  },
  {
    "id": "hotel-0273",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "People often have memories of special, beautiful or interesting hotels. Tell me about a hotel that you remember for some reason. Where was it? What did it look like? Describe it for me in as much detail as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:hotels-01",
      "summary:기억에 남는 호텔 묘사, 기억에 남는 이유 설명"
    ]
  },
  {
    "id": "hotel-0274",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "When was the last time you stayed in a hotel? Tell me the whole story of where you were, why you were there, and what you did there. Take me through the whole hotel stay from start to finish.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:hotels-02",
      "summary:최근에 갔었던 호텔에 묶었던 경험 묘사"
    ]
  },
  {
    "id": "hotel-0275",
    "topic": "hotel",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "There are tons of hotels in Korea. They are everywhere these days. Some hotels are very luxurious and are quite big in size. Most of them are five-star hotels. They have hundreds of guest rooms and their service is excellent. They often have chains all across the world. Plus, there are also many hotels at popular vacation spots. They vary in size and provide great views from the rooms. These hotels get very crowded during the peak season. They charge higher rates during those times. So, it is more expensive to stay at hotels. It is good to book a room in advance because hotels can get fully-booked. So, this is what hotels in Korea are like.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:hotels",
      "summary:우리나라의 보편적인 호텔들 묘사"
    ]
  },
  {
    "id": "bank-0276",
    "topic": "bank",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about the banks in your country. What do they typically look like? Where are they usually located?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:bank-01",
      "summary:우리나라 보편적인 은행들 묘사"
    ]
  },
  {
    "id": "bank-0277",
    "topic": "bank",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about the kinds of things you usually do when you go to the bank.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:bank-01",
      "summary:본인이 은행에 가서 하는 업무 묘사"
    ]
  },
  {
    "id": "bank-0278",
    "topic": "bank",
    "level": "advanced",
    "taskType": "comparison",
    "prompt": "Banks have definitely changed over time. Tell me about a bank you remember from your childhood. What was the bank like? How was it different from banks today?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:bank-01",
      "summary:어렸을 때 은행과 지금 은행과의 비교"
    ]
  },
  {
    "id": "bank-0279",
    "topic": "bank",
    "level": "advanced",
    "taskType": "description",
    "prompt": "Sometimes, problems arise when dealing with the bank. Tell me in detail about a problem you had that involved your bank. Maybe the bank was closed when you needed it to be open. Maybe the bank made some kind of mistake. Tell me the story of a time when you had to solve a problem involving your bank.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:bank-02",
      "summary:은행 업무 관련 본인이 겪은 문제와 해결방법 설명"
    ]
  },
  {
    "id": "bank-0280",
    "topic": "bank",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "There are so many banks in Korea. They are everywhere these days. Many banks are on busy streets with a lot of foot traffic. They are concentrated near subway stations or universities. When you walk into a typical bank, there are ATMs where you can get cash. You can also see tellers sitting at the counters. Plus, there are usually chairs where customers can sit and wait. Normally, there is also a security guard on duty. Plus, there are screens on the walls that show the exchange rates for foreign currencies. So, this is what banks in Korea are like.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:bank",
      "summary:우리나라 보편적인 은행들 묘사"
    ]
  },
  {
    "id": "bank-0281",
    "topic": "bank",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "When I go to banks, I first pull out a number and wait for my turn. When they call my number, I go up to the teller and take care of my business. First, I open a new account from time to time. I sometimes open a savings account. I check the interest rate when I do that. Sometimes, I open a checking account. I check my balance or make wire transfers most often. I also deposit or withdraw money in and out of my account. What else? I also exchange currency before I go on trips overseas. I also get a loan when I need money. Plus, I sometimes pay utility bills or traffic tickets. I also get a new card issued whenever I need to. So, these are things I do when I go to banks.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:bank",
      "summary:본인이 은행에 가서 하는 업무 묘사"
    ]
  },
  {
    "id": "bank-0282",
    "topic": "bank",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "Once, I remember going to the bank to pay a bill. However, there were so many people waiting at the bank. I think it was crowded because it was lunch time. I first pulled out a number from the machine, but there were at least 10 people waiting in front of me. I waited and waited, but it was still NOT my turn. I could NOT wait any longer, so I just had to leave the bank. It was very frustrating. Since then, I try to avoid busy hours at the bank.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:bank",
      "summary:은행 업무 관련 본인이 겪은 문제와 해결방법 설명"
    ]
  },
  {
    "id": "reservation-0283",
    "topic": "reservation",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "What kinds of places you go to for different kinds of appointments.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:appointment-01",
      "summary:본인이 평소에 하는 예약 종류/장소들 묘사"
    ]
  },
  {
    "id": "reservation-0284",
    "topic": "reservation",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "What kinds of things do you usually do when you have an appointment? Tell me what a typical appointment is like for you.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:appointment-01",
      "summary:본인이 평소에 예약을 할 때 하는 일들 구체적으로 묘사"
    ]
  },
  {
    "id": "reservation-0285",
    "topic": "reservation",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about an appointment you remember from your childhood. Maybe you visited a doctor, the dentist, or a new school. Tell me about the place you went to for this appointment. What was your impression? How did you feel?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:appointment-01",
      "summary:본인이 어렸을 때 했던 예약 경험 묘사 – 미용실 예약"
    ]
  },
  {
    "id": "reservation-0286",
    "topic": "reservation",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Sometimes, funny or surprising things happen during an appointment. Tell me about an appointment that you remember for some reason. Tell me everything that happened and why it was so memorable.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:appointment-02",
      "summary:예약 관련 기억에 남는 본인 에피소드 설명 – 예약 변경"
    ]
  },
  {
    "id": "reservation-0287",
    "topic": "reservation",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "When I have to make appointments, I first look for a phone number. Sometimes, I have it on my phone. If not, I do a search online. And then, I make a call to make an appointment. I ask them when they are available. I tell them when I want to come in and fix the time. I usually get a text message confirming my appointment. These days, it is possible to make appointments online. You can make an appointment on websites. So, this is what I do when I make appointments.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:appointment",
      "summary:본인이 평소에 예약을 할 때 하는 일들 구체적으로 묘사"
    ]
  },
  {
    "id": "gathering-0288",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "experience",
    "prompt": "People commonly go to bars in their free time. They typically have social gatherings at bars. They grab some drinks with their friends. Drinks break the ice and loosen up the mood. They sometimes play drinking games with the people they are with. They sometimes do several rounds moving from one bar to another. Plus, people have staff-dinners at bars. It is a great chance to bond with co-workers. They can get closer after they have some drinks together. Also, people go to bars for after-parties. These parties are normally held after a main event. Next, people go to bars for special occasions such as birthday parties, year-end parties, anniversaries, welcome parties or farewell parties. Drinks spice up the mood at these events. Once again, people like to hang out with others at bars in their free time.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:free-time",
      "summary:우리나라 사람들이 자유시간에 하는 일들 묘사 – 모임"
    ]
  },
  {
    "id": "familyFriends-0289",
    "topic": "familyFriends",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Can you describe a friend or a family member you see often? Who is he or she? What is he or she like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-01",
      "summary:자주 보는 가족/친구 묘사 – 부모님"
    ]
  },
  {
    "id": "movies-0290",
    "topic": "movies",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "When you get together with friends or family, what kinds of things do you like to do together and why?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-01",
      "summary:가족/친구를 만나면 주로 하는 일들 묘사 – 수다 (날씨/영화)"
    ]
  },
  {
    "id": "restaurant-0291",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about the last time when you got together with your friends or family. Who was there and when was it? Tell me everything you did that day from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-01",
      "summary:가족/친구와 최근에 했던 일 묘사 – 음식점"
    ]
  },
  {
    "id": "restaurant-0292",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about the last time you got together with your friends or family. Who was there and when was it? Tell me everything you did that day from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-02",
      "summary:가족/친구와 최근에 했던 일 묘사 – 음식점"
    ]
  },
  {
    "id": "gathering-0293",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Could you tell me about a special event or a holiday you celebrated with your family or friends? Tell me all about that event or the holiday from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-02",
      "summary:가족/친구와 보냈던 특별했던 이벤트/휴일 설명 – 가족모임"
    ]
  },
  {
    "id": "home-0294",
    "topic": "home",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Talk about a time when you visited a friend or a family member, What did you do when you visited them? What was memorable about that visit? Tell me everything from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-03",
      "summary:가족/친구의 집에 최근에 방문했던 경험 묘사 – 취한 경험"
    ]
  },
  {
    "id": "home-0295",
    "topic": "home",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about the kinds of things you typically do when you visit friends or family? Do you eat? Talk? Or play together? What are some popular activities when you get together?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-04",
      "summary:가족/친구 집에 가면 주로 하는 일들 묘사 – 수다 (날씨/영화)"
    ]
  },
  {
    "id": "home-0296",
    "topic": "home",
    "level": "advanced",
    "taskType": "experience",
    "prompt": "Tell me about an early memory you had when you visited friends or family. Describe your impression for me. Where did you go? Who did you visit? What was the experience like?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-04",
      "summary:가족/친구 집에 어렸을 때 방문했던 경험 묘사 – 체한 경험"
    ]
  },
  {
    "id": "familyFriends-0297",
    "topic": "familyFriends",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Tell me about a family or friends you like to visit? Who are these people? What are they like?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-05",
      "summary:방문하고 싶은 가족/친구 묘사 – 부모님"
    ]
  },
  {
    "id": "home-0298",
    "topic": "home",
    "level": "intermediate",
    "taskType": "routine",
    "prompt": "Tell me about the kinds of things you typically do when you visit friends or family? Do you eat, talk, or play together? What are some popular activities when you get together?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:family-friend-05",
      "summary:가족/친구 집에 가면 주로 하는 일들 묘사 – 수다 (날씨/영화)"
    ]
  },
  {
    "id": "holiday-0299",
    "topic": "holiday",
    "level": "intermediate",
    "taskType": "description",
    "prompt": "Choose one of the holidays you just told me about. Tell me about all the things people typically do to celebrate this holiday. What activities are involved?",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:holidays-01",
      "summary:위에 언급한 휴일에 사람들이 하는 일들 상세 묘사 – 전통풍습"
    ]
  },
  {
    "id": "holiday-0300",
    "topic": "holiday",
    "level": "advanced",
    "taskType": "description",
    "prompt": "What are some holidays in your country? What do people do during these holidays? What is special about them?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:holidays-03",
      "summary:14번 우리나라 휴일 종류, 사람들이 하는 일들 묘사 – 명절/전통풍습"
    ]
  },
  {
    "id": "holiday-0301",
    "topic": "holiday",
    "level": "advanced",
    "taskType": "opinion",
    "prompt": "What are some issues or concerns people have regarding holidays? What do people do to address those issues or concerns.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:topic",
      "set:holidays-03",
      "summary:15번 휴일 관련 사람들의 우려/걱정 설명"
    ]
  },
  {
    "id": "holiday-0302",
    "topic": "holiday",
    "level": "intermediate",
    "taskType": "comparison",
    "prompt": "As I mentioned, Korean Thanksgiving is a big family holiday in our country. There are many long-time traditions and customs related to this occasion. They have been passed down for many generations. First, people dress up in traditional Korean outfits. They are called Han-bok and they are very colorful and pretty. People also make special rice cakes. They are called Song-pyeon. They are very tasty and come in many different colors: white, pink, green and yellow. Plus, remembering our ancestors is a big part of family holidays. There are traditional memorials that take place. This is called Cha-rye. People also visit their ancestors’ graves to pay their respects. This is called Seong-myo. So, these are some of the traditions related to Korean Thanksgiving.",
    "timeLimitSec": 120,
    "tags": [
      "pdf",
      "source:topic",
      "set:holidays",
      "summary:특정 휴일에 사람들이 하는 일들 상세 묘사 – 전통풍습"
    ]
  },
  {
    "id": "fashion-0303",
    "topic": "fashion",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are at a clothing store and need to get some clothes. Ask two to three questions about the clothes you would like to buy.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-clothing-store-01",
      "summary:옷가게에 가서 현장 직원에게 옷 구매에 대해 문의"
    ]
  },
  {
    "id": "fashion-0304",
    "topic": "fashion",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. The clothes you have ordered have arrived, but one of the shirts has a problem. Call the clothing store and explain the problem. Give two to three alternatives to solve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-clothing-store-01",
      "summary:배달된 여러 옷 중 셔츠에 문제가 있음. 전화 문제해결"
    ]
  },
  {
    "id": "fashion-0305",
    "topic": "fashion",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever bought a piece of clothing that you did not like after you bought it? Have you ever had to return something because it was ripped or stained? Tell me the story of a time when you bought a new piece of clothing that had some kind of problem. What did you do to solve the problem?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-clothing-store-01",
      "summary:본인의 구매 물건 혹은 받은 서비스 불만 경험 묘사"
    ]
  },
  {
    "id": "fashion-0306",
    "topic": "fashion",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You need to buy some clothes. Go to a clothing store and tell the salesperson about the piece of clothing you want to buy. Ask two to three questions about all the things you need to know about that type of clothes.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-clothing-store-02",
      "summary:옷가게에 가서 현장 직원에게 구매하고 싶은 옷에 대한 질문"
    ]
  },
  {
    "id": "fashion-0307",
    "topic": "fashion",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. The clothes you have ordered arrived at your home, but one of the shirts is NOT the correct one. Call the clothing store and explain the problem. Make two to three suggestions as to how and when you can get the correct shirt.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-clothing-store-02",
      "summary:셔츠 하나가 다른 제품이 배달 옴. 전화 문제해결"
    ]
  },
  {
    "id": "fashion-0308",
    "topic": "fashion",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever bought a piece of clothing and found out that there was a problem with it? Perhaps, there was a rip or a stain on the clothing. Tell me what the problem was and what you did to solve the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-clothing-store-02",
      "summary:본인이 구매했던 옷에 문제가 있었던 경험 묘사"
    ]
  },
  {
    "id": "shopping-0309",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You see a sign at your favorite store that says that they are having a big sale. Go to the store and ask three or four questions to get as much information as possible about the sale.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-sale-01",
      "summary:좋아하는 상점에 직접 가서 큰 세일 관련 질문"
    ]
  },
  {
    "id": "shopping-0310",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. Once you get home with an item you bought, you realize that the item is damaged. Call the store and explain the situation and state what you want to do to resolve the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-sale-01",
      "summary:구매한 물품이 손상되어 있음. 상점에 전화로 문제 해결"
    ]
  },
  {
    "id": "shopping-0311",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever bought something that did not work or was damaged? Tell me about the item you bought that did not function properly or was damaged. Explain what the item was, what was wrong and what you did to resolve the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-sale-01",
      "summary:고장이 나거나 손상된 물건을 구매했던 경험 설명"
    ]
  },
  {
    "id": "shopping-0312",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You see a sign at your favorite store that says that they are having a big sale. Call the store and ask three or four questions about that special sale.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-sale-02",
      "summary:좋아하는 상점에 전화해서 큰 세일 관련 질문"
    ]
  },
  {
    "id": "shopping-0313",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. Once you get home with the things you bought, you realize that you did not get them at the sale price. Call the store and explain the situation and offer several ways to resolve the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-sale-02",
      "summary:구매한 물건이 세일가격 적용이 안 되어 전화로 문제 해결"
    ]
  },
  {
    "id": "shopping-0314",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had a problem while you were shopping? Perhaps, a store did not have an item you wanted. Or perhaps, something was too expensive. Tell me about that problem in detail and what you did to deal with the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-sale-02",
      "summary:본인이 쇼핑 중 겪었던 문제와 해결방법 설명 – 교환/환불"
    ]
  },
  {
    "id": "shopping-0315",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Your friend tells you about a great sale happening at one of your favorite stores. Ask your friend three or four questions to find out as much as you can about the sale.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-01",
      "summary:가장 좋아하는 상점에 세일에 대해 친구에게 전화로 질문"
    ]
  },
  {
    "id": "shopping-0316",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You went to the sale and bought several items, but when you returned home, you are surprised to discover that one item is missing. Call the store and leave a message explaining your problem with as much detail as possible. Suggest several solutions to the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-01",
      "summary:구매한 물건 중 하나 상점에 두고 옴. 전화 도움 요청"
    ]
  },
  {
    "id": "shopping-0317",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. I'd like to now know about your shopping experience that was particularly memorable. It might have been about a special gift you bought or perhaps an interesting experience with a salesperson or even a problem with the purchase. Can you talk about that memorable experience? Describe the circumstances, the items you bought, how things turned out in the end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-01",
      "summary:기억에 남는 본인 쇼핑 경험이나 겪은 문제 설명 – 교환/환불"
    ]
  },
  {
    "id": "shopping-0318",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. There is a newly opened store. Call your friend who knows about the new store and ask some questions about the store to get some information.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-02",
      "summary:새로 오픈한 상점에 대해 친구에게 전화로 질문"
    ]
  },
  {
    "id": "shopping-0319",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You left your wallet behind at the store. Call the store and explain your situation. Give several alternatives to solve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-02",
      "summary:지갑을 상점에 두고 옴. 전화 도움 요청"
    ]
  },
  {
    "id": "shopping-0320",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Have you ever left something behind at a restaurant or at a store? It can be your wallet, your cell phone, or anything that was important. Give me all the details.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-store-02",
      "summary:본인이 무엇인가를 어디에 두고 온 경험 묘사 – 우산"
    ]
  },
  {
    "id": "food-0321",
    "topic": "food",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "Your friend has told you about a great food store. Call your friend and ask two or three questions about the food store he talked about.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-food-store",
      "summary:친구가 말한 식료품점에 대해 친구에게 전화로 질문"
    ]
  },
  {
    "id": "food-0322",
    "topic": "food",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "A new food store has opened in your neighborhood. You visited that store and purchased some items. However, when you got home, you found out that the clerk left out some items from your food cart. Call the store, explain the situation and make suggestions to solve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-food-store",
      "summary:구매한 일부 물품을 종업원이 실수로 담아 주지 않음."
    ]
  },
  {
    "id": "food-0323",
    "topic": "food",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "Tell me about how you found a food store. Where is it located and why do you like going there? What do you like to shop for there? Give me all the details about that food store you go to.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-food-store",
      "summary:본인이 가는 식료품점을 찾은 방법과 상점에 대해 설명"
    ]
  },
  {
    "id": "food-0324",
    "topic": "food",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "I get groceries at a local supermarket chain. It was easy to find because it was NOT far from my home. The store is very large in size. They sell everything from fresh vegetables to all kinds of seafood. So, there are a lot of options to choose from. They have good prices and good-quality goods, so I can get great deals there. I am a regular and I go there at least once or twice a week on average. So, this is the grocery store I often go to. +However, these days, I often shop online for groceries quite often as well.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-food-store",
      "summary:본인이 가는 식료품점을 찾은 방법과 상점에 대해 설명"
    ]
  },
  {
    "id": "food-0325",
    "topic": "food",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to take a trip within your own country. Call the travel agent and ask three or four questions to find out what you need.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-01",
      "summary:여행사 직원에게 전화해서 여행 상품 문의"
    ]
  },
  {
    "id": "food-0326",
    "topic": "food",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I＇m sorry but there is a problem which I'll need you to resolve. You have booked a non-refundable plane ticket. However, something has happened that prevents you from going next week. Call the travel agent, explain what has happened, and offer some alternatives to resolve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-01",
      "summary:여행 계획 변경 필요. 여행사 전화해서 대안제시"
    ]
  },
  {
    "id": "food-0327",
    "topic": "food",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. There are times when something out of the ordinary happens while traveling. I wonder if you have ever experienced anything surprising, unexpected or unusual during a trip. Tell me the story of that experience in detail. Start by telling when and where you were traveling, And then, tell me all the details of that experience, especially about what made it so unforgettable.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-01",
      "summary:여행 중에 있었던 특이했던 본인 에피소드 자세히 묘사"
    ]
  },
  {
    "id": "familyFriends-0328",
    "topic": "familyFriends",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are planning a vacation with a friend. Call the travel agency and describe the kind of vacation you and your friend are planning. Then, ask three or four questions to find out what you need to know to complete the plans for this vacation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-02",
      "summary:여행사에 전화해서 친구와의 함께 갈 휴가 상품 문의"
    ]
  },
  {
    "id": "familyFriends-0329",
    "topic": "familyFriends",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. The travel agent informs you that the vacation you want is not available for the dates you want. Call your friend, leave a message explaining the situation and offer two or three alternatives.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-02",
      "summary:친구에게 여행 상품이 원하는 날짜에 없다고 설명. 대안제시"
    ]
  },
  {
    "id": "food-0330",
    "topic": "food",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Think about a time when you had difficulty making vacation plans. Tell me all about the details of what happened and what you needed to do.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-02",
      "summary:본인이 여행을 계획하는 단계에서 겪어본 어려움 묘사"
    ]
  },
  {
    "id": "food-0331",
    "topic": "food",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You need to make a travel arrangement for a trip you want to take next month. Call the travel agency and ask three or four questions to get the information that you need to plan your trip.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-03",
      "summary:다음 달에 갈 여행에 대해 여행사에 전화로 문의"
    ]
  },
  {
    "id": "food-0332",
    "topic": "food",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I'm sorry but there is a problem which I'll need you to resolve. When you have arrived at the airport, you were told that your flight had been cancelled and all other flights were completely booked. Call your travel agency, explain the situation, and make two or three suggestions to deal with the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-03",
      "summary:공항 도착했는데 항공편 결항. 여행사에 전화로 문제해결"
    ]
  },
  {
    "id": "food-0333",
    "topic": "food",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had to deal with problems caused by a cancelled flight yourself? Describe that experience related to a flight cancellation in full detail. Tell me when and where it happened and what you did to resolve the situation. Tell the story from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-03",
      "summary:본인의 항공편이 취소되어 겪어 본 불편 설명"
    ]
  },
  {
    "id": "geography-0334",
    "topic": "geography",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are planning to visit a friend who is living in a different country. Ask your friend three or four questions about the geography of his or her country.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-geography",
      "summary:해외 친구 방문 계획 중. 전화로 현지 지형에 대해 질문"
    ]
  },
  {
    "id": "geography-0335",
    "topic": "geography",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. The day before your trip, you realize that you will not be able to go. Call your friend and explain why you cannot visit, and make some suggestions as to when you might visit in the future.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-geography",
      "summary:문제가 생겨서 여행 못 가게 된 상황. 친구에게 대안제시"
    ]
  },
  {
    "id": "geography-0336",
    "topic": "geography",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Have you ever visited another country or region whose geography was very different from your own? Tell me about that experience. Where did you go? What was the place like? What was it that made this place so special and different?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-geography",
      "summary:지형적으로 다른 외국 국가나 지역 방문 경험 묘사"
    ]
  },
  {
    "id": "geography-0337",
    "topic": "geography",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’m calling to ask about the geography of your country. First, do you have any mountains there? If so, why don't we go hiking or camping to the mountains? Or why don't we go skiing or snowboarding? Are there any good ski resorts? Next, do you have any beaches there? If so, do you want to go to the beach? I really like going to the beach. Also, do you have any lakes or rivers there? If so, maybe we could go on a picnic or go fishing. Please give me a call when you get this. Thank you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-geography",
      "summary:해외 친구 방문 계획 중. 전화로 현지 지형 질문"
    ]
  },
  {
    "id": "familyFriends-0338",
    "topic": "familyFriends",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Your friend has just returned from a vacation to the United States. Ask your friend three or four questions to find out everything you can about his or her trip.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-friend-s-vacation",
      "summary:미국으로 휴가 다녀온 친구에게 전화로 질문"
    ]
  },
  {
    "id": "home-0339",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. Your friend wants you to come over and see his pictures from his trip this evening. However, you have another engagement. Call your friend, explain why you cannot come by this evening and offer some alternatives.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-friend-s-vacation",
      "summary:친구가 자기 집에 여행 사진 보러 오라고 초대했는데,"
    ]
  },
  {
    "id": "familyFriends-0340",
    "topic": "familyFriends",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Tell me about a memorable trip that you took. When was it? Where did you go? Tell me everything that you did on the trip, especially those things that made this trip so special.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-friend-s-vacation",
      "summary:본인의 기억에 남는 여행 설명 – 최근 해변 여행/"
    ]
  },
  {
    "id": "familyFriends-0341",
    "topic": "familyFriends",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I want to visit your country. You want to help me, but you need more information. Ask me three of four questions to learn more about me and my trip.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-eva-s-trip",
      "summary:우리나라 방문 계획하고 있는 상대에게 몇 가지 질문"
    ]
  },
  {
    "id": "familyFriends-0342",
    "topic": "familyFriends",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I am arriving for visiting your country today. You are going to meet me at the airport, but you have some emergency and can not make it. Call my voice mail and leave a message. Explain the problem and give me two or three options so that I can get from the airport to your home.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-eva-s-trip",
      "summary:상대가 오늘 공항 도착, 내가 공항 픽업 가기로 했으나"
    ]
  },
  {
    "id": "familyFriends-0343",
    "topic": "familyFriends",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "Tell me in detail about the time when you learned or realized something interesting about your country. Maybe you watched a sport event or observed the actions of your country’s government that affected the citizens. Tell me about the experience from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-eva-s-trip",
      "summary:본인 국가에 대해 흥미로운 사실을 발견하게 된 경험"
    ]
  },
  {
    "id": "familyFriends-0344",
    "topic": "familyFriends",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You have arrived at the airport, but your flight has been delayed for 2 hours. Go to the counter and ask the person there three or four questions about the delay.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-airport",
      "summary:공항에 도착했는데 항공편이 2시간 출발 지연. 카운터에 문의"
    ]
  },
  {
    "id": "familyFriends-0345",
    "topic": "familyFriends",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. Because of the flight delay, you cannot attend a business meeting. Call your client, explain the situation, and offer some alternatives to solve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-airport",
      "summary:항공편 지연으로 고객미팅 못 감. 전화로 설명/대안제시"
    ]
  },
  {
    "id": "transportation-0346",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Have you ever encountered any difficulties during a trip? Tell me about that experience and what you did to deal with that difficulty. Give me all the details about that experience.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-trip-airport",
      "summary:본인이 여행 중 겪은 어려움에 대해서 상세 설명 – 교통정체"
    ]
  },
  {
    "id": "movies-0347",
    "topic": "movies",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to take a friend to see a movie. Call the movie theater and ask three or four questions to get the information you need to buy the movie tickets.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-movie-01",
      "summary:영화관에 친구와 함께 볼 영화표 구매 전화 문의"
    ]
  },
  {
    "id": "movies-0348",
    "topic": "movies",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. When you and your friend arrive at the theater, you discover that you have been sold the wrong tickets. Explain the situation to the ticket seller in the booth and offer two or three alternatives to resolve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-movie-01",
      "summary:영화관 현장에서 상대가 잘못 판매한 표 설명. 문제해결"
    ]
  },
  {
    "id": "movies-0349",
    "topic": "movies",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Has this ever happened to you? Have you ever bought tickets or had reservations and something went wrong? Tell me about the experience. Begin with some background information about when and where this happened, and who you were with, and then tell me all the details of the incident and what you did to resolve it.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-movie-01",
      "summary:표를 예매하거나 예약을 하고 뭔가 문제가 생겼던 경험"
    ]
  },
  {
    "id": "movies-0350",
    "topic": "movies",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Your friend just told you about a great new movie. Ask your friend three or four questions about the movie to see if you want to watch it too.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-movie-02",
      "summary:친구가 언급한 영화를 본인도 보고 싶은 지 알아보기 위해 질문"
    ]
  },
  {
    "id": "movies-0351",
    "topic": "movies",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You are at the movies with your friend, but the movie is boring and you want to leave. Explain the problem to your friend and come up with two to three alternatives.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-movie-02",
      "summary:영화관에서 친구와 영화를 보다 너무 지루해서 중간에 나오고 싶음."
    ]
  },
  {
    "id": "movies-0352",
    "topic": "movies",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Have you ever tried to watch a boring movie? If so, what did you do? Did you watch the whole movie? Tell me all the details of this experience.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-movie-02",
      "summary:본인이 지루한 영화를 본 경험 설명"
    ]
  },
  {
    "id": "movies-0353",
    "topic": "movies",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "I don’t know about you, but I think this movie is boring as hell. I think it is a total piece of crap. I am almost falling asleep. I want to leave right now. I feel like it is a waste of my time. Can you tell me what you want to do? If you like the movie, why don’t you finish watching it? I will wait outside until it is over. I can go to a coffee shop and wait. If you want to leave now, let’s just go grab a bite somewhere. I am actually a bit hungry. Anyway, please tell me what you think. I’m fine with whatever you decide.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-movie",
      "summary:극장에서 친구와 영화를 보다 너무 지루해서 중간에 나오고 싶음."
    ]
  },
  {
    "id": "home-0354",
    "topic": "home",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are having a group of friends over to watch a movie. Ask your friends four to five questions about the kind of movie you should watch together.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-tv",
      "summary:친구들 집으로 초대함. 집에서 어떤 영화 보고 싶은 지 전화 질문"
    ]
  },
  {
    "id": "home-0355",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. When you try to play the movie, something is wrong and it does not play. Explain the problem to your guests and offer two or three different solutions or alternatives to the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-tv",
      "summary:집에서 영화 재생이 안 되어 친구들에게 상황 설명. 대안제시"
    ]
  },
  {
    "id": "movies-0356",
    "topic": "movies",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Have you ever gone to a movie or wanted to watch a special TV event, and then something happened that prevented you from watching it? Tell me about that experience, when it happened, where you were, and who you were with. Tell me all the details, especially what happened that prevented you from watching the movie or the TV event and how you dealt with the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-tv",
      "summary:본인이 과거 영화/TV를 보려고 했는데 차질을 빚은 경험 묘사"
    ]
  },
  {
    "id": "home-0357",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I think something is wrong with the TV. The movie is NOT playing. I have tried everything but nothing seems to be working. I am really sorry, guys. Can you tell me what you want to do? How about we do something else instead? I wonder if you like board games. I have several games you guys might like. Maybe we could just play one of those board games. I think it would be fun because we could play in teams. Anyway, please tell me what you think. I’m fine with whatever you decide.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-tv",
      "summary:집에서 영화 재생이 안 되어 친구들에게 상황 설명. 대안제시"
    ]
  },
  {
    "id": "furniture-0358",
    "topic": "furniture",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to buy a new piece of furniture for your home. Speak to the store clerk and describe what you want. Ask three or four questions about the furniture they have for sale.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-furniture-01",
      "summary:가구점 직원에게 사고 싶은 가구에 대해 현장 문의"
    ]
  },
  {
    "id": "furniture-0359",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem I need you to resolve. When you get your new furniture at your home, you realize that there is a serious problem. Call the store and explain the problem in detail. Then make some suggestions as to how you can resolve the problem as quickly as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-furniture-01",
      "summary:가구가 도착했는데 심각한 문제 있음. 전화로 문제해결"
    ]
  },
  {
    "id": "furniture-0360",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever bought furniture that wasn't what you had expected? Maybe you got the wrong color or maybe it didn't fit in the space you had for it. Tell me about a time when you had a problem with a new piece of furniture.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-furniture-01",
      "summary:구매한 가구에 문제가 있었던 본인 경험 설명"
    ]
  },
  {
    "id": "furniture-0361",
    "topic": "furniture",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to buy a new piece of furniture for your home. At the store, you see a piece that you like, but you have some questions about it. Pretend you are speaking to a salesperson and ask three or four questions to get all the information you need about the furniture you like.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-furniture-02",
      "summary:가구점 직원에게 사고 싶은 가구에 대해 현장 문의"
    ]
  },
  {
    "id": "furniture-0362",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem I need you to resolve. When you get the piece of furniture at home, you don’t like the way it looks. Call the store, explain why you are not satisfied, and propose some solutions to resolve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-furniture-02",
      "summary:가구가 도착했는데 외관이 마음에 안 듦. 전화로 문제해결"
    ]
  },
  {
    "id": "furniture-0363",
    "topic": "furniture",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Has anything like that ever happened to you? Have you ever bought something for your home or yourself that did not work out? Tell me everything that happened and how you eventually solved the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-furniture-02",
      "summary:집에 구매한 무엇인가 마음에 안 들었던 본인 경험 설명"
    ]
  },
  {
    "id": "recycling-0364",
    "topic": "recycling",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "Suppose you have moved into a new building and you want to know how recycling works. Ask the building manager three of four questions about the recycling policies.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-recycling-01",
      "summary:새로 입주한 건물에 재활용 방법 관리실에 전화문의"
    ]
  },
  {
    "id": "recycling-0365",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "Do you remember the first time you heard about recycling? Tell me how it happened, how old you were, where you were and who told you about the process. Describe in detail what happened from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-recycling-01",
      "summary:본인의 처음으로 재활용을 접해본 경험 묘사"
    ]
  },
  {
    "id": "recycling-0366",
    "topic": "recycling",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "Suppose you just moved to a big apartment building. Call the person at the front desk and ask three to four questions about the building's recycling policy.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-recycling-02",
      "summary:새로 입주한 아파트에 재활용 방법 관리실에 전화문의"
    ]
  },
  {
    "id": "recycling-0367",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "You often host large parties and take out most of the recycling and garbage the next day. However, other residents in your building are not happy about it, and one of them has come to complain to you. Explain the situation and offer some suggestions to resolve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-recycling-02",
      "summary:본인이 파티를 한 후 쓰레기 처리 관련하여"
    ]
  },
  {
    "id": "recycling-0368",
    "topic": "recycling",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "Describe a specific time in which you had trouble with recycling. It may have been a situation in which you moved to a new place and did not know the rules, or you put the materials in the wrong containers. Describe what happened from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-recycling-02",
      "summary:본인이 재활용 중 있었던 문제 설명"
    ]
  },
  {
    "id": "home-0369",
    "topic": "home",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Someone in your family is going on a vacation and you have agreed to take care of his or her responsibilities at home. Call your relative and ask three or four questions to get all the information you need.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-relative-s-house",
      "summary:휴가 가는 친척의 집을 봐주기 해서 전화로 질문"
    ]
  },
  {
    "id": "home-0370",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. When you arrive at your relative’s house, the door is locked and the key is not where it is supposed to be. Call your relative’s hotel and leave a message explaining the situation. Give two or three options to resolve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-relative-s-house",
      "summary:친척집에 도착했는데 문 잠겨 있고, 열쇠를 못 찾겠음."
    ]
  },
  {
    "id": "home-0371",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever been in a situation where you a greed to do something for friends or family members and then couldn’t do it? Give me all the details about what you agreed to do, what happened, and how the situation was resolved.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-relative-s-house",
      "summary:가족/친구를 위해 무엇을 해주기로 했다가 못 지켰던 경험 묘사"
    ]
  },
  {
    "id": "home-0372",
    "topic": "home",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’m calling to ask about watching your house. I want to ask about how I should take out the recycling. What are the things I should recycle? Should I recycle cans, plastics and paper? Next, can you tell me where I should take out the recycling? Is there a designated area for the recycling? Is it next to the dumpster for regular garbage? If not, can you give me some directions? Also, can you tell me when I should take out the recycling? Can I do that anytime I want? Or do I have to do that on certain days? Please give me a call when you get this. Thank you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-relative-s-house",
      "summary:휴가 가는 친척집 봐주기 해서 전화로 질문"
    ]
  },
  {
    "id": "home-0373",
    "topic": "home",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are looking for a new home. Call a real estate agent, introduce yourself, and then ask three or four questions about homes and services they offer.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-real-estate",
      "summary:부동산에 구하고 싶은 집에 대한 전화 문의"
    ]
  },
  {
    "id": "home-0374",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. When you get to your new home, you discover that a window is broken. Call the repair shop and leave a message. Describe in detail the condition of the window. Explain how you think the window got broken. Give two or three reasons why it is important that the window is fixed today.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-real-estate",
      "summary:입주했는데 창문 깨져 있음. 수리점에 수리 요청"
    ]
  },
  {
    "id": "home-0375",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever been surprised to discover something broken at home? Tell me the story of what you found, how it was broken and what you did to solve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-real-estate",
      "summary:무엇인가 깨져 있는 물건을 발견해본 본인 경험. 대처방법"
    ]
  },
  {
    "id": "music-0376",
    "topic": "music",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to get two tickets to see a performance during your vacation. Call the box office and ask three or four questions to get tickets.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-performance",
      "summary:공연장에 공연 티켓 구매 전화 문의"
    ]
  },
  {
    "id": "music-0377",
    "topic": "music",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. On the day of the performance, you are sick. Call your friend and explain the situation and offer two different options for resolving the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-performance",
      "summary:몸이 아파서 공연에 못 가게 되어 친구에게 상황 설명. 대안제시"
    ]
  },
  {
    "id": "music-0378",
    "topic": "music",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had plans or tickets, then found out that you could not attend the performance? When was this? What happened? Tell me everything about the situation and what you did to try to resolve it.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-performance",
      "summary:공연표를 예매했다가 공연에 가지 못한 본인 경험 설명"
    ]
  },
  {
    "id": "transportation-0379",
    "topic": "transportation",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You need to rent a car for about a week. Call the rental agency and ask three or four questions to get all the information you need.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-rental-car-01",
      "summary:렌터카 업체에 전화해서 차 렌트 전화 문의"
    ]
  },
  {
    "id": "transportation-0380",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You have received the rental car, but there are many problems with it. Call the rental agency and explain the situation. Give two to three alternatives.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-rental-car-01",
      "summary:렌터카에 문제가 있음. 렌터카 회사에 전화로 해결"
    ]
  },
  {
    "id": "transportation-0381",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Have you ever rented a car? Tell me about when you had to rent a car. When and where was it? Why did you need to rent a car? Where did you go? Tell me everything about that experience.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-rental-car-01",
      "summary:본인의 렌터카 이용 경험 묘사"
    ]
  },
  {
    "id": "transportation-0382",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You want to rent a specific kind of car, but you find out that NONE are available. Call the manager and describe the situation. Explain why you want that particular kind of car and offer several alternatives to solve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-rental-car-02",
      "summary:본인이 원하는 렌터카 차종이 없어서 전화해서 문제해결"
    ]
  },
  {
    "id": "transportation-0383",
    "topic": "transportation",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are visiting New York on vacation. You go to a car rental agency to rent a car. Imagine you are speaking to a rental car agent and ask three or four questions about renting a car for a week.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-rental-car-03",
      "summary:뉴욕 휴가 가서 렌터카 업체에서 현장 문의"
    ]
  },
  {
    "id": "transportation-0384",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. I am not sure if I can let you rent a car because I am not familiar with your non-US driver's license. Can you explain to me what the license says and why it is the same as a valid US license?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-rental-car-03",
      "summary:미국 운전면허증이 아닌 본인 면허증에 대해 설명"
    ]
  },
  {
    "id": "transportation-0385",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Can you now tell me the story of an experience that you had while you were on one of your vacations that was memorable because something unexpected happened or because it was so enjoyable? Start this story by telling me when this happened, where you were, and who you were traveling with. And then tell me all the details of the story.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-rental-car-03",
      "summary:본인 휴가 중에 있었던 기억에 남는 에피소드 설명"
    ]
  },
  {
    "id": "transportation-0386",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "Okay, let me tell you about my license. As you see, the title here says “driver’s license” in English. You can see my name and picture on it. This is my name, LEE HYUN SEOK. This is my picture on the license. The picture is a little old because I took it a long time ago, but it’s me. I got this license back in 2003. The date here shows that it is still valid. It expires in 2025, so it is still good. So, my driver’s license is the same as a US driver’s license. I hope you can accept it.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-rental-car",
      "summary:미국 운전면허증이 아닌 본인 면허증에 대해 설명"
    ]
  },
  {
    "id": "transportation-0387",
    "topic": "transportation",
    "level": "intermediate",
    "taskType": "problem",
    "prompt": "I'd like to give you a situation and ask you to ask you to act it out. You are driving your car through a small town and have car trouble. Go to the nearest service station and ask for help. Ask three or four questions in order to get the information you need to get your car fixed.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-car-problem",
      "summary:작은 동네 지나가다 차 고장. 서비스 센터에 가서 차량 수리 문의"
    ]
  },
  {
    "id": "transportation-0388",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I'm sorry, but there is a problem which I'll need you to resolve. Because of the car trouble, you will miss an important business meeting. Call your client and explain the situation and offer some alternative",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-car-problem",
      "summary:차 고장으로 고객 미팅 못 감. 고객에게 전화로 상황 설명. 대안제시"
    ]
  },
  {
    "id": "transportation-0389",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That's the end of the situation. Tell me about the last time you had trouble with your car. What was the problem and how did you resolve it? Give me lots of details.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-car-problem",
      "summary:본인 차량에 문제가 생겼던 경험/대처방법 설명"
    ]
  },
  {
    "id": "shopping-0390",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to borrow a bike from your friend to go to a shopping mall and buy something. Call your friend and ask three or four questions as to whether you can borrow the bike.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bicycle",
      "summary:쇼핑몰에 가기 위해 친구 자전거 빌리기 위해 전화 질문"
    ]
  },
  {
    "id": "shopping-0391",
    "topic": "shopping",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You parked the bike that you borrowed outside the shopping mall, but the bike was run over by a truck. Call your friend and explain the situation. Give two or three alternatives to your friend.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bicycle",
      "summary:자전거 쇼핑몰에 주차했는데 트럭에 치여 고장."
    ]
  },
  {
    "id": "transportation-0392",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Now, tell me about a time when you had a problem while using a bike or any other type of transportation. What happened and how did you deal with the problem?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bicycle",
      "summary:자전거나 다른 교통수단 관련 겪은 어려움 묘사 – 교통정체"
    ]
  },
  {
    "id": "shopping-0393",
    "topic": "shopping",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I'm calling to ask about your bike. I want to go to the shopping mall. I wonder if I could borrow your bike. If so, can you tell me when I can pick up your bike? Where is your bike parked? Is it at the bike stand in front of your apartment? Also, when do you need it back? Can I bring it back on Sunday? Would that be okay? If you need it before that, I can bring it back right away. Please give me a call when you get this. Thank you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bicycle",
      "summary:쇼핑몰에 가기 위해 친구 자전거 빌리기 위해 전화"
    ]
  },
  {
    "id": "transportation-0394",
    "topic": "transportation",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You need to buy a train ticket to go visit your friend this weekend. Go to the ticket counter at the train station and ask three or four questions to get information you need to make a reservation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-train",
      "summary:기차역 창구에 가서 기차표 구매 문의"
    ]
  },
  {
    "id": "transportation-0395",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. When you get to the train station, you miss your train and will be late to meet your friend. Call your friend, explain your situation and offer some alternatives.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-train",
      "summary:기차를 놓쳐서 친구 만날 약속 늦게 되어 설명. 대안제시"
    ]
  },
  {
    "id": "transportation-0396",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever traveled somewhere and missed a bus, a train or a plane? Tell me about an experience you have had when you had difficulty getting to your destination as planned. Start by telling me where you were going and why. Then, tell me everything that happened and what you had to do to finally get to your destination.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-train",
      "summary:본인이 여행 중 교통편을 놓쳐서 생긴 문제 설명"
    ]
  },
  {
    "id": "hotel-0397",
    "topic": "hotel",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are visiting a new city and need a hotel room for the night. Call a hotel and ask three or four questions to find out about its rooms and services.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:새로운 도시 방문. 당일 저녁 호텔 투숙 전화 문의"
    ]
  },
  {
    "id": "hotel-0398",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. When you get to your hotel room, it is very small and not clean at all. Call the front desk and describe what you have found in detail. Then make some suggestions as to how you can resolve the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:호텔 객실이 매우 작고 지저분함. 프론트에 전화로 문제해결"
    ]
  },
  {
    "id": "hotel-0399",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Sometimes, surprising or unexpected things can happen when you stay at a hotel. Tell me about a memorable experience you had while staying at a hotel. Maybe there was a problem with your room. Maybe you met some other guests. Tell me the whole story of an interesting hotel visit.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:호텔에서 기억에 남는 본인 에피소드 묘사 – 체한/취한 경험"
    ]
  },
  {
    "id": "hotel-0400",
    "topic": "hotel",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "You are planning a business trip outside of your country. Call the hotel you will stay at and ask three or four questions to learn more about the hotel and the country.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:해외출장 중에 머무를 호텔에 전화해서 호텔에 대해 문의"
    ]
  },
  {
    "id": "hotel-0401",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "You are supposed to travel outside of your country on a business trip with your boss. But due to a sudden problem, you are unable to go. Call your boss and explain the situation in detail. And then, offer two or three possible solutions, so your company would not lose this business opportunity.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:직장 상사와 해외출장을 가기로 되어 있는데 못 가게 됨."
    ]
  },
  {
    "id": "hotel-0402",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had a problem regarding traveling outside of your country for work or pleasure? Explain all the details about the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:해외출장/여행 중에 본인이 겪어본 문제 설명"
    ]
  },
  {
    "id": "hotel-0403",
    "topic": "hotel",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You have arrived in a new city and you’re trying to find a hotel for tonight. Go to the reception desk of a hotel. Describe the room you want and ask three or four questions to get information about what is available.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:새로운 도시에 도착. 호텔 프론트에 가서 투숙 문의"
    ]
  },
  {
    "id": "hotel-0404",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You’ve learned that there are no rooms available in this hotel. Call your travel companions to let them know about the situation. Leave a message to describe the situation and propose alternative solutions to the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:여행 일행들에게 호텔 만실 알리기. 대안제시"
    ]
  },
  {
    "id": "hotel-0405",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Think about a time when your travel plans did not work out as expected. What happened? Tell me all about the circumstances, what you and the others did, and how the situation was finally resolved.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:본인의 여행 계획이 뜻대로 되지 않은 경험 묘사"
    ]
  },
  {
    "id": "weather-0406",
    "topic": "weather",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are planning a vacation abroad. Call your hotel and ask three or four questions about the weather in that country and what kinds of clothes you should bring with you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel-weather",
      "summary:(챙겨갈 옷을 위해) 호텔에 전화해서 현지 날씨 문의"
    ]
  },
  {
    "id": "weather-0407",
    "topic": "weather",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I'm sorry but there is a problem which I'll need you to resolve. When you arrive on your vacation, you realize that you have brought the wrong clothes for the weather. Call a clothing store and explain what happened in detail. And then, make some arrangements to purchase some new clothes as soon as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel-weather",
      "summary:(가져온 옷이 날씨에 안 맞아서) 현지 옷가게에 옷 구매 관련 문의"
    ]
  },
  {
    "id": "weather-0408",
    "topic": "weather",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Was there ever a time when the weather was really not what you had expected? Maybe it snowed in the spring, maybe it was especially warm in the winter, or maybe the rainy season was dry or the dry season was rainy. Tell me in detail about a time when the weather was not what people had expected.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel-weather",
      "summary:예상치 못한 날씨를 경험한 본인 경험 묘사 – 여름"
    ]
  },
  {
    "id": "weather-0409",
    "topic": "weather",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "We still have four distinct seasons in Korea. However, summer has been getting hotter and hotter every year. It is a lot hotter compared to when I was a kid. I remember having a hard time 2 years ago in summer because it was unbearably hot. It was much hotter than we had expected. The daytime highs reached 40 degrees Celsius in some areas. It was also very hot at night because it did NOT cool off. In fact, it was the hottest summer in Korean history. Last year, many countries in Europe and Australia had record-breaking summer weather as well. This year, summer was sweltering hot in Korea once again. Everyone seemed to be carrying around portable fans to beat the heat. Once again, I think summer seems to be getting hotter and hotter every year.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel-weather",
      "summary:예상치 못한 날씨를 경험한 본인 경험 묘사 – 여름 + 장마"
    ]
  },
  {
    "id": "hotel-0410",
    "topic": "hotel",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are staying in a hotel and have a free day to explore the city. Go to the hotel front desk and ask three or four questions to find out all you can about what to do in the area.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:호텔 프론트에 가서 자유시간에 할 수 있는 활동 문의"
    ]
  },
  {
    "id": "hotel-0411",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You have left your bag in the taxi that brought you back to the hotel. Call the taxi company and explain what happened, describe your bag, and tell them how to get the bag back to you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:택시에 가방을 두고 내림. 택시회사에 전화/도움 요청"
    ]
  },
  {
    "id": "hotel-0412",
    "topic": "hotel",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Has anything like that ever happened to you? Have you ever forgotten something somewhere or could not find something important? Tell me in detail about an experience you had when you’ve lost or forgotten something important.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-hotel",
      "summary:본인이 무엇인가를 분실하거나 잊어버린 경험 묘사"
    ]
  },
  {
    "id": "bank-0413",
    "topic": "bank",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to open a bank account. Call the bank and ask three to four questions about the services they offer to open an account.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bank-01",
      "summary:은행에 전화해서 계좌 개설 관련 문의"
    ]
  },
  {
    "id": "bank-0414",
    "topic": "bank",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You just got your bank card, but there is problem and you can't use it. Call the bank, explain the situation, and offer some suggestions to get a new card.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bank-01",
      "summary:카드 받았는데 문제가 있음. 전화해서 해결"
    ]
  },
  {
    "id": "bank-0415",
    "topic": "bank",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had any problems with your bank card when you were using an ATM? Perhaps, your card stuck in the machine. Or you found someone else's money or card. Describe the problem you had in detail.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bank-01",
      "summary:본인이 카드로 ATM 사용 중 문제가 생겼던 경험"
    ]
  },
  {
    "id": "bank-0416",
    "topic": "bank",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You need to open a new bank account. Go to the bank and ask the bank representative three or four questions to learn everything about what you need to do to open an account.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bank-02",
      "summary:은행 지점 현장에 가서 직원에게 은행 계좌 개설 문의"
    ]
  },
  {
    "id": "restaurant-0417",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You have left your new bank card at the restaurant where you had dinner. Call the restaurant and explain what happened. Describe the card and tell them how to get the card back to you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bank-02",
      "summary:은행 카드를 음식점에 두고 와서 전화로 도움 요청"
    ]
  },
  {
    "id": "bank-0418",
    "topic": "bank",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Can you remember an experience you had with a bank account, a credit card, or an ATM card that required some assistance? Perhaps, you lost your card or a card would not work. Tell me about that experience you had in as much detail as you can.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-bank-02",
      "summary:은행 계좌나 신용카드 사용 중 겪은 본인 문제 설명"
    ]
  },
  {
    "id": "health-0419",
    "topic": "health",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You need to make an appointment with your doctor. Call the office and describe what you need. Then, ask three or four questions to find out when the doctor is available.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-doctor-appointment",
      "summary:병원 진료 예약 전화 문의"
    ]
  },
  {
    "id": "health-0420",
    "topic": "health",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. On the day of your appointment, you realize that you will not be able to make it. Call the doctor’s office and explain your situation in detail. Then, offer some suggestions as to when you can reschedule the appointment.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-doctor-appointment",
      "summary:사정이 생겨서 병원 진료 예약 전화로 변경"
    ]
  },
  {
    "id": "health-0421",
    "topic": "health",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Have you ever had an important appointment that you had to miss for some reason or perhaps you were late? Tell me in detail about an experience you had when you had trouble getting into an important appointment.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-doctor-appointment",
      "summary:중요한 예약 불참 혹은 늦은 본인 경험 묘사"
    ]
  },
  {
    "id": "reservation-0422",
    "topic": "reservation",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Imagine that you have an interview for a job at a very important company. To prepare for the interview, you want to learn more about the company. Call the company and ask three or four questions to learn more about it.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-company-interview",
      "summary:면접 보러 가야 하는 회사에 대해 전화로 질문"
    ]
  },
  {
    "id": "reservation-0423",
    "topic": "reservation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. Due to an emergency, you will not be able to attend your job interview. Call the company and leave a message explaining the situation. Then, offer two or three alternate plans so that you do not lose this opportunity.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-company-interview",
      "summary:면접 못 가는 긴급 상황 설명. 전화로 대안제시"
    ]
  },
  {
    "id": "reservation-0424",
    "topic": "reservation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had to miss a class, a meeting or an interview at school or for work? Tell me the story of that experience. What happened? When did it happen and how did you resolve it? Give me lots of details.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-company-interview",
      "summary:수업, 미팅, 면접 못 가게 된 본인 경험 묘사"
    ]
  },
  {
    "id": "gathering-0425",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You have been invited to a holiday party. Call your friend and ask when the party starts and what you should bring there. Ask two or three more questions about the party.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-holiday-party-01",
      "summary:친구에게 휴일파티에 대해 전화 질문"
    ]
  },
  {
    "id": "gathering-0426",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You just had a car accident and you think you are going to be late for the holiday party. Call your friend, explain the situation, and give two to three alternatives regarding the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-holiday-party-01",
      "summary:차 사고가 나서 파티에 늦게 될 상황 설명. 대안제시"
    ]
  },
  {
    "id": "gathering-0427",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Have you ever made plans for trip or a party but had to cancel at the last minute because of something that happened unexpectedly? Tell me everything about what had happened that prevented you from going.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-holiday-party-01",
      "summary:막판에 파티나 여행 취소한 본인 경험 묘사"
    ]
  },
  {
    "id": "gathering-0428",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I'd like to give you a situation and ask you to act it out. Your friend is thinking about having a holiday party and has asked for your help to plan the event. Call your friend and ask three or four questions to find out more about the party.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-holiday-party-02",
      "summary:친구 휴일파티 준비 도와 주기 위해 전화로 질문"
    ]
  },
  {
    "id": "gathering-0429",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. After you agreed to help plan the party with your friend, you realize that you will be very busy the week before the party. Since you have less time to help your friend, call him, explain the situation and offer two or three suggestions on how to plan the party in less time.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-holiday-party-02",
      "summary:친구 파티 도와줄 시간이 많지 않음. 전화로 대안제시"
    ]
  },
  {
    "id": "gathering-0430",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That's the end of the situation. Tell me about a time when you really wanted to go to a party or a celebration, but for some reason you could not go. What happened? Tell me the whole story from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-holiday-party-02",
      "summary:파티나 행사에 불참하게 된 본인 경험 묘사"
    ]
  },
  {
    "id": "gathering-0431",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Your friend asked you to help prepare for a birthday party. Call your friend and ask three to four questions to find out more about the party.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-birthday-party",
      "summary:친구 생일파티 준비를 도와 주기 위해 전화로 질문"
    ]
  },
  {
    "id": "gathering-0432",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You are supposed to help your friend prepare for the party. However, you have a problem and cannot go to the party. Call your friend, explain the situation, and give two to three alternatives regarding the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-birthday-party",
      "summary:친구 생일파티 못 감. 준비 못 도와 줌. 대안제시"
    ]
  },
  {
    "id": "gathering-0433",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. An old friend called to ask you to come to a party. Call your friend and ask three to four questions to find out everything you need to know.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-party",
      "summary:친구가 초대한 파티에 대해 전화로 질문"
    ]
  },
  {
    "id": "gathering-0434",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You already have plans for the evening of the party. Call your friend, explain the situation, and offer two or three alternatives regarding the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-party",
      "summary:겹치는 선약이 있어서 파티에 못 가게 되어 친구한테 설명"
    ]
  },
  {
    "id": "gathering-0435",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Can you tell me about a memorable visit you made to your family or friends? Pick one of those special visits and tell me all about it. Start with some background about where and when it took place. And then, tell me the whole story of what happened during the visit.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-party",
      "summary:친구나 가족을 방문해 본 기억에 남는 본인 경험 묘사 – 취한경험"
    ]
  },
  {
    "id": "home-0436",
    "topic": "home",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I'd like to give you a situation and ask you to act it out. Your friend has invited you to a holiday meal. Call your friend and ask three or four questions to find out when you should come, what you should bring and any other information about the event.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-holiday-meal",
      "summary:친구 집 휴일 식사에 초대 받음. 식사에 대해 전화 질문"
    ]
  },
  {
    "id": "home-0437",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. On your way to your friend's house, your car breaks down You realize you will be very late. Call your friend and explain what happened in detail. Then, make some suggestions and tell them how and when you will get to the holiday meal.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-holiday-meal",
      "summary:친구집에 가는 길에 차 고장. 매우 늦을 거 같음. 대안제시"
    ]
  },
  {
    "id": "transportation-0438",
    "topic": "transportation",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That's the end of the situation. Have you ever had a holiday plan that did not go as you expected? Maybe you had trouble when you traveled. Maybe there was unusual weather that complicated your holiday plan. Tell me about the holiday that did not go the way you planned. Tell me everything that happen and what you did to deal with the situation.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-holiday-meal",
      "summary:휴일에 잡아 놓은 계획에 차질을 빚은 본인 경험 설명 – 교통정체"
    ]
  },
  {
    "id": "gathering-0439",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "A friend of yours invites you to attend a celebration in the area which she lives. Ask your friend three or four questions to learn more about this celebration.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-celebration",
      "summary:친구에게 기념 모임 자리에 대해 질문"
    ]
  },
  {
    "id": "home-0440",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "On the day of the celebration, a water pipe breaks in your home and you have to stay there until it is repaired. Call your friend, explain what has happened, and propose some alternative plans to see your friend at another time.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-celebration",
      "summary:집 수도관 파열로 참석 불가. 전화로 상황 설명. 대안제시"
    ]
  },
  {
    "id": "gathering-0441",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "Has anything interesting or unusual ever happened in the area which you live? Tell me in detail about the memorable event that has happened in your area. Be sure to tell me what happened from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-celebration",
      "summary:본인 동네에 발생했던 기억에 남는 사건 묘사"
    ]
  },
  {
    "id": "gathering-0442",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to get together your friend. Call your friend and ask two to three questions about where and when to meet.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-gathering-x-free-time-x",
      "summary:친구 만나기로 한 약속 언제 어디서 만날 지 전화로 질문"
    ]
  },
  {
    "id": "gathering-0443",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You are unable to meet your friend at the time and place that was agreed upon. Call your friend and give three or four alternatives to address the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-gathering-x-free-time-x",
      "summary:친구를 만나기로 한 시간/장소에서 못 만나게 됨. 전화로 대안제시"
    ]
  },
  {
    "id": "gathering-0444",
    "topic": "gathering",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Was there a time when you had some free time and had some plans? But maybe the weather got bad. Or maybe you had work or chores that had to be taken care of. How did you deal with the situation that did not turn out as you had expected?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-gathering-x-free-time-x",
      "summary:자유시간에 뭔가 계획했던 것이 뜻대로 되지 않은 경험"
    ]
  },
  {
    "id": "gathering-0445",
    "topic": "gathering",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’m calling to ask about your plans over the weekend. I wonder if you want to hang out. If so, when is a good time for you? I’m free on Saturday. Are you available that day? If not, I can make some time on Sunday. Next, can you tell me what you want to do? Why don't we go on a picnic? Maybe we could get some food to go? Maybe we could get some sandwiches or sushi. Or we could go grab some drinks together. Please give me a call when you get this. Thank you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-gathering-x-free-time-x",
      "summary:친구 만나기로 한 약속 언제 어디서 만날 지 전화로 질문"
    ]
  },
  {
    "id": "home-0446",
    "topic": "home",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Your friend wants to invite you for a visit this weekend. Call your friend and ask three or four questions about the plans.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-gathering-x-friends-family-x",
      "summary:친구 집으로 이번 주말에 초대받음. 계획에 대해 전화로 질문"
    ]
  },
  {
    "id": "home-0447",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. On the day you are supposed to visit your friend, you wake up with a terrible toothache. Call your friend and explain the problem in detail. Then make some arrangements to reschedule your visit to another day.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-gathering-x-friends-family-x",
      "summary:약속 당일 심한 치통으로 친구집에 못 가게 되어 설명. 대안제시"
    ]
  },
  {
    "id": "home-0448",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had a time when you were supposed to visit family or friends, but you were not able to go? Maybe something came up at work, school or home. Maybe you had some kind of problem with transportation. Tell me about a visit that you had to cancel for some reason. Tell me everything that happened.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-gathering-x-friends-family-x",
      "summary:가족/친구 집을 방문하려 했던 계획을 취소해야 했던 경험"
    ]
  },
  {
    "id": "home-0449",
    "topic": "home",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’m calling to ask about your plans for the weekend. First, thank you for inviting me to you place. I want to ask when I should visit. When is a good time for you? I’m free on Saturday evening. Are you available at that time? If not, I can make some time on Sunday afternoon instead. Next, can you tell me what you want me to bring? Should I bring some dessert? I could drop by a store on my way to your place. Should I bring a bottle of wine? If so, what kind of wine do you like? Do you like white or red? Please give me a call when you get this. Thank you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-gathering-x-friends-family-x",
      "summary:친구 집으로 이번 주말에 초대받음. 계획에 대해 전화로 질문"
    ]
  },
  {
    "id": "health-0450",
    "topic": "health",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You hear about a new gym in your area and you want to find out what services they offer. Call the gym and ask three or four questions to learn more about it.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-health-gym-01",
      "summary:최근 새로 오픈한 동네 헬스클럽 전화 문의"
    ]
  },
  {
    "id": "health-0451",
    "topic": "health",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You arranged to meet trainers and nutritionists at the gym, but on the morning that you were supposed to meet them, you wake up and feel ill. Call the gym, explain the situation and offer two to three possible alternatives.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-health-gym-01",
      "summary:몸이 아파서 헬스클럽 예약 전화로 불참통보. 대안제시"
    ]
  },
  {
    "id": "health-0452",
    "topic": "health",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Describe a specific time when you did something to improve your health. It could be the first day that you began a diet, a training program at the gym or a new sport. Describe what happened in detail from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-health-gym-01",
      "summary:본인 건강 개선을 위해 본인이 해본 일 묘사"
    ]
  },
  {
    "id": "health-0453",
    "topic": "health",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You want to join a new gym. Call the gym and ask three or four questions to find out more about what they have to offer.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-health-gym-02",
      "summary:새로운 헬스클럽에 시설 관련 전화 문의"
    ]
  },
  {
    "id": "health-0454",
    "topic": "health",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. When you visit the gym for the first time, it is not at all what you expected. Call the gym manager and describe your experience in detail. And then, make an arrangement to get a full refund for your money.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-health-gym-02",
      "summary:헬스클럽 첫 방문 후에 마음에 들지 않아서 전화로 환불 요청"
    ]
  },
  {
    "id": "health-0455",
    "topic": "health",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Maintaining one's health can be a challenge. Tell me in detail about a particular challenge you faced related to your health. Tell me everything you did to face that challenge. Maybe you tried a difficult diet or maybe you tried to stop smoking. Tell me everything that you did.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-health-gym-02",
      "summary:본인의 건강 증진을 위해 했던 도전 과제 설명"
    ]
  },
  {
    "id": "food-0456",
    "topic": "food",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "There is a new health food store in your town. Call the store and ask three or four questions to learn more about the store.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-health-food",
      "summary:새로 개업한 건강식품 파는 상점에 전화 문의"
    ]
  },
  {
    "id": "food-0457",
    "topic": "food",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "After purchasing a food item at the store, you have discovered that something is wrong with the item. Call the store and explain the problem in detail and propose a solution.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-health-food",
      "summary:구매한 건강식품에 문제 있어서 전화로 문제해결"
    ]
  },
  {
    "id": "food-0458",
    "topic": "food",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "We sometimes have interesting experiences when we have meals with family, friends or co-workers. Tell me about a memorable meal you had. Who were you with and where did you have the meal? What kind of food did you have?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-health-food",
      "summary:기억에 남는 본인의 식사 자리 경험 묘사"
    ]
  },
  {
    "id": "food-0459",
    "topic": "food",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "You read about a professional nutritionist that helps people improve their diet. Call the nutritionist’s office and ask three or four questions to get more information.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-nutritionist",
      "summary:영양사에게 식습관 개선 프로그램에 대해 전화로 질문"
    ]
  },
  {
    "id": "reservation-0460",
    "topic": "reservation",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "You have an appointment to meet with a nutritionist who can help you make your diet healthier. However, on the day of the meeting, your boss asks you to work late. Call the nutritionist, explain the situation, and offer some alternatives.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-nutritionist",
      "summary:야근해야 해서 영양사와 예약 전화로 변경 요청. 대안제시"
    ]
  },
  {
    "id": "food-0461",
    "topic": "food",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "Describe a time when you made a significant change to your diet or exercise routine. What led to this change? How did it work out? Describe what happened in detail from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-nutritionist",
      "summary:본인의 과거 식습관이나 운동에 큰 변화를 준 경험 설명"
    ]
  },
  {
    "id": "food-0462",
    "topic": "food",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "Eating healthy was one of the most significant changes I made in my life. I tried to eat healthy and change my eating habits. For starters, I tried to eat vegetables and fruits as often as I could. They contain a lot of vitamins, minerals and fiber. My favorite vegetables are tomatoes and potatoes. I also like to have cabbages and onions. I also like cucumbers and carrots because they are very crunchy. My favorite fruits are apples and bananas. I also like strawberries, watermelons and oranges. I also like to have pears, peaches and grapes when they are in season. Next, I tried to eat fish, pork, beef and chicken breasts as much as I could. I tried to eat beans and tofu whenever I had the chance. They are rich in healthy protein. Also, I tried to eat organic food whenever I could. They are NOT grown with chemicals, so they are much healthier. In the end, eating properly helped me stay healthy and lose some weight.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-nutritionist",
      "summary:본인의 과거 식습관이나 운동에 변화를 준 경험"
    ]
  },
  {
    "id": "restaurant-0463",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Your friend has a family member who has just opened up a restaurant. Ask three or four questions to learn more about this new restaurant to decide whether you want to order food from it.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-01",
      "summary:친구의 가족분이 새로 오픈 한 음식점에 대해 친구한테 질문"
    ]
  },
  {
    "id": "restaurant-0464",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You ordered food to be delivered to your workplace for a lunch meeting. When you opened the package, you realize that the delivery person has brought you someone else’s order. Call the restaurant, talk to the manager and offer two or three solutions to the problem, so that you can get the correct order as soon as possible.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-01",
      "summary:잘못 배달된 점심 도시락 음식점에 전화해서 문제 해결"
    ]
  },
  {
    "id": "restaurant-0465",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Tell me about a time when you went out for a special meal with your family, friends or co-workers. What was the occasion? Where did you go and what happened during the meal? Tell me what happened from beginning to end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-01",
      "summary:최근 음식점에서 했던 특별했던 식사자리 묘사"
    ]
  },
  {
    "id": "restaurant-0466",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’m calling to ask about your dad’s new restaurant. I want to order in some food from there. I do NOT feel like going out for lunch today. I want to order delivery. I want to order from your dad’s new restaurant. I am on a diet, so I want to get something that is NOT too heavy. Can you recommend something for me? I think I need to get some help. What kinds of menus are available? Can you tell me how much they are? I wonder if there are any discounts or promotions going on. I want to get a good deal. Please give me a call when you get this. Thank you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant",
      "summary:친구의 가족분이 새로 오픈 한 음식점에 대해 친구한테 질문"
    ]
  },
  {
    "id": "restaurant-0467",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. A friend has invited you for dinner tomorrow night at a restaurant that you've never been to. Call your friend and leave a voice mail message asking three or four questions about the restaurant.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-02",
      "summary:내일 함께 저녁 식사할 음식점에 대해 친구에게 전화 질문"
    ]
  },
  {
    "id": "restaurant-0468",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. On your way to the restaurant, you were delayed by an accident on the road. Call your friend’s cell phone and leave a voice mail. Explain the situation and offer two or three alternatives.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-02",
      "summary:저녁 식사자리 가는 길에 사고로 도로 정체. 친구에서 상황설명. 대안제시"
    ]
  },
  {
    "id": "restaurant-0469",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had anything memorable happen to you when you were going to a restaurant? Maybe someone was late or got lost or something interesting happened during the meal. Explain your experience in detail. What was the situation and what happened from start to finish?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-02",
      "summary:음식점 관련해서 예기치 않았던 본인 에피소드 묘사"
    ]
  },
  {
    "id": "restaurant-0470",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You would like to go to a new restaurant that has opened recently. Call the restaurant and ask three or four questions to see if you want to go to that restaurant.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-03",
      "summary:새로 개업한 음식점에 전화해서 음식점에 대해 문의"
    ]
  },
  {
    "id": "home-0471",
    "topic": "home",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. You just had a great meal at the new restaurant, but after your meal, you found out that you left your money and wallet at home. Explain your situation to the staff and make suggestions to solve the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-03",
      "summary:현금과 지갑을 집에 두고 와서 직원에게 외상 요청"
    ]
  },
  {
    "id": "restaurant-0472",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Tell me about a memorable experience you had at a restaurant. Maybe you did not like the food you ordered. Maybe there was some issue with other customers. Tell me everything about the incident you encountered.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-03",
      "summary:음식점에서 있었던 예기치 않았던 본인 에피소드 묘사"
    ]
  },
  {
    "id": "restaurant-0473",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "problem",
    "prompt": "I’d like to give you a situation and ask you to act it out. You are trying to find a brand new store that just opened but you are lost. You see a restaurant that is open. Go into the restaurant and ask three or four questions to find out how to get to the store.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-directions",
      "summary:어떤 상점 찾고 있는데, 못 찾겠음. 근처 음식점에 가서 길안내 요청"
    ]
  },
  {
    "id": "restaurant-0474",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem I need you to resolve. When you get to the store, you realize that you left your wallet at the restaurant. Call the restaurant, explain what happened, and suggest an arrangement for the wallet to be returned to you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-directions",
      "summary:상점에 도착하고 보니, 아까 그 음식점에 지갑을 두고 옴. 전화 도움 요청"
    ]
  },
  {
    "id": "restaurant-0475",
    "topic": "restaurant",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Has anything like that ever happened to you? Have you ever forgotten something somewhere or could not find something important? Tell me in detail about the experience you’ve had when you’ve lost or forgotten something important.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-directions",
      "summary:본인이 물건을 분실했거나, 무엇인가 까먹었던 경험 묘사"
    ]
  },
  {
    "id": "restaurant-0476",
    "topic": "restaurant",
    "level": "intermediate",
    "taskType": "problem",
    "prompt": "Excuse me, can I ask for some help? I seem to be lost. I am looking for a store that opened recently. The name of the store is Jamba Juice. I cannot seem to find the store. I tried to find it on the map on my phone. It says it is nearby, but I cannot find it. Can you give me some directions? Please point me in the right direction. Which is the fastest way to the store? Is there a shortcut by any chance?",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-restaurant-directions",
      "summary:어떤 상점 찾고 있는데, 못 찾겠음. 근처 음식점에 가서 길안내 요청"
    ]
  },
  {
    "id": "internet-0477",
    "topic": "internet",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’m calling to ask about the cool website you found. I want to go check it out myself. Can you tell me what kind of site it is? I wonder if it is a social networking site. If so, can you “friend” or follow” people? Can you post up pictures or video clips? Can you write messages or leave comments? Can you also press the LIKE button on other people’s postings? Plus, how long have you used that website? How often do you use it and what is the best thing about it? I am very eager to check out that website. Please give me a call when you get this. Thank you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-internet",
      "summary:친구가 찾은 웹사이트에 대해 친구에게 전화로 질문"
    ]
  },
  {
    "id": "internet-0478",
    "topic": "internet",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I'm afraid there is a problem with the website. I tried to log on to the site, but it is NOT available. Nothing shows up on the screen. Perhaps, you gave me the wrong link. I wonder if you could help me out. Maybe we could meet up to talk about it. When is a good time for you? I’m free on Monday. Are you available that day? If not, I can make some time on Thursday or Friday. Anyway, please tell me what you think. I’m fine with whatever you decide. I'll be waiting for your call. Bye.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-internet",
      "summary:그 사이트가 접속이 안 되어 친구에게 전화로 도움 요청"
    ]
  },
  {
    "id": "phone-0479",
    "topic": "phone",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You would like to buy a new mobile phone. Call a store and tell them what you need. And then, ask three or four questions to find out about the phones they offer.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone-01",
      "summary:전화기 대리점에 신규 휴대전화 구매 문의"
    ]
  },
  {
    "id": "phone-0480",
    "topic": "phone",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. When you get the new phone, you realized that it does not have all the features you need. Call the store, explain what is missing, and make arrangements to get a phone that has what you need.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone-01",
      "summary:구매한 전화기 기능이 마음에 들지 않음. 교환 요청"
    ]
  },
  {
    "id": "phone-0481",
    "topic": "phone",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever bought a piece of technology which was not what you had wanted or different from what you had expected? What was the problem and how did you solve the situation? Tell me in detail about the beginning of the story until the end.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone-01",
      "summary:새로운 제품/기술이 마음에 들지 않았던 경험 묘사"
    ]
  },
  {
    "id": "phone-0482",
    "topic": "phone",
    "level": "advanced",
    "taskType": "roleplay",
    "prompt": "That’s the end of the situation. Have you ever had to set up a new phone? Tell me about a specific time when you had to do that. What happened during the process? Perhaps, you had to download information or contact numbers from the old phone. Perhaps, you had to download applications or music. Tell me exactly what happened when you had to set up the new phone.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone-01",
      "summary:새로 개통한 전화기를 세팅해본 경험 설명"
    ]
  },
  {
    "id": "overseasTravel-0483",
    "topic": "overseasTravel",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. You and your friend are going to be travelling internationally and you want to take your phone with you. Call your phone service provider, explain the situation, and ask two or three questions to learn about what you may need to do to use your phone overseas, what the charges may be, and other relevant information.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone",
      "summary:해외여행 전에 통신사에 전화로 해외 로밍 문의"
    ]
  },
  {
    "id": "phone-0484",
    "topic": "phone",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. Before you leave on a trip overseas with the friend, you learn that your phone service plan is set up for international calls, but your friend’s phone is not. Talk to your friend and offer two or three solutions to resolve this problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone",
      "summary:친구 전화기 국제통화 불가능. 친구한테 해결책 제안"
    ]
  },
  {
    "id": "phone-0485",
    "topic": "phone",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. People sometimes have difficulties with their phones when they are travelling, commuting, or going from one place to another. Sometimes, their batteries run out. Sometimes, they cannot get a good signal when they make a phone call. Tell me about a time when you had difficulties using your phone while travelling or commuting.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone",
      "summary:여행이나 출퇴근 중 본인 전화기 사용 중 겪었던 문제점 설명 – 배터리"
    ]
  },
  {
    "id": "phone-0486",
    "topic": "phone",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I’d like to give you a situation and ask you to act it out. Your friend has gotten a new version of the phone that you currently have. You are curious about the new version. Ask your friend two to three questions about the phone and its different features.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone",
      "summary:친구가 본인이 쓰는 휴대폰 기종 신규 모델 구입 함. 친구에게 질문"
    ]
  },
  {
    "id": "phone-0487",
    "topic": "phone",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "I’m sorry, but there is a problem which I'll need you to resolve. Your friend tries to send a document to your smartphone. You attempt to open the document, but you cannot read it. Contact your friend, explain the situation, and offer two or three possible solutions to the problem.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone",
      "summary:친구가 휴대폰으로 보낸 파일에 문제가 있음. 상황 설명. 대안제시"
    ]
  },
  {
    "id": "phone-0488",
    "topic": "phone",
    "level": "advanced",
    "taskType": "problem",
    "prompt": "That’s the end of the situation. Have you ever had an issue or a problem with your cell phone? Tell me about one of those experiences and what the situation was. How did you get it resolved? Tell me all the details about what happened and what made this situation unforgettable.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-phone",
      "summary:본인 전화기 사용 중 겪었던 문제점 설명 – 배터리"
    ]
  },
  {
    "id": "industry-0489",
    "topic": "industry",
    "level": "intermediate",
    "taskType": "roleplay",
    "prompt": "I am calling to ask for some help. I am writing a report on the technology industry. I know that you know a lot about the industry. I wonder if I could ask you some questions. First, can you tell me how the technology industry is doing these days? Are tech companies doing better or worse compared to the past? Next, are there any innovations in the tech world? Are they related to artificial intelligence, blockchain technology 5G networks, virtual reality or voice recognition? Maybe we could meet up to talk about it. Please give me a call when you get this. Thank you.",
    "timeLimitSec": 150,
    "tags": [
      "pdf",
      "source:roleplay",
      "set:role-play-technology-industry-report",
      "summary:기술산업 관련 보고서를 쓰기 위해 많이 아는 친구에게 전화 질문"
    ]
  }
];
