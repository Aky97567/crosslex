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
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...seen]));
  } catch {}
};

const hasSeenCoachMark = (key: string): boolean => readSeenMarks().has(key);

const useCoachMark = (key: string) => {
  const [shown, setShown] = useState(() => !hasSeenCoachMark(key));

  const dismiss = useCallback(() => {
    markCoachMarkSeen(key);
    setShown(false);
  }, [key]);

  return { shown, dismiss };
};

export { hasSeenCoachMark, markCoachMarkSeen, useCoachMark };
