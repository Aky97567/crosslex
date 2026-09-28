import React, { useEffect, useMemo, useRef, useState } from 'react';
import { WordIntro } from '@whitelotus/front-entities';
import { SteppedSlider } from '@whitelotus/front-shared';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import type { WordIntroModule } from '@whitelotus/common-crosslex-view';
import { fetchPronunciation, fetchVoices, TtsError, type Voice } from './ttsClient';

type WordKey = keyof typeof sampleLearnPageContentList;

const getWordIntro = (key: WordKey): WordIntroModule => {
  const module = sampleLearnPageContentList[key].content.modules.find(
    (m): m is WordIntroModule => m.moduleType === 'wordIntro',
  );
  if (!module) throw new Error(`No wordIntro module found for '${key}'`);
  return module;
};

const wordKeys = (Object.keys(sampleLearnPageContentList) as WordKey[]).sort((a, b) =>
  getWordIntro(a).word.localeCompare(getWordIntro(b).word, 'de'),
);

type PlaybackState = 'idle' | 'loading' | 'error';

const SPEED_OPTIONS = [
  { value: 0.5, label: '0.5x' },
  { value: 0.75, label: '0.75x' },
  { value: 1, label: 'Normal' },
] as const;
type Speed = (typeof SPEED_OPTIONS)[number]['value'];

type VoicesState =
  | { status: 'loading' }
  | { status: 'ready'; voices: Voice[] }
  | { status: 'unavailable'; message: string };

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<WordKey>(wordKeys[0]);
  const [playback, setPlayback] = useState<PlaybackState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [voicesState, setVoicesState] = useState<VoicesState>({ status: 'loading' });
  const [selectedVoiceId, setSelectedVoiceId] = useState<string | undefined>(undefined);
  const [speed, setSpeed] = useState<Speed>(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetchVoices()
      .then((voices) => {
        setVoicesState({ status: 'ready', voices });
        setSelectedVoiceId((current) => current ?? voices[0]?.voice_id);
      })
      .catch((err) => {
        // Not fatal — /api/tts falls back to ELEVENLABS_VOICE_ID or its own
        // discovery when no voiceId is sent, so pronunciation still works.
        setVoicesState({
          status: 'unavailable',
          message: err instanceof TtsError ? err.message : 'Could not load voice list.',
        });
      });
  }, []);

  const wordIntro = useMemo(() => getWordIntro(selectedKey), [selectedKey]);
  const textToSpeak = wordIntro.article ? `${wordIntro.article} ${wordIntro.word}` : wordIntro.word;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKey(e.target.value as WordKey);
    setPlayback('idle');
    setErrorMessage(null);
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVoiceId(e.target.value);
  };

  const handleSpeedChange = (next: Speed) => {
    setSpeed(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  const handlePronounce = async () => {
    setPlayback('loading');
    setErrorMessage(null);
    try {
      const audioUrl = await fetchPronunciation(textToSpeak, selectedVoiceId);
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.playbackRate = speed;
        await audioRef.current.play();
      }
      setPlayback('idle');
    } catch (err) {
      setPlayback('error');
      setErrorMessage(err instanceof TtsError ? err.message : 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-bg-l1 text-text px-20 py-40">
      <div className="max-w-2xl mx-auto flex flex-col gap-30">
        <div>
          <h1 className="text-lg font-semibold mb-10">Word Pronunciation POC</h1>
          <p className="text-sm opacity-70">
            Crosslex word data + ElevenLabs text-to-speech. Pick a word, then press play to hear it
            pronounced.
          </p>
        </div>

        <div>
          <label htmlFor="word-select" className="text-text font-semibold block mb-10">
            Word ({wordKeys.length} available)
          </label>
          <select
            id="word-select"
            value={selectedKey}
            onChange={handleSelectChange}
            className="bg-bg-l2 border-2 border-brand rounded-md px-20 py-10 text-text w-full"
          >
            {wordKeys.map((key) => {
              const intro = getWordIntro(key);
              const label = intro.article ? `${intro.article} ${intro.word}` : intro.word;
              return (
                <option key={key} value={key}>
                  {label} — {intro.translation}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="voice-select" className="text-text font-semibold block mb-10">
            Voice
          </label>
          {voicesState.status === 'loading' && (
            <p className="text-sm opacity-70">Loading voices…</p>
          )}
          {voicesState.status === 'ready' && (
            <select
              id="voice-select"
              value={selectedVoiceId}
              onChange={handleVoiceChange}
              className="bg-bg-l2 border-2 border-brand rounded-md px-20 py-10 text-text w-full"
            >
              {voicesState.voices.map((voice) => (
                <option key={voice.voice_id} value={voice.voice_id}>
                  {voice.name}
                </option>
              ))}
            </select>
          )}
          {voicesState.status === 'unavailable' && (
            <p className="text-sm opacity-70">
              Voice list unavailable ({voicesState.message}) — using the server's default voice.
            </p>
          )}
        </div>

        <div className="bg-bg-l2 rounded-md p-20">
          <WordIntro
            word={wordIntro.word}
            displayName={wordIntro.displayName}
            article={wordIntro.article}
            translation={wordIntro.translation}
            partOfSpeech={wordIntro.partOfSpeech}
            trennbar={wordIntro.trennbar}
          />
        </div>

        <div>
          <label className="text-text font-semibold block mb-10">Playback speed</label>
          <div className="max-w-xs mb-10">
            <SteppedSlider
              options={[...SPEED_OPTIONS]}
              value={speed}
              onChange={handleSpeedChange}
              ariaLabel="Playback speed"
            />
          </div>

          <button
            onClick={handlePronounce}
            disabled={playback === 'loading'}
            className="bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {playback === 'loading' ? 'Generating…' : `🔊 Pronounce "${textToSpeak}"`}
          </button>
          {playback === 'error' && errorMessage && (
            <p className="text-sm mt-10 text-red-500">{errorMessage}</p>
          )}
          <audio ref={audioRef} className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default App;
