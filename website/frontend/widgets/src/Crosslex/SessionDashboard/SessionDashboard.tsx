import React, { useState } from 'react';
import { Card, CoachMark, SelectableCard } from '@whitelotus/front-shared';
import {
  LearningRate,
  useCoachMark,
  WordTheme,
  useCrosslexStorage,
} from '@whitelotus/front-features';
import { A2Words, B1Words, getThemesForPool } from '@whitelotus/mock-test';
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

const THEME_LABELS: Record<WordTheme, string> = {
  transport:   'Transport',
  health:      'Health',
  daily_life:  'Daily Life',
  work:        'Work',
  bureaucracy: 'Bureaucracy',
  finance:     'Finance',
};

const ctaButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300 w-full mt-20';

type Props = { onStart: (durationMinutes: number, theme: WordTheme | null) => void; onWordClick?: (wordKey: string) => void; coachMarksEnabled?: boolean };

const SessionDashboard: React.FC<Props> = ({ onStart, onWordClick, coachMarksEnabled = true }) => {
  const {
    wordsSeen: wordsSeenMap,
    activeLevel,
    learningRate: savedRate,
    writeLearningRate,
    writeActiveTheme,
  } = useCrosslexStorage();
  const [duration, setDuration] = useState<number>(5);
  const { shown: showDashboardTip, dismiss: dismissDashboardTip } = useCoachMark('dashboard-intro');
  const wordsSeenCount = Object.keys(wordsSeenMap).length;
  const canReview = wordsSeenCount >= 3;
  const [rate, setRate] = useState<LearningRate>(() =>
    (savedRate === 'review' || savedRate === 'easy') && !canReview ? 'balanced' : savedRate
  );
  const wordPool = activeLevel === 'a2' ? A2Words : B1Words;
  const availableThemes = getThemesForPool(wordPool, 5);
  const [theme, setTheme] = useState<WordTheme | null>(null);
  const allWordsSeen = wordPool.every((key) => key in wordsSeenMap);
  const showAllSeenNotice = allWordsSeen && (rate === 'balanced' || rate === 'intensive');
  const filteredRateOptions = RATE_OPTIONS.filter((opt) => {
    if (opt.value === 'review' || opt.value === 'easy') return canReview;
    return true;
  });

  const handleRateChange = (next: LearningRate) => {
    setRate(next);
    writeLearningRate(next);
  };

  const handleThemeChange = (next: WordTheme | null) => {
    setTheme(next);
    writeActiveTheme(next);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(e.target.value, 10);
    if (isNaN(parsed) || parsed < 1) { setDuration(1); return; }
    setDuration(Math.min(parsed, 120));
  };

  return (
    <div className="max-w-4xl mx-auto px-20 py-40 flex flex-col gap-20">
      <WordMetricsPanel onWordClick={onWordClick} />
      <Card heading={{ level: 'h1', text: 'Start a session' }}>
        <div className="mb-30 flex flex-wrap gap-30 items-start">
          <div>
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
          </div>
          <div className="self-stretch border-l-2 border-brand opacity-30" />
          <div>
            <label
              className="text-text font-semibold block mb-10"
              htmlFor="session-theme"
            >
              Theme
            </label>
            <select
              id="session-theme"
              value={theme ?? ''}
              onChange={(e) => handleThemeChange((e.target.value as WordTheme) || null)}
              className="bg-bg-l2 border-2 border-brand rounded-md px-20 py-10 text-text"
            >
              <option value="">All themes</option>
              {availableThemes.map((t) => (
                <option key={t} value={t}>{THEME_LABELS[t]}</option>
              ))}
            </select>
          </div>
          {/* Tablet: rate inline with duration + theme */}
          <div className="hidden md:block lg:hidden self-stretch border-l-2 border-brand opacity-30" />
          <div className="hidden md:block lg:hidden">
            <label className="text-text font-semibold block mb-10" htmlFor="session-rate-inline">
              Learning rate
            </label>
            <select
              id="session-rate-inline"
              value={rate}
              onChange={(e) => handleRateChange(e.target.value as LearningRate)}
              className="bg-bg-l2 border-2 border-brand rounded-md px-20 py-10 text-text"
            >
              {filteredRateOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label} — {opt.subtitle}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-text text-sm -mt-20 mb-30 opacity-70">
          Shorter, frequent sessions beat long ones
        </p>

        {/* Mobile: rate dropdown standalone */}
        <div className="md:hidden mb-10">
          <p className="text-text font-semibold mb-15">Learning rate</p>
          <select
            className="bg-bg-l2 border-2 border-brand rounded-md px-20 py-10 text-text w-full"
            value={rate}
            onChange={(e) => handleRateChange(e.target.value as LearningRate)}
          >
            {filteredRateOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label} — {opt.subtitle}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop: rate card grid */}
        <div className="hidden lg:block mb-10">
          <p className="text-text font-semibold mb-15">Learning rate</p>
          <div className="grid grid-cols-2 gap-10">
            {filteredRateOptions.map((opt) => (
              <SelectableCard
                key={opt.value}
                active={rate === opt.value}
                onClick={() => handleRateChange(opt.value)}
              >
                <span className="font-semibold block">{opt.label}</span>
                <span className="text-sm opacity-70">{opt.subtitle}</span>
              </SelectableCard>
            ))}
          </div>
        </div>

        {showAllSeenNotice && (
          <div className="mt-20 p-20 border-2 border-brand rounded-md bg-bg-l2">
            <p className="text-text text-sm">
              You've seen all {wordPool.length} words — no new words will appear this session.
            </p>
            {PRIZE_COPY_ENABLED && (
              <p className="text-text text-sm mt-10 opacity-70">
                You've gone through the whole library! That makes me very happy. Send me a screenshot — if you're the first, there's a little present in it for you.
              </p>
            )}
          </div>
        )}

        {showDashboardTip && coachMarksEnabled && (
          <div className="mt-20">
            <CoachMark
              text="Read a word card, then answer questions. The app decides what comes next."
              onDismiss={dismissDashboardTip}
            />
          </div>
        )}

        <button
          className={ctaButton}
          onClick={() => { dismissDashboardTip(); onStart(duration, theme); }}
        >
          Start →
        </button>
      </Card>
    </div>
  );
};

export { SessionDashboard };
