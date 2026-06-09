import { useCallback, useEffect, useRef } from 'react';

export const useInactivityTimer = (timeoutMs: number, onTimeout: () => void) => {
  // Always call the latest onTimeout without restarting the timer on every render
  const onTimeoutRef = useRef(onTimeout);
  onTimeoutRef.current = onTimeout;

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetInactivityTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onTimeoutRef.current(), timeoutMs);
  }, [timeoutMs]);

  useEffect(() => {
    resetInactivityTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [resetInactivityTimer]);

  return { resetInactivityTimer };
};
