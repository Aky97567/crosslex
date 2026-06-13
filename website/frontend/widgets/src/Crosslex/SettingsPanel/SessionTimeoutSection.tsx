import React, { useState } from 'react';
import { readSessionTimeout, writeSessionTimeout } from '@whitelotus/front-features';
import { SectionHeading } from './SettingsPrimitives';

export const SessionTimeoutSection: React.FC = () => {
  const [timeout, setTimeout] = useState(() => readSessionTimeout());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    const clamped = isNaN(val) || val < 1 ? 1 : val;
    setTimeout(clamped);
    writeSessionTimeout(clamped);
  };

  return (
    <div>
      <SectionHeading>Session timeout</SectionHeading>
      <div className="flex items-center gap-15">
        <input
          type="number"
          min={1}
          value={timeout}
          onChange={handleChange}
          className="bg-bg-l2 border-2 border-brand rounded-md px-15 py-10 text-text w-80 text-center"
        />
        <span className="text-text opacity-70 text-sm">minutes of inactivity</span>
      </div>
      <p className="text-text text-sm opacity-60 mt-10">
        Active sessions end automatically after this period of no interaction.
      </p>
    </div>
  );
};
