import React, { useState } from 'react';
import { readActiveLevel, writeActiveLevel, ActiveLevel } from '@whitelotus/front-features';
import { SelectableCard } from '@whitelotus/front-shared';
import { SectionHeading } from './SettingsPrimitives';

const LEVEL_OPTIONS: { value: ActiveLevel; label: string; subtitle: string }[] = [
  { value: 'a2', label: 'A2', subtitle: 'Everyday basics' },
  { value: 'b1', label: 'B1', subtitle: 'Confident speaker' },
];

const confirmButton =
  'bg-brand text-text-cta text-sm px-20 py-10 rounded-md border-2 border-brand transition-colors duration-200';
const cancelButton =
  'text-text text-sm opacity-60 hover:opacity-100 px-20 py-10 transition-opacity duration-200';

export const LevelSection: React.FC = () => {
  const level = readActiveLevel();
  const [confirming, setConfirming] = useState<ActiveLevel | null>(null);

  const handleSelect = (next: ActiveLevel) => {
    if (next !== level) setConfirming(next);
  };

  const handleConfirm = () => {
    if (!confirming) return;
    writeActiveLevel(confirming);
    window.location.reload();
  };

  return (
    <div>
      <SectionHeading>German level</SectionHeading>
      <div className="flex flex-col gap-10">
        {LEVEL_OPTIONS.map((opt) => (
          <SelectableCard
            key={opt.value}
            active={level === opt.value}
            onClick={() => handleSelect(opt.value)}
          >
            <span className="font-semibold block">{opt.label}</span>
            <span className="text-sm opacity-70">{opt.subtitle}</span>
          </SelectableCard>
        ))}
      </div>
      {confirming && (
        <div className="mt-15 p-15 bg-bg-l2 rounded-md border-2 border-brand">
          <p className="text-text text-sm mb-15">
            Switch to {confirming.toUpperCase()}? Your {level.toUpperCase()} progress is saved
            separately and won't be lost. The page will reload.
          </p>
          <div className="flex gap-10">
            <button onClick={handleConfirm} className={confirmButton}>Switch</button>
            <button onClick={() => setConfirming(null)} className={cancelButton}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};
