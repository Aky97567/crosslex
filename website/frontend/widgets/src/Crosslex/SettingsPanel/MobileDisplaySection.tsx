import React from 'react';
import { useCrosslexStorage } from '@whitelotus/front-features';
import { Checkbox } from '@whitelotus/front-shared';
import { SectionHeading } from './SettingsPrimitives';

export const MobileDisplaySection: React.FC = () => {
  const {
    mobileFullView,
    writeMobileFullView,
    flipAnimation,
    writeFlipAnimation,
  } = useCrosslexStorage();

  return (
    <div>
      <SectionHeading>Mobile display</SectionHeading>
      <Checkbox
        checked={mobileFullView}
        onChange={(e) => writeMobileFullView(e.target.checked)}
        label="Show full word content"
      />
      <p className="text-text text-sm opacity-60 mt-10 mb-20">
        See all sections instead of the summary card.
      </p>
      <Checkbox
        checked={flipAnimation}
        onChange={(e) => writeFlipAnimation(e.target.checked)}
        label="Flip card animation"
      />
      <p className="text-text text-sm opacity-60 mt-10">
        Off by default. Enable if you enjoy the card flip effect.
      </p>
    </div>
  );
};
