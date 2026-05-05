import React from 'react';
import { CHANGELOG, CURRENT_BUILD_ID } from '../AlphaAnnouncement/changelog';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const parseDateFromBuildId = (buildId: string): string => {
  const match = buildId.match(/alpha-(\d{4}-\d{2}-\d{2})/);
  if (!match) return buildId;
  const [year, month, day] = match[1].split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const NotificationsDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const entries = Object.entries(CHANGELOG);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-dark opacity-50" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 right-0 h-full z-40 w-full bg-bg-l1 border-l-2 border-brand shadow-lg flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ maxWidth: '380px' }}
      >
        <div className="flex items-center justify-between px-20 h-50 border-b-2 border-brand bg-bg-l2 shrink-0">
          <span className="text-text font-semibold">Release notes</span>
          <button
            onClick={onClose}
            className="text-text hover:text-brand transition-colors duration-200 text-sm leading-none"
            aria-label="Close notifications"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-20 py-20 space-y-30">
          {entries.map(([buildId, entry]) => {
            const { body, changes } = entry.returningUser;
            const isLatest = buildId === CURRENT_BUILD_ID;

            return (
              <div key={buildId}>
                <div className="flex items-center gap-10 mb-8">
                  <span className="text-text text-sm opacity-50">
                    {parseDateFromBuildId(buildId)}
                  </span>
                  {isLatest && (
                    <span className="text-xs bg-brand text-text-cta rounded-md px-8 py-5 font-semibold leading-none">
                      Latest
                    </span>
                  )}
                </div>
                <p className="text-text font-semibold mb-10">{body}</p>
                {changes.length > 0 && (
                  <ul className="space-y-5">
                    {changes.map((change, i) => (
                      <li key={i} className="text-text text-sm opacity-70 flex gap-8">
                        <span className="text-brand shrink-0">–</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { NotificationsDrawer };
