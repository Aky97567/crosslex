import { useState, useCallback } from 'react';

const STORAGE_KEY = 'crosslex:coach_marks';

const readSeenMarks = (): Set<string> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return new Set(parsed as string[]);
  } catch {}
  return new Set();
};

const markCoachMarkSeen = (key: string): void => {
  try {
    const seen = readSeenMarks();
    seen.add(key);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(seen)));
  } catch {}
};

const hasSeenCoachMark = (key: string): boolean => readSeenMarks().has(key);

const useCoachMark = (key: string) => {
  const [hasBeenDismissed, setHasBeenDismissed] = useState(() => hasSeenCoachMark(key));

  const dismiss = useCallback(() => {
    markCoachMarkSeen(key);
    setHasBeenDismissed(true);
  }, [key]);

  return { hasBeenDismissed, dismiss };
};

export { hasSeenCoachMark, markCoachMarkSeen, useCoachMark };
