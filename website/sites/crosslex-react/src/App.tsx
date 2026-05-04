import React, { useState, useEffect } from 'react';
import { sampleLearnPageContentList, Words } from '@whitelotus/mock-test';
import { LearnPageView } from '@whitelotus/front-pages-react';
import {
  PaletteSwitcher,
  getInitialPalette,
  Palette,
} from '@whitelotus/front-features';

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [palette, setPalette] = useState<Palette>(getInitialPalette);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
  }, [palette]);

  const key = Words[index];
  const { content } = sampleLearnPageContentList[key];

  return (
    <div>
      <LearnPageView key={key} content={content} />
      <nav className="flex flex-col items-center gap-20 p-40">
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
    </div>
  );
};

export default App;
