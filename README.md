# OPIc Mock Lab

OPIc speaking practice simulator for study sessions. It follows the public OPIc-style flow of background survey, self-assessment, warm-up, and timed interview prompts without copying any official proprietary test UI or branding.

## Features

- Background survey topic selection
- Self-assessment driven question selection
- 15-question mock interview from a local question bank
- Browser TTS prompt playback
- Microphone recording with per-question countdown
- Session review with audio playback
- JSON export for the session log

## Development

```bash
npm install
npm run build:questions
npm run dev
```

## Question DB

`db.pdf` is intentionally ignored by git. Put the source PDF at the repository root and run:

```bash
npm run build:questions
```

The generated question DB is written to `src/data/pdfQuestionBank.ts`, and the app reads it through `src/data/questionBank.ts`.

Each generated prompt uses this shape:

```ts
{
  id: 'domesticTravel-004',
  topic: 'domesticTravel',
  level: 'intermediate',
  taskType: 'experience',
  prompt: 'Tell me about a trip you took recently...',
  timeLimitSec: 120,
  tags: ['travel', 'past']
}
```

The exam generator always starts with self-introduction, then builds topic sets, a role-play set, and final higher-difficulty questions according to the selected level.
