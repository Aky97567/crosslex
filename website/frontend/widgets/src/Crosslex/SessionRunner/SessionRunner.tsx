import React, { useState, useEffect, useCallback, useRef } from 'react';
import { sampleLearnPageContentList, Words, SampleContentKey } from '@whitelotus/mock-test';
import {
  MeaningGuessQuestion,
  ContextBlankQuestion,
  WordDefinitionQuestion,
} from '@whitelotus/front-entities';
import {
  writeWordsSeen,
  updateWordStats,
  seedWordStats,
  readLearningRate,
  appendExerciseEvent,
  pickNextCard,
  generateExerciseDataSafe,
  readKnownWords,
  addKnownWord,
  readKnownWordConfirmed,
  writeKnownWordConfirmed,
  readSessionTimeout,
  healWordsSeen,
  WordsSeenStore,
  CardType,
  ExerciseData,
} from '@whitelotus/front-features';
import { LearnPage } from '../LearnPage';
import { KnownWordDialog } from './KnownWordDialog';

const nextButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300';

type RunnerState = {
  cardKey: number;
  wordKey: string;
  cardType: CardType;
  exerciseData: ExerciseData | null;
  lastIntroducedWordKey: string | null;
  exercisesSinceLastIntro: number;
  cardsDone: number;
  correctCount: number;
  wordsNew: number;
  wordsReviewed: number;
};

type Props = {
  sessionId: number;
  durationMinutes: number;
  onComplete: (stats: {
    wordsNew: number;
    wordsReviewed: number;
    cardsDone: number;
    correctCount: number;
  }) => void;
};

const formatTime = (ms: number): string => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const getActiveWords = () => {
  const known = new Set(readKnownWords());
  return Words.filter((w) => !known.has(w));
};

const buildInitialCard = (
  wordStats: WordsSeenStore,
  learningRate: ReturnType<typeof readLearningRate>,
  sessionDurationMs: number,
): { wordKey: string; cardType: CardType; exerciseData: ExerciseData | null } => {
  const activeWords = getActiveWords();
  const { wordKey, cardType } = pickNextCard(
    activeWords,
    wordStats,
    { lastIntroducedWordKey: null, exercisesSinceLastIntro: 0, sessionDurationMs },
    learningRate,
    sampleLearnPageContentList,
  );
  const exerciseData =
    cardType !== 'wordIntro'
      ? generateExerciseDataSafe(wordKey, cardType, activeWords, sampleLearnPageContentList)
      : null;
  return { wordKey, cardType, exerciseData };
};

