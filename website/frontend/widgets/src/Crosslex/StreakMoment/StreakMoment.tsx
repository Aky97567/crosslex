import React, { useEffect, useState } from 'react';
import { Badge as BadgeType } from '@whitelotus/front-features';

const FlameSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 4C32 4 44 20 44 32C44 35 42 37 40 38C40 30 34 24 32 20C30 26 28 30 28 36C24 34 22 30 22 26C18 30 16 36 16 42C16 55 23 68 32 68C41 68 48 55 48 42C48 32 40 16 32 4Z"
      fill="url(#flame-gradient)"
    />
    <path
      d="M32 44C32 44 36 48 36 53C36 57 34 60 32 60C30 60 28 57 28 53C28 48 32 44 32 44Z"
      fill="url(#inner-gradient)"
    />
    <defs>
      <linearGradient id="flame-gradient" x1="32" y1="4" x2="32" y2="68" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFB300" />
        <stop offset="0.5" stopColor="#FF6B00" />
        <stop offset="1" stopColor="#E53935" />
      </linearGradient>
      <linearGradient id="inner-gradient" x1="32" y1="44" x2="32" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF9C4" />
        <stop offset="1" stopColor="#FFD54F" />
      </linearGradient>
    </defs>
  </svg>
);

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
};

const AUTO_ADVANCE_MS = 3000;

const StreakMoment: React.FC<Props> = ({ streakCount, newBadge, onContinue }) => {
  const [screen, setScreen] = useState<Screen>('streak');

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
      <div className="animate-flame-pulse mb-30">
        <FlameSvg className="w-[80px] h-[100px]" />
      </div>
      <p className="animate-count-in text-text font-bold text-lg mb-10">{streakCount}</p>
      <p className="text-text text-md mb-10">{streakCount === 1 ? 'day streak' : 'day streak'}</p>
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

export { StreakMoment, BadgeIcon };
