import React from 'react';

type Props = {
  earned: boolean;
  name: string;
  days: number;
};

const BadgeIcon: React.FC<Props> = ({ earned, name, days }) => (
  <div className={`flex flex-col items-center gap-5 ${earned ? 'opacity-100' : 'opacity-30'}`}>
    <div
      className={`w-60 h-60 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
        earned
          ? 'border-brand bg-brand text-text-cta'
          : 'border-brand bg-transparent text-text'
      }`}
    >
      {days >= 1000 ? '1k' : days >= 100 ? days : days + 'd'}
    </div>
    <span className="text-text text-sm">{name}</span>
  </div>
);

export { BadgeIcon };
