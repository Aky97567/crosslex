import React, { useState } from 'react';
import { Card } from '@whitelotus/front-shared';
import {
  readLearningRate,
  writeLearningRate,
  LearningRate,
  readWordsSeen,
} from '@whitelotus/front-features';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordMetricsPanel } from './WordMetricsPanel';

const PRIZE_COPY_ENABLED = true;

type RateOption = {
  value: LearningRate;
  label: string;
  subtitle: string;
};

const RATE_OPTIONS: RateOption[] = [
  { value: 'review',    label: 'Review',    subtitle: 'exercises only, no new words' },
  { value: 'easy',      label: 'Easy',      subtitle: 'mostly exercises, occasional new word' },
  { value: 'balanced',  label: 'Balanced',  subtitle: '~1 in 4 cards is a new word' },
  { value: 'intensive', label: 'Intensive', subtitle: '~1 in 2 cards is a new word' },
];

const activeBtn =
  'border-2 rounded-md px-20 py-12 transition-colors duration-300 cursor-pointer bg-brand border-brand text-text-cta text-left w-full';
const inactiveBtn =
  'border-2 rounded-md px-20 py-12 transition-colors duration-300 cursor-pointer border-brand text-text hover:bg-brand-2 text-left w-full';
const ctaButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300 w-full mt-20';

type Props = { onStart: (durationMinutes: number) => void };

const SessionDashboard: React.FC<Props> = ({ onStart }) => {
  const [duration, setDuration] = useState<number>(5);
  const totalWords = Object.keys(sampleLearnPageContentList).length;
  const wordsSeenCount = Object.keys(readWordsSeen()).length;
  const canReview = wordsSeenCount >= 3;
  const [rate, setRate] = useState<LearningRate>(() => {
    const saved = readLearningRate();
    return (saved === 'review' || saved === 'easy') && !canReview ? 'balanced' : saved;
  });
  const allWordsSeen = wordsSeenCount >= totalWords;
  const showAllSeenNotice = allWordsSeen && (rate === 'balanced' || rate === 'intensive');

  const handleRateChange = (next: LearningRate) => {
    setRate(next);
    writeLearningRate(next);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(e.target.value, 10);
    if (isNaN(parsed) || parsed < 1) { setDuration(1); return; }
    setDuration(Math.min(parsed, 120));
  };

  return (
    <div className="max-w-4xl mx-auto px-20 py-40 flex flex-col gap-20">
      <WordMetricsPanel />
      <Card heading={{ level: 'h1', text: 'Start a session' }}>
        <div className="mb-30">
          <label
            className="text-text font-semibold block mb-10"
            htmlFor="session-duration"
          >
            Duration (minutes)
          </label>
          <input
            id="session-duration"
            type="number"
            min={1}
            max={120}
            value={duration}
            onChange={handleDurationChange}
            className="bg-bg-l2 border-2 border-brand rounded-md px-20 py-10 text-text w-100 text-center"
          />
          <p className="text-text text-sm mt-10 opacity-70">
            Shorter, frequent sessions beat long ones
          </p>
        </div>

        <div className="mb-10">
          <p className="text-text font-semibold mb-15">Learning rate</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {RATE_OPTIONS.filter((opt) => {
              if (opt.value === 'review' || opt.value === 'easy') return canReview;
              return true;
            }).map((opt) => (
              <button
                key={opt.value}
                className={rate === opt.value ? activeBtn : inactiveBtn}
                onClick={() => handleRateChange(opt.value)}
              >
                <span className="font-semibold block">{opt.label}</span>
                <span className="text-sm opacity-70">{opt.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        {showAllSeenNotice && (
          <div className="mt-20 p-20 border-2 border-brand rounded-md bg-bg-l2">
            <p className="text-text text-sm">
              You've seen all {totalWords} words — no new words will appear this session.
            </p>
            {PRIZE_COPY_ENABLED && (
              <p className="text-text text-sm mt-10 opacity-70">
                You've gone through the whole library! That makes me very happy. Send me a screenshot — if you're the first, there's a little present in it for you.
              </p>
            )}
          </div>
        )}

        <button className={ctaButton} onClick={() => onStart(duration)}>
          Start →
        </button>
      </Card>
    </div>
  );
};

export { SessionDashboard };
