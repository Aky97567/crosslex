import React from 'react';
import { readStorageUsage } from '@whitelotus/front-features';
import { SectionHeading } from './SettingsPrimitives';

const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
};

const SHORT_KEY: Record<string, string> = {
  'crosslex:words_seen':      'Words seen',
  'crosslex:exercise_log':    'Exercise log',
  'crosslex:learning_rate':   'Learning rate',
  'crosslex:session_timeout': 'Session timeout',
  'crosslex:seen_build':      'Seen build',
};

export const StorageSection: React.FC = () => {
  const usage = readStorageUsage();
  const total = usage.reduce((sum, { bytes }) => sum + bytes, 0);

  return (
    <div>
      <SectionHeading>Storage usage</SectionHeading>
      <ul className="space-y-8">
        {usage.map(({ key, bytes }) => (
          <li key={key} className="flex justify-between text-sm">
            <span className="text-text opacity-70">{SHORT_KEY[key] ?? key}</span>
            <span className="text-text tabular-nums">{formatBytes(bytes)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between text-sm font-semibold mt-10 border-t border-brand pt-10 opacity-70">
        <span className="text-text">Total</span>
        <span className="text-text tabular-nums">{formatBytes(total)}</span>
      </div>
      <p className="text-text text-sm opacity-60 mt-10">
        All data is stored locally in your browser and never sent to a server.
      </p>
    </div>
  );
};
