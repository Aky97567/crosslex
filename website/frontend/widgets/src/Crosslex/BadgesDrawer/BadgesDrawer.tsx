import React from 'react';
import { BADGES, getEarnedBadges, useCrosslexStorage } from '@whitelotus/front-features';
import { BadgeIcon } from '@whitelotus/front-entities';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const BadgesDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const { streak } = useCrosslexStorage();
  const earnedBadges = streak ? getEarnedBadges(streak.bestCount) : [];
  const earnedDays = new Set(earnedBadges.map(b => b.days));

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-dark opacity-50" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 right-0 h-full z-40 w-full bg-bg-l1 border-l-2 border-brand shadow-lg flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ maxWidth: '380px' }}
      >
        <div className="flex items-center justify-between px-20 h-60 border-b-2 border-brand bg-bg-l2 shrink-0">
          <span className="text-text font-semibold">Badges</span>
          <button
            onClick={onClose}
            className="text-text hover:text-brand transition-colors duration-200 text-sm leading-none"
            aria-label="Close badges"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-20 py-30">
          {earnedBadges.length === 0 && (
            <p className="text-text text-sm opacity-50 text-center mt-40">
              Complete sessions to earn badges.
            </p>
          )}

          <div className="flex flex-col gap-30">
            {BADGES.map(badge => {
              const earned = earnedDays.has(badge.days);
              return (
                <div key={badge.days} className={`flex items-center gap-20 ${earned ? '' : 'opacity-30'}`}>
                  <BadgeIcon earned={earned} name={badge.name} days={badge.days} />
                  <div>
                    <p className="text-text font-semibold text-sm">{badge.name}</p>
                    <p className="text-text text-sm opacity-60">
                      {earned ? badge.flavourText : `Reach a ${badge.days}-day streak to unlock`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {streak && streak.bestCount > 0 && (
          <div className="px-20 py-15 border-t-2 border-brand bg-bg-l2 shrink-0">
            <p className="text-text text-sm opacity-60 text-center">
              Best streak: {streak.bestCount} day{streak.bestCount !== 1 ? 's' : ''}
              {earnedBadges.length > 0 && ` · ${earnedBadges.length} badge${earnedBadges.length !== 1 ? 's' : ''} earned`}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export { BadgesDrawer };
