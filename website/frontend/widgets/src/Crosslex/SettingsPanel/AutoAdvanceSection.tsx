import React from 'react';
import { useCrosslexStorage, AUTO_ADVANCE_MAX_SECONDS } from '@whitelotus/front-features';
import { SectionHeading } from './SettingsPrimitives';

const clamp = (n: number): number => Math.min(Math.max(n, 0), AUTO_ADVANCE_MAX_SECONDS);

export const AutoAdvanceSection: React.FC = () => {
  const {
    autoAdvanceCorrectSeconds,
    autoAdvanceWrongSeconds,
    writeAutoAdvanceCorrectSeconds,
    writeAutoAdvanceWrongSeconds,
  } = useCrosslexStorage();

  const handleChange = (write: (seconds: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    write(isNaN(val) ? 0 : clamp(val));
  };

  return (
    <div>
      <SectionHeading>Auto-advance</SectionHeading>
      <div className="flex flex-col gap-15">
        <div className="flex items-center gap-15">
          <input
            type="number"
            min={0}
            max={AUTO_ADVANCE_MAX_SECONDS}
            value={autoAdvanceCorrectSeconds}
            onChange={handleChange(writeAutoAdvanceCorrectSeconds)}
            className="bg-bg-l2 border-2 border-brand rounded-md px-15 py-10 text-text w-80 text-center"
          />
          <span className="text-text opacity-70 text-sm">seconds after a correct answer</span>
        </div>
        <div className="flex items-center gap-15">
          <input
            type="number"
            min={0}
            max={AUTO_ADVANCE_MAX_SECONDS}
            value={autoAdvanceWrongSeconds}
            onChange={handleChange(writeAutoAdvanceWrongSeconds)}
            className="bg-bg-l2 border-2 border-brand rounded-md px-15 py-10 text-text w-80 text-center"
          />
          <span className="text-text opacity-70 text-sm">seconds after a wrong answer</span>
        </div>
      </div>
      <p className="text-text text-sm opacity-60 mt-10">
A dialog appears after answering and moves you on by itself after this many seconds, unless you tap its button first. Set to 0 to turn auto-advance off for that outcome.
      </p>
    </div>
  );
};
