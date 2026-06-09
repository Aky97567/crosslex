import React, { useState } from 'react';
import { BADGES, Badge } from '@whitelotus/front-features';
import { BadgeIcon } from '../BadgeIcon';

type Props = {
  earnedBadges: Badge[];
};

const StreakBadgeTrophyCase: React.FC<Props> = ({ earnedBadges }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-20 border-t-2 border-brand pt-15">
      <button
        onClick={() => setExpanded(p => !p)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-text text-sm font-semibold opacity-70">
          Badges {earnedBadges.length > 0 && `(${earnedBadges.length} earned)`}
        </span>
        <span className="text-text text-sm opacity-50">{expanded ? '▴' : '▾'}</span>
      </button>
      {expanded && (
        <div className="mt-15 flex flex-wrap gap-20 justify-center">
          {BADGES.map(badge => (
            <BadgeIcon
              key={badge.days}
              earned={earnedBadges.some(b => b.days === badge.days)}
              name={badge.name}
              days={badge.days}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { StreakBadgeTrophyCase };
