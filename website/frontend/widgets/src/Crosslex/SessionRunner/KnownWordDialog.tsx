import React, { useState } from 'react';

type Props = {
  onConfirm: (dontShowAgain: boolean) => void;
  onCancel: () => void;
};

const KnownWordDialog: React.FC<Props> = ({ onConfirm, onCancel }) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-20">
      <div className="absolute inset-0 bg-dark opacity-50" onClick={onCancel} />
      <div className="relative bg-bg-l2 border-2 border-brand rounded-lg p-30 max-w-4xl w-full shadow-lg">
        <h2 className="text-text font-semibold text-base mb-10">Mark as known?</h2>
        <p className="text-text text-sm opacity-70 mb-20">
          This word will be removed from your future sessions. You can restore it any time from Settings.
        </p>

        <label className="flex items-center gap-10 mb-20 cursor-pointer">
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
            className="accent-brand w-15 h-15"
          />
          <span className="text-text text-sm opacity-70">Don't show this again</span>
        </label>

        <div className="flex gap-10 justify-end">
          <button
            onClick={onCancel}
            className="border-2 border-brand rounded-md px-20 py-10 text-text text-sm transition-colors duration-200 hover:bg-brand-2"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(dontShowAgain)}
            className="bg-brand border-2 border-brand rounded-md px-20 py-10 text-text-cta text-sm transition-colors duration-200"
          >
            Already know it →
          </button>
        </div>
      </div>
    </div>
  );
};

export { KnownWordDialog };
