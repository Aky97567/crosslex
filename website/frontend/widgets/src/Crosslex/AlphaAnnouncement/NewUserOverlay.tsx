import React from 'react';
import { Card } from '@whitelotus/front-shared';
import { ChangelogEntry } from './changelog';

const STORAGE_KEY = 'crosslex:seen_build';
const ctaButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300';

type Props = { entry: ChangelogEntry; buildId: string; onDismiss: () => void };

const NewUserOverlay: React.FC<Props> = ({ entry, buildId, onDismiss }) => {
  const handleCta = () => {
    try {
      localStorage.setItem(STORAGE_KEY, buildId);
    } catch {}
    onDismiss();
  };

  return (
    <div className="fixed inset-0 z-40 bg-dark flex items-center justify-center">
      <div
        className="mx-20 max-w-400 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Card heading={{ level: 'h1', text: entry.newUser.heading }}>
          <p className="text-text mb-30">{entry.newUser.body}</p>
          <div className="flex justify-center">
            <button className={ctaButton} onClick={handleCta}>
              {entry.newUser.cta}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export { NewUserOverlay };
