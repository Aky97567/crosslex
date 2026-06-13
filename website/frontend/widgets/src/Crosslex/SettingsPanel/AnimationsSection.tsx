import React, { useState } from 'react';
import { readFlipAnimation, writeFlipAnimation } from '@whitelotus/front-features';
import { Checkbox } from '@whitelotus/front-shared';
import { SectionHeading } from './SettingsPrimitives';

export const AnimationsSection: React.FC = () => {
  const [enabled, setEnabled] = useState(() => readFlipAnimation());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    writeFlipAnimation(e.target.checked);
    setEnabled(e.target.checked);
  };

  return (
    <div>
      <SectionHeading>Animations</SectionHeading>
      <Checkbox
        checked={enabled}
        onChange={handleChange}
        label="Flip card animation on mobile"
      />
      <p className="text-text text-sm opacity-60 mt-10">
        Off by default. Enable if you enjoy the card flip effect.
      </p>
    </div>
  );
};
