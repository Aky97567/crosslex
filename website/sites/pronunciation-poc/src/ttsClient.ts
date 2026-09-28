export type Voice = { voice_id: string; name: string };

const audioCache = new Map<string, string>();
let voicesPromise: Promise<Voice[]> | null = null;

export class TtsError extends Error {}

const readErrorMessage = async (res: Response, fallback: string): Promise<string> => {
  try {
    const body = await res.json();
    if (typeof body?.error === 'string') return body.error;
  } catch {
    // response wasn't JSON — keep the fallback
  }
  return fallback;
};

/**
 * Fetches (or reuses a cached) audio clip for `text`/`voiceId` from the
 * local /api/tts proxy and returns an object URL ready for an <audio>
 * element.
 *
 * Caching per exact (text, voice) pair is a simple, honest cost control
 * for a demo — re-clicking the same word/voice combo doesn't re-spend
 * ElevenLabs quota.
 */
export const fetchPronunciation = async (text: string, voiceId?: string): Promise<string> => {
  const cacheKey = `${voiceId ?? 'default'}::${text}`;
  const cached = audioCache.get(cacheKey);
  if (cached) return cached;

  const res = await fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, voiceId }),
  });

  if (!res.ok) {
    throw new TtsError(await readErrorMessage(res, `Request failed (${res.status})`));
  }

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  audioCache.set(cacheKey, url);
  return url;
};

/**
 * Fetches the list of voices available to the configured API key, once,
 * caching the in-flight/resolved promise for the life of the page. Throws
 * TtsError on failure (e.g. a Text-to-Speech-only scoped key) — callers
 * should fall back to "no voice picker, use the server's default" rather
 * than treat this as fatal.
 */
export const fetchVoices = (): Promise<Voice[]> => {
  if (!voicesPromise) {
    voicesPromise = fetch('/api/voices')
      .then(async (res) => {
        if (!res.ok) {
          throw new TtsError(await readErrorMessage(res, `Request failed (${res.status})`));
        }
        const body = (await res.json()) as { voices: Voice[] };
        return body.voices;
      })
      .catch((err) => {
        voicesPromise = null; // allow retry on next call
        throw err;
      });
  }
  return voicesPromise;
};
