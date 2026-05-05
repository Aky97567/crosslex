import React, { useState } from 'react';
import {
  readSessionTimeout,
  writeSessionTimeout,
  readStorageUsage,
} from '@whitelotus/front-features';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-text font-semibold text-base mb-15">{children}</h2>
);

const Divider = () => <div className="border-t border-brand my-20 opacity-30" />;

const SessionTimeoutSection: React.FC = () => {
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

const StorageSection: React.FC = () => {
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

const KnownWordsSection: React.FC = () => (
  <div>
    <SectionHeading>Known words</SectionHeading>
    <p className="text-text text-sm opacity-60">Coming soon — manage words you've marked as already known.</p>
  </div>
);

const SettingsPanel: React.FC<Props> = ({ isOpen, onClose }) => (
  <>
    {isOpen && (
      <div
        className="fixed inset-0 z-30 bg-dark opacity-50"
        onClick={onClose}
      />
    )}
    <div
      className={`fixed top-0 right-0 h-full z-40 w-full max-w-4xl bg-bg-l1 border-l-2 border-brand shadow-lg flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ maxWidth: '380px' }}
    >
      <div className="flex items-center justify-between px-20 h-50 border-b-2 border-brand bg-bg-l2 shrink-0">
        <span className="text-text font-semibold">Settings</span>
        <button
          onClick={onClose}
          className="text-text hover:text-brand transition-colors duration-200 text-sm leading-none"
          aria-label="Close settings"
        >
          ✕
        </button>
      </div>
      <div className="overflow-y-auto flex-1 px-20 py-20">
        <SessionTimeoutSection />
        <Divider />
        <StorageSection />
        <Divider />
        <KnownWordsSection />
      </div>
    </div>
  </>
);

export { SettingsPanel };
