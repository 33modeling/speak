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
npm run dev
```

## Question DB

The dummy DB is in `src/data/questionBank.ts`.

When a PDF question file is provided, convert each prompt into this shape:

```ts
{
  id: 'travel-004',
  topic: 'travel',
  level: 'intermediate',
  taskType: 'experience',
  prompt: 'Tell me about a trip you took recently...',
  timeLimitSec: 120,
  tags: ['travel', 'past']
}
```

The app reads from this local module, so replacing or extending the DB does not require changing the exam UI.
