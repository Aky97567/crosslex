import type { Plugin, ViteDevServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const CONFIGURED_VOICE_ID = process.env.ELEVENLABS_VOICE_ID;

type VoiceSummary = { voice_id: string; name: string };

// Premade voice IDs aren't guaranteed to exist on every account (ElevenLabs'
// shared voice library has changed over time), so rather than hardcode one
// and risk a 404, we ask the account itself which voices it actually has —
// cached for the life of the dev server process. Requires the key's Voices
// read scope; a Text-to-Speech-only key will fail this call (see README).
let cachedVoices: VoiceSummary[] | null = null;

const listVoices = async (): Promise<VoiceSummary[]> => {
  if (cachedVoices) return cachedVoices;

  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': ELEVENLABS_API_KEY! },
  });
  if (!res.ok) {
    throw new Error(
      `Could not list ElevenLabs voices for this API key (${res.status}). Set ELEVENLABS_VOICE_ID in .env.local to a voice ID from your account instead.`,
    );
  }
  const data = (await res.json()) as { voices?: VoiceSummary[] };
  if (!data.voices?.length) {
    throw new Error(
      'This ElevenLabs account has no voices available. Add one at https://elevenlabs.io/app/voice-library, or set ELEVENLABS_VOICE_ID in .env.local.',
    );
  }
  cachedVoices = data.voices;
  return cachedVoices;
};

const resolveVoiceId = async (requestedVoiceId?: string): Promise<string> => {
  if (requestedVoiceId) return requestedVoiceId;
  if (CONFIGURED_VOICE_ID) return CONFIGURED_VOICE_ID;
  const voices = await listVoices();
  return voices[0].voice_id;
};

const readJsonBody = (req: IncomingMessage): Promise<unknown> =>
  new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });

const sendJson = (res: ServerResponse, status: number, body: unknown) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
};

/**
 * Dev-only Vite middleware exposing:
 *   GET  /api/voices — list voices available to this API key
 *   POST /api/tts     — synthesize speech, optional { voiceId } override
 *
 * The ElevenLabs API key is read from the server process's environment
 * (never from import.meta.env / a VITE_-prefixed variable), so it never
 * ends up in the client bundle or the browser's network tab — only this
 * proxy ever sees it. The browser only ever talks to our own origin.
 */
export const elevenLabsProxyPlugin = (): Plugin => ({
  name: 'elevenlabs-tts-proxy',
  configureServer(server: ViteDevServer) {
    server.middlewares.use('/api/voices', async (req, res) => {
      if (req.method !== 'GET') {
        sendJson(res, 405, { error: 'Method not allowed' });
        return;
      }
      if (!ELEVENLABS_API_KEY) {
        sendJson(res, 500, {
          error:
            'ELEVENLABS_API_KEY is not set. Copy .env.example to .env.local, add your key, and restart the dev server.',
        });
        return;
      }
      try {
        const voices = await listVoices();
        sendJson(res, 200, { voices });
      } catch (err) {
        sendJson(res, 502, { error: err instanceof Error ? err.message : String(err) });
      }
    });

    server.middlewares.use('/api/tts', async (req, res) => {
      if (req.method !== 'POST') {
        sendJson(res, 405, { error: 'Method not allowed' });
        return;
      }

      if (!ELEVENLABS_API_KEY) {
        sendJson(res, 500, {
          error:
            'ELEVENLABS_API_KEY is not set. Copy .env.example to .env.local, add your key, and restart the dev server.',
        });
        return;
      }

      let body: { text?: string; voiceId?: string };
      try {
        body = (await readJsonBody(req)) as { text?: string; voiceId?: string };
      } catch {
        sendJson(res, 400, { error: 'Invalid JSON body' });
        return;
      }

      const text = body.text?.trim();
      if (!text) {
        sendJson(res, 400, { error: "Missing 'text' in request body" });
        return;
      }

      try {
        const voiceId = await resolveVoiceId(body.voiceId);
        const elevenLabsRes = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'audio/mpeg',
              'xi-api-key': ELEVENLABS_API_KEY,
            },
            body: JSON.stringify({
              text,
              model_id: 'eleven_multilingual_v2',
              voice_settings: { stability: 0.5, similarity_boost: 0.75 },
            }),
          },
        );

        if (!elevenLabsRes.ok) {
          const errText = await elevenLabsRes.text();
          sendJson(res, elevenLabsRes.status, {
            error: `ElevenLabs API error (${elevenLabsRes.status}): ${errText}`,
          });
          return;
        }

        const audioBuffer = Buffer.from(await elevenLabsRes.arrayBuffer());
        res.statusCode = 200;
        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Content-Length', audioBuffer.length.toString());
        res.end(audioBuffer);
      } catch (err) {
        sendJson(res, 502, {
          error: `Failed to reach ElevenLabs: ${err instanceof Error ? err.message : String(err)}`,
        });
      }
    });
  },
});
