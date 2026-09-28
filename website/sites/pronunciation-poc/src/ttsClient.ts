const audioCache = new Map<string, string>();

export class TtsError extends Error {}

/**
 * Fetches (or reuses a cached) audio clip for `text` from the local
 * /api/tts proxy and returns an object URL ready for an <audio> element.
 *
 * Caching per exact text is a simple, honest cost control for a demo —
 * re-clicking the same word doesn't re-spend ElevenLabs quota.
 */
export const fetchPronunciation = async (text: string): Promise<string> => {
  const cached = audioCache.get(text);
  if (cached) return cached;

  const res = await fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      if (typeof body?.error === 'string') message = body.error;
    } catch {
      // response wasn't JSON — keep the generic message
    }
    throw new TtsError(message);
  }

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  audioCache.set(text, url);
  return url;
};
