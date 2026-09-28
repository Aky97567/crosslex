import type { Plugin, ViteDevServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? '21m00Tcm4TlvDq8ikWAM'; // "Rachel" — a stable premade multilingual voice

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
 * Dev-only Vite middleware exposing POST /api/tts.
 *
 * The ElevenLabs API key is read from the server process's environment
 * (never from import.meta.env / a VITE_-prefixed variable), so it never
 * ends up in the client bundle or the browser's network tab — only this
 * proxy ever sees it. The browser only ever talks to our own origin.
 */
export const elevenLabsProxyPlugin = (): Plugin => ({
  name: 'elevenlabs-tts-proxy',
  configureServer(server: ViteDevServer) {
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

      let body: { text?: string };
      try {
        body = (await readJsonBody(req)) as { text?: string };
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
        const elevenLabsRes = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`,
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