const SessionRunner: React.FC<Props> = ({ sessionId, durationMinutes, onComplete }) => {
  const durationMs = durationMinutes * 60 * 1000;
  const startedAt = useRef(Date.now());
  const learningRate = useRef(readLearningRate());

  const sessionTimeoutMs = useRef(readSessionTimeout() * 60 * 1000);
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [wordStats, setWordStats] = useState<WordsSeenStore>(() => healWordsSeen(Words));
  const [elapsed, setElapsed] = useState(0);
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [reviewWordKey, setReviewWordKey] = useState<string | null>(null);
  const [pendingKnownWordKey, setPendingKnownWordKey] = useState<string | null>(null);

  const initialCard = useRef(buildInitialCard(wordStats, learningRate.current, durationMs));

  const [runner, setRunner] = useState<RunnerState>(() => {    const card = initialCard.current;
    return {
      cardKey: 0,
      ...card,
      lastIntroducedWordKey: card.cardType === 'wordIntro' ? card.wordKey : null,
      exercisesSinceLastIntro: card.cardType === 'wordIntro' ? 0 : 1,
      cardsDone: 0,
      correctCount: 0,
      wordsNew: card.cardType === 'wordIntro' ? 1 : 0,
      wordsReviewed: card.cardType !== 'wordIntro' ? 1 : 0,
    };
  });

  const runnerRef = useRef(runner);
  useEffect(() => { runnerRef.current = runner; }, [runner]);

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(Date.now() - startedAt.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = setTimeout(() => {
      const r = runnerRef.current;
      onComplete({
        wordsNew: r.wordsNew,
        wordsReviewed: r.wordsReviewed,
        cardsDone: r.cardsDone,
        correctCount: r.correctCount,
      });
    }, sessionTimeoutMs.current);
  }, [onComplete]);

  useEffect(() => {
    resetInactivityTimer();
    return () => { if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current); };
  }, [resetInactivityTimer]);

  const handleAnswer = useCallback((correct: boolean) => {
    setAnswered(correct);
    resetInactivityTimer();
  }, [resetInactivityTimer]);

  const advance = useCallback(
    (correct: boolean | null) => {
      resetInactivityTimer();
      setRunner((prev) => {
        const isExercise = prev.cardType !== 'wordIntro';
        const newCardsDone = isExercise ? prev.cardsDone + 1 : prev.cardsDone;
        const newCorrectCount =
          isExercise && correct ? prev.correctCount + 1 : prev.correctCount;

        let nextWordStats = wordStats;

        if (isExercise && correct !== null) {
          nextWordStats = updateWordStats(wordStats, prev.wordKey, correct);
          appendExerciseEvent({
            ts: Date.now(),
            sessionId,
            wordKey: prev.wordKey,
            type: 'exercise',
            exerciseType: prev.cardType as 'meaningGuess' | 'contextBlank' | 'wordDefinition',
            correct,
          });
        } else if (!isExercise) {
          nextWordStats = seedWordStats(wordStats, prev.wordKey);
          appendExerciseEvent({
            ts: Date.now(),
            sessionId,
            wordKey: prev.wordKey,
            type: 'intro',
          });
        }

        if (nextWordStats !== wordStats) {
          writeWordsSeen(nextWordStats);
          setWordStats(nextWordStats);
        }

        const nowElapsed = Date.now() - startedAt.current;
        if (nowElapsed >= durationMs) {
          onComplete({
            wordsNew: prev.wordsNew,
            wordsReviewed: prev.wordsReviewed,
            cardsDone: newCardsDone,
            correctCount: newCorrectCount,
          });
          return prev;
        }

        const newExercisesSinceLastIntro = isExercise
          ? prev.exercisesSinceLastIntro + 1
          : 0;

        const newLastIntroducedWordKey = !isExercise
          ? prev.wordKey
          : prev.lastIntroducedWordKey;

        const snapshot = {
          lastIntroducedWordKey: newLastIntroducedWordKey,
          exercisesSinceLastIntro: newExercisesSinceLastIntro,
          sessionDurationMs: durationMs,
        };

        const activeWords = getActiveWords();
        const { wordKey, cardType } = pickNextCard(
          activeWords,
          nextWordStats,
          snapshot,
          learningRate.current,
          sampleLearnPageContentList,
        );

        const exerciseData =
          cardType !== 'wordIntro'
            ? generateExerciseDataSafe(wordKey, cardType, activeWords, sampleLearnPageContentList)
            : null;

        const isNewWord = cardType === 'wordIntro';

        return {
          cardKey: prev.cardKey + 1,
          wordKey,
          cardType,
          exerciseData,
          lastIntroducedWordKey: isNewWord ? wordKey : newLastIntroducedWordKey,
          exercisesSinceLastIntro: isNewWord ? 0 : newExercisesSinceLastIntro,
          cardsDone: newCardsDone,
          correctCount: newCorrectCount,
          wordsNew: isNewWord ? prev.wordsNew + 1 : prev.wordsNew,
          wordsReviewed: !isNewWord ? prev.wordsReviewed + 1 : prev.wordsReviewed,
        };
      });
      setAnswered(null);
      setReviewWordKey(null);
    },
    [durationMs, onComplete, resetInactivityTimer, sessionId, wordStats],
  );

  const wordContent = sampleLearnPageContentList[runner.wordKey as SampleContentKey]?.content;
  const progressPct = Math.min(100, (elapsed / durationMs) * 100);

  const reviewContent = reviewWordKey
    ? sampleLearnPageContentList[reviewWordKey as SampleContentKey]?.content
    : null;

  type FooterAction = { label: string; onClick: () => void };
  const footerAction: FooterAction | null = reviewContent
    ? { label: 'Got it →', onClick: () => advance(false) }
    : runner.cardType === 'wordIntro'
    ? { label: 'Got it →', onClick: () => advance(null) }
    : answered !== null
    ? {
        label: answered === false ? 'Review word →' : 'Next →',
        onClick: () => (answered === false ? setReviewWordKey(runner.wordKey) : advance(answered)),
      }
    : null;

  return (
    <div className="max-w-4xl mx-auto px-20 py-20 pb-80">
      <div className="flex items-center gap-15 mb-20">
        <span className="text-text text-sm tabular-nums w-60">{formatTime(elapsed)}</span>
        <div className="flex-1 h-6 bg-bg-l2 rounded-full overflow-hidden border border-brand">
          <div
            className="h-full bg-brand transition-all duration-1000"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <span className="text-text text-sm tabular-nums w-60 text-right">
          {formatTime(durationMs)}
        </span>
      </div>

      {reviewContent ? (
        <LearnPage key={`review-${reviewWordKey}`} content={reviewContent} />
      ) : (
        <>
          {runner.cardType === 'wordIntro' && wordContent && (
            <LearnPage key={runner.cardKey} content={wordContent} />
          )}

          {runner.cardType === 'meaningGuess' &&
            runner.exerciseData?.cardType === 'meaningGuess' && (
              <MeaningGuessQuestion
                key={runner.cardKey}
                heading={{ text: 'Guess the Meaning' }}
                meaningBestGuessQuestion={runner.exerciseData.data}
                onAnswer={handleAnswer}
              />
            )}

          {runner.cardType === 'contextBlank' &&
            runner.exerciseData?.cardType === 'contextBlank' && (
              <ContextBlankQuestion
                key={runner.cardKey}
                heading={{ text: 'Fill in the Blank' }}
                contextBlankQuestion={runner.exerciseData.data}
                onAnswer={handleAnswer}
              />
            )}

          {runner.cardType === 'wordDefinition' &&
            runner.exerciseData?.cardType === 'wordDefinition' && (
              <WordDefinitionQuestion
                key={runner.cardKey}
                heading={{ text: 'What does this mean?' }}
                wordDefinitionQuestion={runner.exerciseData.data}
                onAnswer={handleAnswer}
              />
            )}
        </>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-bg-l1 border-t-2 border-brand py-15 px-20">
        <div className="max-w-4xl mx-auto grid grid-cols-3 items-center gap-10">
          <div>
            {runner.cardType === 'wordIntro' && !reviewContent && (
              <button
                className="border-2 border-brand rounded-md text-text px-15 py-10 transition-colors duration-300 hover:bg-brand-2 text-sm"
                onClick={() => {
                  resetInactivityTimer();
                  if (readKnownWordConfirmed()) {
                    addKnownWord(runner.wordKey);
                    advance(null);
                  } else {
                    setPendingKnownWordKey(runner.wordKey);
                  }
                }}
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
              onClick={() => onComplete({
                wordsNew: runner.wordsNew,
                wordsReviewed: runner.wordsReviewed,
                cardsDone: runner.cardsDone,
                correctCount: runner.correctCount,
              })}
            >
              End session
            </button>
          </div>
        </div>
      </div>

      {pendingKnownWordKey && (
        <KnownWordDialog
          onConfirm={(dontShowAgain) => {
            addKnownWord(pendingKnownWordKey);
            if (dontShowAgain) writeKnownWordConfirmed();
            setPendingKnownWordKey(null);
            advance(null);
          }}
          onCancel={() => setPendingKnownWordKey(null)}
        />
      )}
    </div>
  );
};

export { SessionRunner };
