import { MutableRefObject, useCallback, useRef, useState } from 'react';
import { sampleLearnPageContentList, A2Words, B1Words, getWordThemes } from '@whitelotus/mock-test';
import {
  writeWordsSeen,
  updateWordStats,
  seedWordStats,
  readLearningRate,
  appendExerciseEvent,
  readKnownWords,
  healWordsSeen,
  readActiveLevel,
  WordsSeenStore,
  WordTheme,
} from './sessionStorage';
import {
  pickNextCard,
  generateExerciseDataSafe,
  CardType,
  ExerciseData,
} from './sessionAlgorithm';

export type RunnerStats = {
  wordsNew: number;
  wordsReviewed: number;
  cardsDone: number;
  correctCount: number;
};

export type RunnerState = {
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

type Params = {
  sessionId: number;
  durationMs: number;
  theme?: WordTheme | null;
  onComplete: (stats: RunnerStats) => void;
  startedAt: MutableRefObject<number>;
};

const getLevelPool = () => (readActiveLevel() === 'a2' ? A2Words : B1Words);

const getWordPool = (theme?: WordTheme | null) => {
  const pool = getLevelPool();
  return theme ? pool.filter((w) => getWordThemes(w).includes(theme)) : pool;
};

const getActiveWords = (theme?: WordTheme | null) => {
  const known = new Set(readKnownWords());
  return getWordPool(theme).filter((w) => !known.has(w));
};

const buildInitialCard = (
  wordStats: WordsSeenStore,
  learningRate: ReturnType<typeof readLearningRate>,
  sessionDurationMs: number,
  theme?: WordTheme | null,
): { wordKey: string; cardType: CardType; exerciseData: ExerciseData | null } => {
  const activeWords = getActiveWords(theme);
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

export const useSessionState = ({ sessionId, durationMs, theme, onComplete, startedAt }: Params) => {
  const learningRate = useRef(readLearningRate());
  const themeRef = useRef(theme);

  const [wordStats, setWordStats] = useState<WordsSeenStore>(() =>
    healWordsSeen(getWordPool(theme)),
  );
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [reviewWordKey, setReviewWordKey] = useState<string | null>(null);
  const [pendingKnownWordKey, setPendingKnownWordKey] = useState<string | null>(null);

  const initialCard = useRef(
    buildInitialCard(wordStats, learningRate.current, durationMs, themeRef.current),
  );

  const [runner, setRunner] = useState<RunnerState>(() => {
    const card = initialCard.current;
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

  const handleAnswer = useCallback((correct: boolean) => {
    setAnswered(correct);
  }, []);

  const advance = useCallback(
    (
      correct: boolean | null,
      retryCard?: { wordKey: string; cardType: Exclude<CardType, 'wordIntro'> },
    ) => {
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
            exerciseType: prev.cardType as
              | 'meaningGuess'
              | 'contextBlank'
              | 'wordDefinition'
              | 'typeTheWord',
            correct,
          });
        } else if (!isExercise) {
          nextWordStats = seedWordStats(wordStats, prev.wordKey);
          appendExerciseEvent({ ts: Date.now(), sessionId, wordKey: prev.wordKey, type: 'intro' });
        }

        if (nextWordStats !== wordStats) {
          writeWordsSeen(nextWordStats);
          setWordStats(nextWordStats);
        }

        if (Date.now() - startedAt.current >= durationMs) {
          onComplete({
            wordsNew: prev.wordsNew,
            wordsReviewed: prev.wordsReviewed,
            cardsDone: newCardsDone,
            correctCount: newCorrectCount,
          });
          return prev;
        }

        const newExercisesSinceLastIntro = isExercise ? prev.exercisesSinceLastIntro + 1 : 0;
        const newLastIntroducedWordKey = !isExercise ? prev.wordKey : prev.lastIntroducedWordKey;
        const activeWords = getActiveWords(themeRef.current);

        let wordKey: string;
        let cardType: CardType;

        if (retryCard) {
          wordKey = retryCard.wordKey;
          cardType = retryCard.cardType;
        } else {
          ({ wordKey, cardType } = pickNextCard(
            activeWords,
            nextWordStats,
            {
              lastIntroducedWordKey: newLastIntroducedWordKey,
              exercisesSinceLastIntro: newExercisesSinceLastIntro,
              sessionDurationMs: durationMs,
            },
            learningRate.current,
            sampleLearnPageContentList,
          ));
        }

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
    [durationMs, onComplete, sessionId, wordStats, startedAt],
  );

  return {
    runner,
    answered,
    reviewWordKey,
    setReviewWordKey,
    pendingKnownWordKey,
    setPendingKnownWordKey,
    handleAnswer,
    advance,
  };
};
