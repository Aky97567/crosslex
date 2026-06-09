import React, { useState, useEffect } from 'react';
import {
  PaletteSwitcher,
  getInitialPalette,
  Palette,
  migrateStorage,
  WordTheme,
  readStreak,
  recordSessionForStreak,
  getNewlyEarnedBadge,
  Badge,
} from '@whitelotus/front-features';
import { AlphaAnnouncement, SessionDashboard, SessionComplete, AppNav, SettingsPanel, NotificationsDrawer, LearnPage, StreakMoment } from '@whitelotus/front-widgets';
import { SessionRunner } from '@whitelotus/front-pages-react';
import { sampleLearnPageContentList, SampleContentKey } from '@whitelotus/mock-test';

type AppPhase = 'dashboard' | 'running' | 'streak' | 'complete' | 'word-preview';

type RunnerStats = {
  wordsNew: number;
  wordsReviewed: number;
  cardsDone: number;
  correctCount: number;
};

type SessionStats = RunnerStats & { streakCount: number };

const App: React.FC = () => {
  const [phase, setPhase] = useState<AppPhase>('dashboard');
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [activeTheme, setActiveTheme] = useState<WordTheme | null>(null);
  const [sessionId, setSessionId] = useState(0);
  const [sessionStats, setSessionStats] = useState<SessionStats | null>(null);
  const [streakCount, setStreakCount] = useState(0);
  const [newBadge, setNewBadge] = useState<Badge | undefined>(undefined);
  const [previewWordKey, setPreviewWordKey] = useState<string | null>(null);
  const [palette, setPalette] = useState<Palette>(getInitialPalette);
  const [announcementDone, setAnnouncementDone] = useState(() => {
    try { return localStorage.getItem('crosslex:seen_build') !== null; } catch { return true; }
  });
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => { migrateStorage(); }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
  }, [palette]);

  const handleStart = (minutes: number, theme: WordTheme | null) => {
    setDurationMinutes(minutes);
    setActiveTheme(theme);
    setSessionId(Date.now());
    setPhase('running');
  };

  const handleComplete = (stats: RunnerStats) => {
    const prevBest = readStreak()?.bestCount ?? 0;
    const { data: streak, isNewDay } = recordSessionForStreak();
    setSessionStats({ ...stats, streakCount: streak.count });
    if (isNewDay) {
      setStreakCount(streak.count);
      setNewBadge(getNewlyEarnedBadge(prevBest, streak.count));
      setPhase('streak');
    } else {
      setPhase('complete');
    }
  };

  return (
    <div>
      <AlphaAnnouncement onAllDismissed={() => setAnnouncementDone(true)} />

      {phase === 'dashboard' && (
        <AppNav
          onBellClick={() => setIsNotificationsOpen(true)}
          onGearClick={() => setIsSettingsOpen(true)}
          onPaletteClick={() => setIsPaletteOpen(true)}
        />
      )}

      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <NotificationsDrawer isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />

      {phase === 'dashboard' && (
        <div className="pt-50">
          <SessionDashboard
            onStart={handleStart}
            onWordClick={(key) => { setPreviewWordKey(key); setPhase('word-preview'); }}
            coachMarksEnabled={announcementDone}
          />
        </div>
      )}

      {phase === 'word-preview' && previewWordKey && (() => {
        const content = sampleLearnPageContentList[previewWordKey as SampleContentKey]?.content;
        return content ? (
          <div className="max-w-4xl mx-auto px-20 py-20">
            <button
              onClick={() => setPhase('dashboard')}
              className="mb-20 text-text text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              ← Back to dashboard
            </button>
            <LearnPage content={content} />
          </div>
        ) : null;
      })()}

      {phase === 'running' && (
        <SessionRunner
          key={sessionId}
          sessionId={sessionId}
          durationMinutes={durationMinutes}
          theme={activeTheme}
          onComplete={handleComplete}
        />
      )}

      {phase === 'streak' && (
        <StreakMoment
          streakCount={streakCount}
          newBadge={newBadge}
          onContinue={() => setPhase('complete')}
        />
      )}

      {phase === 'complete' && sessionStats && (
        <SessionComplete
          {...sessionStats}
          onDone={() => setPhase('dashboard')}
        />
      )}

      {/* Palette overlay */}
      {isPaletteOpen && (
        <div
          className="fixed inset-0 z-30 bg-dark flex flex-col items-center justify-center"
          onClick={() => setIsPaletteOpen(false)}
        >
          <div className="mx-20" onClick={(e) => e.stopPropagation()}>
            <PaletteSwitcher active={palette} onChange={setPalette} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
