import React, { useState } from 'react';
import { readKnownWords, removeKnownWord } from '@whitelotus/front-features';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordIntroModule } from '@whitelotus/common-crosslex-view';
import { SectionHeading } from './SettingsPrimitives';

const getWordLabel = (wordKey: string): string => {
  const data = sampleLearnPageContentList[wordKey as keyof typeof sampleLearnPageContentList];
  if (!data) return wordKey;
  const intro = data.content.modules.find((m): m is WordIntroModule => m.moduleType === 'wordIntro');
  if (!intro) return wordKey;
  const label = intro.displayName ?? intro.word;
  return intro.article ? `${intro.article} ${label}` : label;
};

export const KnownWordsSection: React.FC = () => {
  const [knownWords, setKnownWords] = useState<string[]>(() => readKnownWords());

  const handleRemove = (wordKey: string) => {
    removeKnownWord(wordKey);
    setKnownWords((prev) => prev.filter((k) => k !== wordKey));
  };

  return (
    <div>
      <SectionHeading>Known words</SectionHeading>
      {knownWords.length === 0 ? (
        <p className="text-text text-sm opacity-60">
          No known words yet. Mark words as known during a session to skip them in future.
        </p>
      ) : (
        <ul className="space-y-8">
          {knownWords.map((key) => (
            <li key={key} className="flex items-center justify-between">
              <span className="text-text text-sm">{getWordLabel(key)}</span>
              <button
                onClick={() => handleRemove(key)}
                className="text-text text-sm opacity-50 hover:opacity-100 hover:text-brand transition-colors duration-200"
                aria-label={`Remove ${getWordLabel(key)}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
