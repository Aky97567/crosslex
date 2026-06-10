import React, { useState } from 'react';
import { Card, Badge } from '@whitelotus/front-shared';
import {
  WordReadiness,
  useCrosslexStorage,
} from '@whitelotus/front-features';
import { WordReadinessStat } from '@whitelotus/front-entities';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordIntroModule } from '@whitelotus/common-crosslex-view';

const getWordIntro = (wordKey: string): WordIntroModule | null => {
  const data = sampleLearnPageContentList[wordKey as keyof typeof sampleLearnPageContentList];
  if (!data) return null;
  return data.content.modules.find((m): m is WordIntroModule => m.moduleType === 'wordIntro') ?? null;
};

const LEVEL_LABELS: Record<WordReadiness, string> = {
  seedPlanted: 'Seed planted',
  familiar: 'Familiar',
  testReady: 'Test-ready',
};

type Props = { onWordClick?: (wordKey: string) => void };

const WordMetricsPanel: React.FC<Props> = ({ onWordClick }) => {
  const [selected, setSelected] = useState<WordReadiness | null>(null);
  const { exerciseLog, metricsSummary, wordMetrics, streak, practicedToday } = useCrosslexStorage();

  const total = new Set(exerciseLog.filter(e => e.type === 'intro').map(e => e.wordKey)).size;

  if (total === 0) return null;

  const { seedPlanted, familiar, testReady } = metricsSummary;
  const metrics = wordMetrics;

  const toggle = (level: WordReadiness) =>
    setSelected(prev => (prev === level ? null : level));

  const wordsAtLevel = selected
    ? Object.entries(metrics).filter(([, l]) => l === selected).map(([key]) => key).sort()
    : [];

  return (
    <Card heading={{ level: 'h2', text: 'Your progress' }}>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <WordReadinessStat
          count={seedPlanted}
          label="Seed planted"
          sublabel="introduced"
          active={selected === 'seedPlanted'}
          onClick={() => toggle('seedPlanted')}
        />
        <WordReadinessStat
          count={familiar}
          label="Familiar"
          sublabel="≥2 correct"
          active={selected === 'familiar'}
          onClick={() => toggle('familiar')}
        />
        <WordReadinessStat
          count={testReady}
          label="Test-ready"
          sublabel="≥4 correct"
          active={selected === 'testReady'}
          onClick={() => toggle('testReady')}
        />
      </div>

      {selected && (
        <div className="mt-20 border-t-2 border-brand pt-15">
          <p className="text-text text-sm font-semibold mb-10 opacity-70">
            {LEVEL_LABELS[selected]} ({wordsAtLevel.length})
          </p>
          <ul className="flex flex-wrap gap-10">
            {wordsAtLevel.map(key => {
              const intro = getWordIntro(key);
              return (
                <li key={key}>
                  {onWordClick ? (
                    <button onClick={() => onWordClick(key)} className="cursor-pointer">
                      <Badge>{intro ? intro.word : key}</Badge>
                    </button>
                  ) : (
                    <Badge>{intro ? intro.word : key}</Badge>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <p className="text-text text-sm opacity-60 text-center mt-20">
        {total} word{total !== 1 ? 's' : ''} introduced
        {streak && streak.count > 0 && (
          <span className="ml-10 opacity-100">
            · {streak.count}-day streak{practicedToday ? ' ✓' : ''}
          </span>
        )}
      </p>
    </Card>
  );
};

export { WordMetricsPanel };
