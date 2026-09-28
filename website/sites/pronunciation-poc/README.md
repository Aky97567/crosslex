# Word Pronunciation POC

A small proof of concept: pick a German word from Crosslex's real word
dataset, and hear it pronounced via the ElevenLabs Text-to-Speech API.

## What this demonstrates

- Integrating the [ElevenLabs TTS API](https://elevenlabs.io/docs/api-reference/text-to-speech)
  (`eleven_multilingual_v2` model) to pronounce arbitrary German text.
- **The API key never reaches the browser.** A Vite dev-server middleware
  (`server/elevenLabsProxy.ts`) holds the key server-side and exposes a
  same-origin `POST /api/tts` endpoint; the client only ever calls that,
  never `api.elevenlabs.io` directly. Open the browser's network tab —
  there's no key anywhere in a client-visible request.
- Reusing real production code from the monorepo: the actual `WordIntro`
  UI component (`@whitelotus/front-entities`) and the actual 400+ word
  Crosslex dataset (`@whitelotus/mock-test`), not mocked/fake data.
- A simple client-side cache (`src/ttsClient.ts`) so re-clicking the same
  word doesn't re-spend API quota.

## Running it

From the monorepo root (`website/`):

```bash
yarn install                                    # once, at the repo root
cd sites/pronunciation-poc
cp .env.example .env.local                      # then add your ELEVENLABS_API_KEY
yarn dev
```

Open the printed local URL, pick a word from the dropdown, and press the
pronounce button.

Get an API key at <https://elevenlabs.io/app/settings/api-keys> (free tier
works fine for this demo).

## Architecture

```
sites/pronunciation-poc/
├── server/elevenLabsProxy.ts   ← Vite plugin: POST /api/tts middleware (server-only, holds the key)
├── src/
│   ├── App.tsx                 ← dropdown + WordIntro display + pronounce button
│   ├── ttsClient.ts             ← client fetch wrapper + per-word audio cache
│   └── main.tsx
├── .env.example                 ← copy to .env.local (gitignored)
└── vite.config.ts               ← registers the proxy plugin, aliases workspace packages
```

The `configureServer` hook only runs under `vite dev` (not `vite preview`
or a static build) — that's intentional for a local demo like this; a real
deployment would move the proxy into an actual backend service.
