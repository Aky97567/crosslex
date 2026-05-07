import React, { useState, useEffect } from 'react';
import {
  PaletteSwitcher,
  getInitialPalette,
  Palette,
  migrateStorage,
} from '@whitelotus/front-features';
import { AlphaAnnouncement, SessionDashboard, SessionRunner, SessionComplete, AppNav, SettingsPanel, NotificationsDrawer } from '@whitelotus/front-widgets';

type AppPhase = 'dashboard' | 'running' | 'complete';

type SessionStats = {
  wordsNew: number;
  wordsReviewed: number;
  cardsDone: number;
  correctCount: number;
};

const App: React.FC = () => {
  const [phase, setPhase] = useState<AppPhase>('dashboard');
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [sessionId, setSessionId] = useState(0);
  const [sessionStats, setSessionStats] = useState<SessionStats | null>(null);
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

  const handleStart = (minutes: number) => {
    setDurationMinutes(minutes);
    setSessionId(Date.now());
    setPhase('running');
  };

  const handleComplete = (stats: SessionStats) => {
    setSessionStats(stats);
    setPhase('complete');
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
          <SessionDashboard onStart={handleStart} coachMarksEnabled={announcementDone} />
        </div>
      )}

      {phase === 'running' && (
        <SessionRunner
          key={sessionId}
          sessionId={sessionId}
          durationMinutes={durationMinutes}
          onComplete={handleComplete}
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
