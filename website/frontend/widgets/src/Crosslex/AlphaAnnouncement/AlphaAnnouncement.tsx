import React, { useState } from 'react';
import { CURRENT_BUILD_ID, CHANGELOG } from './changelog';
import { NewUserOverlay } from './NewUserOverlay';
import { ReturningUserCard } from './ReturningUserCard';

const getSeenBuild = (): string | null => {
  try {
    return localStorage.getItem('crosslex:seen_build');
  } catch {
    return null;
  }
};

const AlphaAnnouncement: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const seenBuild = getSeenBuild();
  if (seenBuild === CURRENT_BUILD_ID) return null;

  const entry = CHANGELOG[CURRENT_BUILD_ID];
  if (!entry) return null;

  const onDismiss = () => setDismissed(true);

  if (!seenBuild) {
    return (
      <NewUserOverlay
        entry={entry}
        buildId={CURRENT_BUILD_ID}
        onDismiss={onDismiss}
      />
    );
  }

  return (
    <ReturningUserCard
      entry={entry}
      buildId={CURRENT_BUILD_ID}
      onDismiss={onDismiss}
    />
  );
};

export { AlphaAnnouncement };
