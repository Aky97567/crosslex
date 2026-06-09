import React, { useEffect, useMemo, useState } from 'react';
import Lottie from 'lottie-react';
import { Badge as BadgeType } from '@whitelotus/front-features';

const FLAME_FILES = [
  '1df4b596-1182-11ee-9fc3-6f8d7094dc00.json',
  '2b610cec-116a-11ee-917e-5b9b6a234276.json',
  '2e866326-1170-11ee-b759-c34e30831483.json',
  'bbb0b112-bf19-411d-abf2-6380c736127d.json',
  'ecde336c-1152-11ee-94f8-13b2f86f8f07.json',
] as const;

export type FlameVariant = typeof FLAME_FILES[number];

const flameUrl = (file: string) => `/lottie/flame/${file}`;

const useLottieData = (file: string) => {
  const [data, setData] = useState<object | null>(null);
  useEffect(() => {
    fetch(flameUrl(file))
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, [file]);
  return data;
};

type FlameProps = { file: string; className?: string };

const FlameAnimation: React.FC<FlameProps> = ({ file, className }) => {
  const data = useLottieData(file);
  if (!data) return null;
  return (
    <Lottie
      animationData={data}
      loop
      autoplay
      className={className}
    />
  );
};

const BadgeIcon: React.FC<{ earned: boolean; name: string; days: number }> = ({ earned, name, days }) => (
  <div className={`flex flex-col items-center gap-5 ${earned ? 'opacity-100' : 'opacity-30'}`}>
    <div className={`w-60 h-60 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
      earned ? 'border-brand bg-brand text-text-cta' : 'border-brand bg-transparent text-text'
    }`}>
      {days >= 1000 ? '1k' : days >= 100 ? days : days + 'd'}
    </div>
    <span className="text-text text-sm">{name}</span>
  </div>
);

type Screen = 'streak' | 'badge';

type Props = {
  streakCount: number;
  newBadge?: BadgeType;
  onContinue: () => void;
  flameVariant?: FlameVariant;
};

const AUTO_ADVANCE_MS = 3000;

const StreakMoment: React.FC<Props> = ({ streakCount, newBadge, onContinue, flameVariant }) => {
  const [screen, setScreen] = useState<Screen>('streak');

  const randomFile = useMemo(
    () => flameVariant ?? FLAME_FILES[Math.floor(Math.random() * FLAME_FILES.length)],
    // intentionally empty deps — pick once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    if (screen === 'streak' && !newBadge) {
      const t = setTimeout(onContinue, AUTO_ADVANCE_MS);
      return () => clearTimeout(t);
    }
    if (screen === 'streak' && newBadge) {
      const t = setTimeout(() => setScreen('badge'), AUTO_ADVANCE_MS);
      return () => clearTimeout(t);
    }
  }, [screen, newBadge, onContinue]);

  const handleContinue = () => {
    if (screen === 'streak' && newBadge) {
      setScreen('badge');
    } else {
      onContinue();
    }
  };

  if (screen === 'badge' && newBadge) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-40 py-60 text-center">
        <div className="animate-badge-reveal mb-30">
          <BadgeIcon earned days={newBadge.days} name={newBadge.name} />
        </div>
        <p className="text-text opacity-60 text-sm mb-10">Badge unlocked</p>
        <p className="text-text font-bold text-md mb-15">{newBadge.name}</p>
        <p className="text-text opacity-70 text-sm mb-50 max-w-[280px]">{newBadge.flavourText}</p>
        <button
          onClick={onContinue}
          className="border-2 border-brand rounded-md text-text px-40 py-10 text-sm hover:bg-brand-2 transition-colors duration-300"
        >
          Continue →
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-40 py-60 text-center">
      <FlameAnimation file={randomFile} className="w-[160px] h-[160px] mb-10" />
      <p className="animate-count-in text-text font-bold text-lg mb-10">{streakCount}</p>
      <p className="text-text text-md mb-10">day streak</p>
      <p className="text-text opacity-60 text-sm mb-50">
        {streakCount === 1 ? 'You started a streak.' : 'Keep showing up tomorrow.'}
      </p>
      <button
        onClick={handleContinue}
        className="border-2 border-brand rounded-md text-text px-40 py-10 text-sm hover:bg-brand-2 transition-colors duration-300"
      >
        {newBadge ? 'Next →' : 'Continue →'}
      </button>
    </div>
  );
};

export { StreakMoment, BadgeIcon, FLAME_FILES };
