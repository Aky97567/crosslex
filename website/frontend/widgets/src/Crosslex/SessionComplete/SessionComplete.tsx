import React from 'react';
import { Card } from '@whitelotus/front-shared';

const ctaButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300 mt-20';

type Props = {
  wordsNew: number;
  wordsReviewed: number;
  cardsDone: number;
  correctCount: number;
  streakCount?: number;
  onDone: () => void;
};

const SessionComplete: React.FC<Props> = ({
  wordsNew,
  wordsReviewed,
  cardsDone,
  correctCount,
  streakCount,
  onDone,
}) => {
  const accuracy =
    cardsDone > 0 ? Math.round((correctCount / cardsDone) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto px-20 py-40">
      <Card heading={{ level: 'h1', text: 'Session complete' }}>
        <div className="flex flex-col gap-10 text-text mb-20">
          <p>New words introduced: <span className="font-bold">{wordsNew}</span></p>
          <p>Words reviewed: <span className="font-bold">{wordsReviewed}</span></p>
          <p>Cards completed: <span className="font-bold">{cardsDone}</span></p>
          <p>Accuracy: <span className="font-bold">{accuracy}%</span></p>
          {streakCount && streakCount > 0 && (
            <p>Streak: <span className="font-bold">{streakCount} {streakCount === 1 ? 'day' : 'days'}</span></p>
          )}
        </div>
        <div className="flex justify-center">
          <button className={ctaButton} onClick={onDone}>
            Done
          </button>
        </div>
      </Card>
    </div>
  );
};

export { SessionComplete };
