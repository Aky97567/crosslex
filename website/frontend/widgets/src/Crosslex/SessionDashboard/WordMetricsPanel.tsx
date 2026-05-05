import React, { useState } from 'react';
import { Card } from '@whitelotus/front-shared';
import {
  readExerciseLog,
  getMetricsSummary,
  computeWordMetrics,
  WordReadiness,
} from '@whitelotus/front-features';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordIntroModule } from '@whitelotus/common-crosslex-view';

const getWordIntro = (wordKey: string): WordIntroModule | null => {
  const data = sampleLearnPageContentList[wordKey as keyof typeof sampleLearnPageContentList];
  if (!data) return null;
  return (data.content.modules.find((m): m is WordIntroModule => m.moduleType === 'wordIntro') ?? null);
};

type StatProps = {
  count: number;
  label: string;
  sublabel: string;
  active: boolean;
  onClick: () => void;
};

const Stat: React.FC<StatProps> = ({ count, label, sublabel, active, onClick }) => (
  <button
    onClick={onClick}
    className={`text-center w-full rounded-md py-12 px-8 transition-colors duration-200 border-2 cursor-pointer ${
      active ? 'border-brand bg-brand-2' : 'border-transparent hover:bg-brand-2'
    }`}
  >
    <span className="block text-4xl font-bold text-brand">{count}</span>
    <span className="block text-text font-semibold mt-4">{label}</span>
    <span className="block text-text text-sm opacity-60">{sublabel}</span>
  </button>
);

const LEVEL_LABELS: Record<WordReadiness, string> = {
  seedPlanted: 'Seed planted',
  familiar: 'Familiar',
  testReady: 'Test-ready',
};

const WordMetricsPanel: React.FC = () => {
  const [selected, setSelected] = useState<WordReadiness | null>(null);

  const log = readExerciseLog();
  const total = new Set(log.filter((e) => e.type === 'intro').map((e) => e.wordKey)).size;

  if (total === 0) return null;

  const { seedPlanted, familiar, testReady } = getMetricsSummary(log);
  const metrics = computeWordMetrics(log);

  const toggle = (level: WordReadiness) =>
    setSelected((prev) => (prev === level ? null : level));

  const wordsAtLevel = selected
    ? Object.entries(metrics)
        .filter(([, level]) => level === selected)
        .map(([key]) => key)
        .sort()
    : [];

  return (
    <Card heading={{ level: 'h2', text: 'Your progress' }}>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <Stat count={seedPlanted} label="Seed planted" sublabel="introduced" active={selected === 'seedPlanted'} onClick={() => toggle('seedPlanted')} />
        <Stat count={familiar} label="Familiar" sublabel="≥2 correct" active={selected === 'familiar'} onClick={() => toggle('familiar')} />
        <Stat count={testReady} label="Test-ready" sublabel="≥4 correct" active={selected === 'testReady'} onClick={() => toggle('testReady')} />
      </div>

      {selected && (
        <div className="mt-20 border-t-2 border-brand pt-15">
          <p className="text-text text-sm font-semibold mb-10 opacity-70">
            {LEVEL_LABELS[selected]} ({wordsAtLevel.length})
          </p>
          <ul className="flex flex-wrap gap-10">
            {wordsAtLevel.map((key) => {
              const intro = getWordIntro(key);
              return (
                <li
                  key={key}
                  className="bg-bg-l2 border border-brand rounded-md p-5 text-sm text-text"
                >
                  {intro ? intro.word : key}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <p className="text-text text-sm opacity-60 text-center mt-20">
        {total} word{total !== 1 ? 's' : ''} introduced total
      </p>
    </Card>
  );
};

export { WordMetricsPanel };
