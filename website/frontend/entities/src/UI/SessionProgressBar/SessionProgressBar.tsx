import React from 'react';

const formatTime = (ms: number): string => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

type Props = {
  elapsed: number;
  durationMs: number;
};

const SessionProgressBar: React.FC<Props> = ({ elapsed, durationMs }) => {
  const progressPct = Math.min(100, (elapsed / durationMs) * 100);

  return (
    <div className="flex items-center gap-15 mb-20">
      <span className="text-text text-sm tabular-nums w-60">{formatTime(elapsed)}</span>
      <div className="flex-1 h-6 bg-bg-l2 rounded-full overflow-hidden border border-brand">
        <div
          className="h-full bg-brand transition-all duration-1000"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <span className="text-text text-sm tabular-nums w-60 text-right">
        {formatTime(durationMs)}
      </span>
    </div>
  );
};

export { SessionProgressBar };
