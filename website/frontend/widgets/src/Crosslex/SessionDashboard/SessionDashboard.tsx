import React, { useState } from 'react';
import { Card } from '@whitelotus/front-shared';
import { readLearningRate, writeLearningRate, LearningRate } from '@whitelotus/front-features';

const DURATIONS = [15, 30, 45, 60] as const;

const btn =
  'border-2 rounded-md px-20 py-10 transition-colors duration-300 cursor-pointer';
const activeDuration = `${btn} bg-brand border-brand text-text-cta`;
const inactiveDuration = `${btn} border-brand text-text hover:bg-brand-2`;
const activeRate = `${btn} bg-brand border-brand text-text-cta w-full`;
const inactiveRate = `${btn} border-brand text-text hover:bg-brand-2 w-full`;
const ctaButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300 w-full mt-20';

type Props = { onStart: (durationMinutes: number) => void };

const SessionDashboard: React.FC<Props> = ({ onStart }) => {
  const [duration, setDuration] = useState<number>(30);
  const [rate, setRate] = useState<LearningRate>(() => readLearningRate());

  const handleRateChange = (next: LearningRate) => {
    setRate(next);
    writeLearningRate(next);
  };

  return (
    <div className="max-w-4xl mx-auto px-20 py-40">
      <Card heading={{ level: 'h1', text: 'Start a session' }}>
        <div className="mb-30">
          <p className="text-text mb-15 font-semibold">Duration</p>
          <div className="flex gap-10 flex-wrap">
            {DURATIONS.map((d) => (
              <button
                key={d}
                className={duration === d ? activeDuration : inactiveDuration}
                onClick={() => setDuration(d)}
              >
                {d} min
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <p className="text-text mb-15 font-semibold">Learning rate</p>
          <div className="flex flex-col gap-10">
            <button
              className={rate === 'aggressive' ? activeRate : inactiveRate}
              onClick={() => handleRateChange('aggressive')}
            >
              <span className="font-semibold">Aggressive</span>
              <span className="text-sm ml-10 opacity-70">— introduces new words</span>
            </button>
            <button
              className={rate === 'conservative' ? activeRate : inactiveRate}
              onClick={() => handleRateChange('conservative')}
            >
              <span className="font-semibold">Conservative</span>
              <span className="text-sm ml-10 opacity-70">— exercises only</span>
            </button>
          </div>
        </div>

        <button className={ctaButton} onClick={() => onStart(duration)}>
          Start →
        </button>
      </Card>
    </div>
  );
};

export { SessionDashboard };
