import React from 'react';
import { CardType } from '@whitelotus/front-features';
import { CoachMark, AutoAdvanceDialog } from '@whitelotus/front-shared';

type CoachMarkSlot = { shown: boolean; dismiss: () => void };

type Props = {
  cardType: CardType;
  wordKey: string;
  answered: boolean | null;
  isReviewing: boolean;
  isWordIntroCard: boolean;
  isExerciseCard: boolean;
  onAdvance: (correct: boolean | null, retryCard?: { wordKey: string; cardType: Exclude<CardType, 'wordIntro'> }) => void;
  onReviewWord: () => void;
  onEndSession: () => void;
  onAlreadyKnow: () => void;
  wordIntroMark: CoachMarkSlot;
  exerciseMark: CoachMarkSlot;
  wrongMark: CoachMarkSlot;
  // 0 = auto-advance off for that outcome. Unrelated to hardcoreMode by
  // design — the two features are deliberately decoupled.
  autoAdvanceCorrectSeconds?: number;
  autoAdvanceWrongSeconds?: number;
};

const nextButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta text-sm px-40 py-10 transition-colors duration-300';

const SessionFooter: React.FC<Props> = ({
  cardType,
  wordKey,
  answered,
  isReviewing,
  isWordIntroCard,
  isExerciseCard,
  onAdvance,
  onReviewWord,
  onEndSession,
  onAlreadyKnow,
  wordIntroMark,
  exerciseMark,
  wrongMark,
  autoAdvanceCorrectSeconds = 0,
  autoAdvanceWrongSeconds = 0,
}) => {
  type FooterAction = { label: string; onClick: () => void };

  const showAnyMark = wordIntroMark.shown || exerciseMark.shown || wrongMark.shown;

  // The exercise-answered branch (not word-intro, not reviewing) is the only
  // one auto-advance applies to — word-intro/review "Got it →" are
  // read-at-your-own-pace, not "answered," and should never auto-fire.
  // Also suspended while any coach mark is showing: a coach mark exists to
  // make sure the learner consciously notices something (their first wrong
  // answer, how to lock in an answer, etc.) — popping the auto-advance
  // dialog over it before they've read or dismissed it would defeat that
  // entirely. The countdown starts fresh once they dismiss it.
  const isAnsweredExerciseCard = !isReviewing && cardType !== 'wordIntro' && answered !== null;
  const autoAdvanceSeconds = answered === false ? autoAdvanceWrongSeconds : autoAdvanceCorrectSeconds;
  const isAutoAdvancing = isAnsweredExerciseCard && autoAdvanceSeconds > 0 && !showAnyMark;

  const footerAction: FooterAction | null = isReviewing
    ? { label: 'Got it →', onClick: () => onAdvance(false, { wordKey, cardType: cardType as Exclude<CardType, 'wordIntro'> }) }
    : cardType === 'wordIntro'
    ? { label: 'Got it →', onClick: () => onAdvance(null) }
    : answered !== null
    ? {
        label: answered === false ? 'Review word →' : 'Next →',
        onClick: () => (answered === false ? onReviewWord() : onAdvance(answered)),
      }
    : null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-bg-l1 border-t-2 border-brand py-15 pl-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] pb-[max(6px,env(safe-area-inset-bottom))]">
      {isAutoAdvancing && footerAction && (
        <AutoAdvanceDialog
          message={answered === false ? 'Let\'s review this word before moving on.' : 'Nice work! Moving on to the next word…'}
          buttonLabel={footerAction.label}
          onAdvance={footerAction.onClick}
          seconds={autoAdvanceSeconds}
          variant={answered === false ? 'wrong' : 'correct'}
        />
      )}
      {showAnyMark && (
        <div className="max-w-4xl mx-auto mb-15 flex flex-col gap-10">
          {wordIntroMark.shown && isWordIntroCard && (
            <CoachMark
              text="Take your time reading. Tap Got it → when you're ready."
              onDismiss={wordIntroMark.dismiss}
            />
          )}
          {exerciseMark.shown && isExerciseCard && (
            <CoachMark
              text="Tap your answer to lock it in."
              onDismiss={exerciseMark.dismiss}
            />
          )}
          {wrongMark.shown && answered === false && (
            <CoachMark
              text="Tap Review word → to go back and reinforce the word before moving on."
              onDismiss={wrongMark.dismiss}
            />
          )}
        </div>
      )}
      <div className="max-w-4xl mx-auto grid grid-cols-3 items-center gap-10">
        <div>
          {cardType === 'wordIntro' && !isReviewing && (
            <button
              className="border-2 border-brand rounded-md text-text px-15 py-10 transition-colors duration-300 hover:bg-brand-2 text-sm"
              onClick={onAlreadyKnow}
            >
              Already know it
            </button>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className={`${nextButton} ${!footerAction ? 'invisible' : ''}`}
            onClick={footerAction?.onClick}
          >
            {footerAction?.label ?? 'Next →'}
          </button>
        </div>
        <div className="flex justify-end">
          <button
            className="text-text text-sm opacity-40 hover:opacity-80 transition-opacity duration-200"
            onClick={onEndSession}
          >
            End session
          </button>
        </div>
      </div>
    </div>
  );
};

export { SessionFooter };
