export type Badge = {
  days: number;
  name: string;
  flavourText: string;
};

export const BADGES: Badge[] = [
  { days: 3,    name: 'Spark',     flavourText: 'Three days in a row. Something\'s starting.' },
  { days: 7,    name: 'Flame',     flavourText: 'A full week. The habit is forming.' },
  { days: 14,   name: 'Fortnight', flavourText: 'Two weeks straight. Genuinely impressive.' },
  { days: 30,   name: 'Inferno',   flavourText: 'A month. This is who you are now.' },
  { days: 100,  name: 'Century',   flavourText: '100 days. You\'re not stopping, are you?' },
  { days: 365,  name: 'Eternal',   flavourText: 'A full year. Remarkable.' },
  { days: 1000, name: 'Legendary', flavourText: '1000 days. There are no words.' },
];

export const getEarnedBadges = (bestCount: number): Badge[] =>
  BADGES.filter(b => b.days <= bestCount);

export const getNewlyEarnedBadge = (prevBest: number, newCount: number): Badge | undefined =>
  BADGES.find(b => b.days > prevBest && b.days <= newCount);
