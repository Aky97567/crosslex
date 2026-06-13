import React, { useState } from 'react';
import { readHardcoreMode, writeHardcoreMode } from '@whitelotus/front-features';
import { Checkbox } from '@whitelotus/front-shared';
import { SectionHeading } from './SettingsPrimitives';

export const HardcoreModeSection: React.FC = () => {
  const [enabled, setEnabled] = useState(() => readHardcoreMode());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    writeHardcoreMode(e.target.checked);
    setEnabled(e.target.checked);
  };

  return (
    <div>
      <SectionHeading>Exercises</SectionHeading>
      <Checkbox
        checked={enabled}
        onChange={handleChange}
        label="Hardcore word completion"
      />
      <p className="text-text text-sm opacity-60 mt-10">
        Disables the Peek hint in type-the-word exercises. No letter reveals allowed.
      </p>
    </div>
  );
};
