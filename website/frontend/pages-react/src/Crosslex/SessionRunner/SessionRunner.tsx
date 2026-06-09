import React, { useRef } from 'react';
import { sampleLearnPageContentList, SampleContentKey } from '@whitelotus/mock-test';
import { WordTheme } from '@whitelotus/front-features';
import { SessionProgressBar } from '@whitelotus/front-entities';
import {
  useSessionTimer,
  useInactivityTimer,
  useSessionState,
  readSessionTimeout,
  addKnownWord,
  readKnownWordConfirmed,
  writeKnownWordConfirmed,
  useCoachMark,
  RunnerStats,
} from '@whitelotus/front-features';
import { SessionCardRenderer } from './SessionCardRenderer/SessionCardRenderer';
import { SessionFooter } from './SessionFooter/SessionFooter';
import { KnownWordDialog } from './KnownWordDialog';

type Props = {
  sessionId: number;
  durationMinutes: number;
  theme?: WordTheme | null;
  onComplete: (stats: RunnerStats) => void;
};

const SessionRunner: React.FC<Props> = ({ sessionId, durationMinutes, theme, onComplete }) => {
  const durationMs = durationMinutes * 60 * 1000;
  const sessionTimeoutMs = useRef(readSessionTimeout() * 60 * 1000);

  const { elapsed, startedAt } = useSessionTimer(durationMs);

  const {
    runner,
    answered,
    reviewWordKey,
    setReviewWordKey,
    pendingKnownWordKey,
    setPendingKnownWordKey,
    handleAnswer,
    advance,
  } = useSessionState({ sessionId, durationMs, theme, onComplete, startedAt });

  const runnerRef = useRef(runner);
  runnerRef.current = runner;

  const { resetInactivityTimer } = useInactivityTimer(sessionTimeoutMs.current, () => {
    const r = runnerRef.current;
    onComplete({ wordsNew: r.wordsNew, wordsReviewed: r.wordsReviewed, cardsDone: r.cardsDone, correctCount: r.correctCount });
  });

  const onAnswer = (correct: boolean) => { resetInactivityTimer(); handleAnswer(correct); };
  const onAdvance: typeof advance = (correct, retryCard) => { resetInactivityTimer(); advance(correct, retryCard); };

  const wordContent = sampleLearnPageContentList[runner.wordKey as SampleContentKey]?.content;
  const reviewContent = reviewWordKey
    ? sampleLearnPageContentList[reviewWordKey as SampleContentKey]?.content ?? null
    : null;

  const isWordIntroCard = runner.cardType === 'wordIntro' && !reviewContent;
  const isExerciseCard = runner.cardType !== 'wordIntro' && !reviewContent;

  const { shown: showWordIntroMark, dismiss: dismissWordIntroMark } = useCoachMark('first-word-intro');
  const { shown: showExerciseMark, dismiss: dismissExerciseMark } = useCoachMark('first-exercise');
  const { shown: showWrongMark, dismiss: dismissWrongMark } = useCoachMark('first-wrong-answer');

  return (
    <div className="max-w-4xl mx-auto px-20 py-20 pb-[120px]">
      <SessionProgressBar elapsed={elapsed} durationMs={durationMs} />

      <SessionCardRenderer
        runner={runner}
        wordContent={wordContent}
        reviewContent={reviewContent}
        reviewWordKey={reviewWordKey}
        onAnswer={onAnswer}
      />

      <SessionFooter
        cardType={runner.cardType}
        wordKey={runner.wordKey}
        answered={answered}
        isReviewing={!!reviewContent}
        isWordIntroCard={isWordIntroCard}
        isExerciseCard={isExerciseCard}
        onAdvance={onAdvance}
        onReviewWord={() => setReviewWordKey(runner.wordKey)}
        onEndSession={() => onComplete({ wordsNew: runner.wordsNew, wordsReviewed: runner.wordsReviewed, cardsDone: runner.cardsDone, correctCount: runner.correctCount })}
        onAlreadyKnow={() => {
          resetInactivityTimer();
          if (readKnownWordConfirmed()) {
            addKnownWord(runner.wordKey);
            onAdvance(null);
          } else {
            setPendingKnownWordKey(runner.wordKey);
          }
        }}
        wordIntroMark={{ shown: showWordIntroMark, dismiss: dismissWordIntroMark }}
        exerciseMark={{ shown: showExerciseMark, dismiss: dismissExerciseMark }}
        wrongMark={{ shown: showWrongMark, dismiss: dismissWrongMark }}
      />

      {pendingKnownWordKey && (
        <KnownWordDialog
          onConfirm={(dontShowAgain) => {
            addKnownWord(pendingKnownWordKey);
            if (dontShowAgain) writeKnownWordConfirmed();
            setPendingKnownWordKey(null);
            onAdvance(null);
          }}
          onCancel={() => setPendingKnownWordKey(null)}
        />
      )}
    </div>
  );
};

export { SessionRunner };
