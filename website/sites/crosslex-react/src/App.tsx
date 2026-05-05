import React, { useState, useEffect } from 'react';
import {
  PaletteSwitcher,
  getInitialPalette,
  Palette,
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
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

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

  const ctaButton =
    'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300 disabled:opacity-40';

  return (
    <div className={`${phase === 'dashboard' ? 'pb-130' : ''} md:pb-0`}>
      <AlphaAnnouncement />

      {phase === 'dashboard' && (
        <AppNav
          onBellClick={() => setIsNotificationsOpen(true)}
          onGearClick={() => setIsSettingsOpen(true)}
        />
      )}

      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <NotificationsDrawer isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />

      {phase === 'dashboard' && (
        <div className="pt-50">
          <SessionDashboard onStart={handleStart} />
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

      {/* Mobile footer — palette only, dashboard only */}
      {phase === 'dashboard' && (
        <footer className="fixed bottom-0 left-0 right-0 z-20 bg-bg-l2 border-t-2 border-brand md:hidden">
          <div className="flex justify-center p-15">
            <button onClick={() => setIsPaletteOpen(true)} className={ctaButton}>
              Theme: {palette}
            </button>
          </div>
        </footer>
      )}

      {/* Desktop palette switcher */}
      <div className="hidden md:flex justify-center p-20">
        <PaletteSwitcher active={palette} onChange={setPalette} />
      </div>

      {/* Palette overlay (mobile only) */}
      {isPaletteOpen && (
        <div
          className="fixed inset-0 z-30 bg-dark flex flex-col items-center justify-center md:hidden"
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
