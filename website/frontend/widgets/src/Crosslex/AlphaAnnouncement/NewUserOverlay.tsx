import React, { useState } from 'react';
import { Card, SelectableCard } from '@whitelotus/front-shared';
import { writeActiveLevel, writeLevelSelected, ActiveLevel } from '@whitelotus/front-features';
import { ChangelogEntry } from './changelog';

const STORAGE_KEY = 'crosslex:seen_build';
const ctaButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed';

type Props = { entry: ChangelogEntry; buildId: string; onDismiss: () => void };

const NewUserOverlay: React.FC<Props> = ({ entry, buildId, onDismiss }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedLevel, setSelectedLevel] = useState<ActiveLevel | null>(null);

  const handleNext = () => {
    if (!selectedLevel) return;
    writeActiveLevel(selectedLevel);
    setStep(2);
  };

  const handleCta = () => {
    writeLevelSelected();
    try {
      localStorage.setItem(STORAGE_KEY, buildId);
    } catch {}
    onDismiss();
  };

  return (
    <div className="fixed inset-0 z-40 bg-dark flex items-center justify-center">
      <div className="mx-20 max-w-400 w-full" onClick={(e) => e.stopPropagation()}>
        {step === 1 ? (
          <Card heading={{ level: 'h1', text: "What's your German level?" }}>
            <p className="text-text text-sm opacity-70 mb-20">
              We'll match your word pool to your level. You can change this later in Settings.
            </p>
            <div className="flex flex-col gap-10 mb-30">
              <SelectableCard
                active={selectedLevel === 'a2'}
                onClick={() => setSelectedLevel('a2')}
              >
                <span className="font-semibold block">A2</span>
                <span className="text-sm opacity-70">Everyday basics</span>
              </SelectableCard>
              <SelectableCard
                active={selectedLevel === 'b1'}
                onClick={() => setSelectedLevel('b1')}
              >
                <span className="font-semibold block">B1</span>
                <span className="text-sm opacity-70">Confident speaker</span>
              </SelectableCard>
            </div>
            <div className="flex justify-center">
              <button
                className={ctaButton}
                onClick={handleNext}
                disabled={selectedLevel === null}
              >
                Next →
              </button>
            </div>
          </Card>
        ) : (
          <Card heading={{ level: 'h1', text: entry.newUser.heading }}>
            <p className="text-text mb-30">{entry.newUser.body}</p>
            <div className="flex justify-center">
              <button className={ctaButton} onClick={handleCta}>
                {entry.newUser.cta}
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export { NewUserOverlay };
