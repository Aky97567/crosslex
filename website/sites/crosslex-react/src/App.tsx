import React, { useState } from 'react';
import { sampleLearnPageContentList, Words } from '@whitelotus/mock-test';
import { LearnPageView } from '@whitelotus/front-pages-react';

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const key = Words[index];
  const { content } = sampleLearnPageContentList[key];

  return (
    <div>
      <LearnPageView key={key} content={content} />
      <nav className="flex items-center justify-center gap-40 p-40">
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
      </nav>
    </div>
  );
};

export default App;
