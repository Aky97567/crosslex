import React from 'react';
import { Card, ModalOverlay } from '@whitelotus/front-shared';
import { ChangelogEntry } from './changelog';

const STORAGE_KEY = 'crosslex:seen_build';

type Props = { entry: ChangelogEntry; buildId: string; onDismiss: () => void };

const ReturningUserCard: React.FC<Props> = ({ entry, buildId, onDismiss }) => {
  const handleDismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, buildId);
    } catch {}
    onDismiss();
  };

  return (
    <ModalOverlay>
      <Card
        heading={{ level: 'h2', text: entry.returningUser.heading }}
        needClose
        onClose={handleDismiss}
      >
        <p className="text-text mb-10">{entry.returningUser.body}</p>
        {entry.returningUser.changes.length > 0 && (
          <ul className="list-disc list-inside text-text space-y-10">
            {entry.returningUser.changes.map((change, i) => (
              <li key={i}>{change}</li>
            ))}
          </ul>
        )}
      </Card>
    </ModalOverlay>
  );
};

export { ReturningUserCard };
