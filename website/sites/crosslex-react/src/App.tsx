import React, { useState, useEffect } from 'react';
import { sampleLearnPageContentList, Words } from '@whitelotus/mock-test';
import { LearnPageView } from '@whitelotus/front-pages-react';
import {
  PaletteSwitcher,
  getInitialPalette,
  Palette,
} from '@whitelotus/front-features';
import { Card } from '@whitelotus/front-shared';

const ctaButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300 disabled:opacity-40';

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [palette, setPalette] = useState<Palette>(getInitialPalette);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
  }, [palette]);

  const key = Words[index];
  const { content } = sampleLearnPageContentList[key];

  const handlePaletteChange = (p: Palette) => {
    setPalette(p);
    setIsPaletteOpen(false);
  };

  return (
    <div className="pb-130 md:pb-0">
      <LearnPageView key={key} content={content} />

      {/* Desktop nav */}
      <nav className="hidden md:flex flex-col items-center gap-20 p-40">
        <PaletteSwitcher active={palette} onChange={setPalette} />
        <div className="flex items-center gap-40">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
          >
            ← Prev
          </button>
          <span>
            {key} ({index + 1} / {Words.length})
          </span>
          <button
            onClick={() => setIndex((i) => Math.min(Words.length - 1, i + 1))}
            disabled={index === Words.length - 1}
          >
            Next →
          </button>
        </div>
      </nav>

      {/* Mobile footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 bg-bg-l2 border-t-2 border-brand md:hidden">
        <div className="flex flex-col items-center gap-10 p-15">
          <button
            onClick={() => setIsPaletteOpen(true)}
            className={ctaButton}
          >
            Theme: {palette}
          </button>
          <div className="flex items-center gap-40">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className={ctaButton}
            >
              ← Prev
            </button>
            <span className="text-text text-sm">
              {key} ({index + 1} / {Words.length})
            </span>
            <button
              onClick={() =>
                setIndex((i) => Math.min(Words.length - 1, i + 1))
              }
              disabled={index === Words.length - 1}
              className={ctaButton}
            >
              Next →
            </button>
          </div>
        </div>
      </footer>

      {/* Palette overlay (mobile only) */}
      {isPaletteOpen && (
        <div
          className="fixed inset-0 z-30 bg-dark flex flex-col items-center justify-center md:hidden"
          onClick={() => setIsPaletteOpen(false)}
        >
          <div className="mx-20" onClick={(e) => e.stopPropagation()}>
            <Card
              heading={{ level: 'h2', text: 'Theme' }}
              needClose
              onClose={() => setIsPaletteOpen(false)}
            >
              <PaletteSwitcher active={palette} onChange={handlePaletteChange} />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
