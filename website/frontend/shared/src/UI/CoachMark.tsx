import React, { useEffect, useRef, useState } from 'react';

type CoachMarkProps = {
  text: string;
  duration?: number;
  onDismiss: () => void;
};

const RADIUS = 15;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CoachMark: React.FC<CoachMarkProps> = ({ text, duration = 10000, onDismiss }) => {
  const [paused, setPaused] = useState(false);
  const remainingRef = useRef(duration);
  const segmentStartRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onDismissRef = useRef(onDismiss);
  useEffect(() => { onDismissRef.current = onDismiss; });

  const clearTimer = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // Start the JS countdown on mount, clean up on unmount.
  useEffect(() => {
    segmentStartRef.current = Date.now();
    timerRef.current = setTimeout(() => onDismissRef.current(), duration);
    return clearTimer;
  // duration is a mount-time constant; onDismiss captured via ref.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    clearTimer();
    if (segmentStartRef.current !== null) {
      remainingRef.current -= Date.now() - segmentStartRef.current;
      segmentStartRef.current = null;
    }
    setPaused(true);
  };

  const handleMouseLeave = () => {
    segmentStartRef.current = Date.now();
    timerRef.current = setTimeout(() => onDismissRef.current(), remainingRef.current);
    setPaused(false);
  };

  return (
    <>
      <style>{`@keyframes coach-ring{from{stroke-dashoffset:0}to{stroke-dashoffset:${CIRCUMFERENCE}}}`}</style>
      <div
        className="flex items-start gap-10 bg-bg-l2 border-2 border-brand rounded-md px-15 py-10 text-sm text-text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span aria-hidden="true">💡</span>
        <span className="flex-1">{text}</span>
        <button
          onClick={onDismiss}
          aria-label="Dismiss tip"
          className="relative shrink-0 flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
          style={{ width: 36, height: 36 }}
        >
          <svg
            viewBox="0 0 36 36"
            width="36"
            height="36"
            className="absolute inset-0 -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="18"
              cy="18"
              r={RADIUS}
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset="0"
              style={{
                animation: `coach-ring ${duration}ms linear forwards`,
                animationPlayState: paused ? 'paused' : 'running',
              }}
            />
          </svg>
          <span
            className="relative z-10 leading-none font-bold text-[#ef4444]"
            style={{ fontSize: 16, transform: 'translateY(-2px)' }}
            aria-hidden="true"
          >
            ×
          </span>
        </button>
      </div>
    </>
  );
};

export { CoachMark };
