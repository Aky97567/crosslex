import React, { useState } from 'react';
import { Card, Badge, SelectableCard } from '@whitelotus/front-shared';
import {
  readExerciseLog,
  getMetricsSummary,
  computeWordMetrics,
  WordReadiness,
  readStreak,
  hasSessionToday,
  BADGES,
  getEarnedBadges,
} from '@whitelotus/front-features';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordIntroModule } from '@whitelotus/common-crosslex-view';
import { BadgeIcon } from '../StreakMoment/StreakMoment';

const getWordIntro = (wordKey: string): WordIntroModule | null => {
  const data =
    sampleLearnPageContentList[
      wordKey as keyof typeof sampleLearnPageContentList
    ];
  if (!data) return null;
  return (
    data.content.modules.find(
      (m): m is WordIntroModule => m.moduleType === 'wordIntro',
    ) ?? null
  );
};

type StatProps = {
  count: number;
  label: string;
  sublabel: string;
  active: boolean;
  onClick: () => void;
};

const Stat: React.FC<StatProps> = ({
  count,
  label,
  sublabel,
  active,
  onClick,
}) => (
  <SelectableCard
    active={active}
    onClick={onClick}
    bordered={false}
    className="text-center"
  >
    <span className="block text-4xl font-bold text-brand group-hover:text-text-cta group-data-[active=true]:text-text-cta">{count}</span>
    <span className="block font-semibold mt-4">{label}</span>
    <span className="block text-sm opacity-60">{sublabel}</span>
  </SelectableCard>
);

const LEVEL_LABELS: Record<WordReadiness, string> = {
  seedPlanted: 'Seed planted',
  familiar: 'Familiar',
  testReady: 'Test-ready',
};

type Props = { onWordClick?: (wordKey: string) => void };

const WordMetricsPanel: React.FC<Props> = ({ onWordClick }) => {
  const [selected, setSelected] = useState<WordReadiness | null>(null);
  const [badgesExpanded, setBadgesExpanded] = useState(false);

  const log = readExerciseLog();
  const total = new Set(log.filter(e => e.type === 'intro').map(e => e.wordKey))
    .size;

  if (total === 0) return null;

  const { seedPlanted, familiar, testReady } = getMetricsSummary(log);
  const metrics = computeWordMetrics(log);

  const streak = readStreak();
  const practicedToday = hasSessionToday();
  const earnedBadges = streak ? getEarnedBadges(streak.bestCount) : [];

  const toggle = (level: WordReadiness) =>
    setSelected(prev => (prev === level ? null : level));

  const wordsAtLevel = selected
    ? Object.entries(metrics)
        .filter(([, level]) => level === selected)
        .map(([key]) => key)
        .sort()
    : [];

  return (
    <Card heading={{ level: 'h2', text: 'Your progress' }}>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <Stat
          count={seedPlanted}
          label="Seed planted"
          sublabel="introduced"
          active={selected === 'seedPlanted'}
          onClick={() => toggle('seedPlanted')}
        />
        <Stat
          count={familiar}
          label="Familiar"
          sublabel="≥2 correct"
          active={selected === 'familiar'}
          onClick={() => toggle('familiar')}
        />
        <Stat
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

      {/* Badges section */}
      <div className="mt-20 border-t-2 border-brand pt-15">
        <button
          onClick={() => setBadgesExpanded(p => !p)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-text text-sm font-semibold opacity-70">
            Badges {earnedBadges.length > 0 && `(${earnedBadges.length} earned)`}
          </span>
          <span className="text-text text-sm opacity-50">{badgesExpanded ? '▴' : '▾'}</span>
        </button>
        {badgesExpanded && (
          <div className="mt-15 flex flex-wrap gap-20 justify-center">
            {BADGES.map(badge => (
              <BadgeIcon
                key={badge.days}
                earned={earnedBadges.some(b => b.days === badge.days)}
                name={badge.name}
                days={badge.days}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer: words count + streak */}
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
