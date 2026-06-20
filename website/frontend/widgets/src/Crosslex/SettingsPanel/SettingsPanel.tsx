import React from 'react';
import { Divider } from './SettingsPrimitives';
import { LevelSection } from './LevelSection';
import { SessionTimeoutSection } from './SessionTimeoutSection';
import { AnimationsSection } from './AnimationsSection';
import { HardcoreModeSection } from './HardcoreModeSection';
import { StorageSection } from './StorageSection';
import { KnownWordsSection } from './KnownWordsSection';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

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
      <div className="border-b-2 border-brand bg-bg-l2 shrink-0">
        <div className="flex items-center justify-between px-20 h-60">
          <span className="text-text font-semibold">Settings</span>
          <button
            onClick={onClose}
            className="text-text hover:text-brand transition-colors duration-200 text-md leading-none"
            aria-label="Close settings"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="overflow-y-auto overscroll-contain flex-1 px-20 py-20">
        <LevelSection />
        <Divider />
        <SessionTimeoutSection />
        <Divider />
        <AnimationsSection />
        <Divider />
        <HardcoreModeSection />
        <Divider />
        <StorageSection />
        <Divider />
        <KnownWordsSection />
      </div>
    </div>
  </>
);

export { SettingsPanel };
