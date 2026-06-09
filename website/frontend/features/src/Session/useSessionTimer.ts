import { useEffect, useRef, useState } from 'react';

export const useSessionTimer = (durationMs: number) => {
  const startedAt = useRef(Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(Date.now() - startedAt.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const progressPct = Math.min(100, (elapsed / durationMs) * 100);

  return { elapsed, progressPct, startedAt };
};
