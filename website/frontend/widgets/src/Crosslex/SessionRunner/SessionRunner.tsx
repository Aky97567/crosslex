import React, { useState, useEffect, useCallback } from 'react';
import { sampleLearnPageContentList, Words, SampleContentKey } from '@whitelotus/mock-test';
import {
  WordIntro,
  MeaningGuessQuestion,
  ContextBlankQuestion,
  WordDefinitionQuestion,
} from '@whitelotus/front-entities';
import {
  readWordsSeen,
  writeWordsSeen,
  updateWordStats,
  readLearningRate,
  appendSessionRecord,
  pickNextCard,
  generateExerciseData,
  WordsSeenStore,
  CardType,
  ExerciseData,
} from '@whitelotus/front-features';
import { WordIntroModule } from '@whitelotus/common-crosslex-view';

const nextButton =
  'bg-brand border-2 border-brand rounded-md text-text-cta px-40 py-10 transition-colors duration-300';

type RunnerState = {
  wordKey: string;
  cardType: CardType;
  exerciseData: ExerciseData | null;
  newWordsThisSession: number;
  lastWordKey: string | null;
  exercisesForLastWord: number;
  cardsDone: number;
  correctCount: number;
  wordsNew: number;
  wordsReviewed: number;
};

type Props = {
  durationMinutes: number;
  onComplete: (stats: { wordsNew: number; wordsReviewed: number; cardsDone: number; correctCount: number }) => void;
};

const getWordIntroModule = (wordKey: string): WordIntroModule | null => {
  const entry = sampleLearnPageContentList[wordKey as SampleContentKey];
  if (!entry) return null;
  return (
    (entry.content.modules.find((m) => m.moduleType === 'wordIntro') ?? null) as WordIntroModule | null
  );
};

const formatTime = (ms: number): string => {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const buildInitialCard = (
  wordStats: WordsSeenStore,
  learningRate: ReturnType<typeof readLearningRate>,
): { wordKey: string; cardType: CardType; exerciseData: ExerciseData | null } => {
  const { wordKey, cardType } = pickNextCard(
    Words,
    wordStats,
    { newWordsThisSession: 0, lastWordKey: null, exercisesForLastWord: 0 },
    learningRate,
    sampleLearnPageContentList,
  );
  const exerciseData =
    cardType !== 'wordIntro'
      ? generateExerciseData(wordKey, cardType, Words, sampleLearnPageContentList)
      : null;
  return { wordKey, cardType, exerciseData };
};

const SessionRunner: React.FC<Props> = ({ durationMinutes, onComplete }) => {
  const durationMs = durationMinutes * 60 * 1000;
  const startedAt = React.useRef(Date.now());

  const [wordStats, setWordStats] = useState<WordsSeenStore>(() => readWordsSeen());
  const learningRate = React.useRef(readLearningRate());

  const initialCard = React.useRef(buildInitialCard(wordStats, learningRate.current));

  const [runner, setRunner] = useState<RunnerState>({
    ...initialCard.current,
    newWordsThisSession: initialCard.current.cardType === 'wordIntro' ? 1 : 0,
    lastWordKey: null,
    exercisesForLastWord: 0,
    cardsDone: 0,
    correctCount: 0,
    wordsNew: initialCard.current.cardType === 'wordIntro' ? 1 : 0,
    wordsReviewed: initialCard.current.cardType !== 'wordIntro' ? 1 : 0,
  });

  const [answered, setAnswered] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(durationMs);

  useEffect(() => {
    const id = setInterval(() => {
      const elapsed = Date.now() - startedAt.current;
      setTimeLeft(Math.max(0, durationMs - elapsed));
    }, 1000);
    return () => clearInterval(id);
  }, [durationMs]);

  const advance = useCallback(
    (correct: boolean | null) => {
      setRunner((prev) => {
        const isExercise = prev.cardType !== 'wordIntro';
        const newCardsDone = isExercise ? prev.cardsDone + 1 : prev.cardsDone;
        const newCorrectCount =
          isExercise && correct ? prev.correctCount + 1 : prev.correctCount;

        let nextWordStats = wordStats;
        if (isExercise && correct !== null) {
          nextWordStats = updateWordStats(wordStats, prev.wordKey, correct);
          writeWordsSeen(nextWordStats);
          setWordStats(nextWordStats);
        }

        const elapsed = Date.now() - startedAt.current;
        if (elapsed >= durationMs) {
          appendSessionRecord({
            date: Date.now(),
            durationMinutes,
            wordsNew: prev.wordsNew,
            wordsReviewed: prev.wordsReviewed,
            accuracy: newCardsDone > 0 ? newCorrectCount / newCardsDone : 0,
          });
          onComplete({
            wordsNew: prev.wordsNew,
            wordsReviewed: prev.wordsReviewed,
            cardsDone: newCardsDone,
            correctCount: newCorrectCount,
          });
          return prev;
        }

        const newExercisesForLastWord =
          prev.wordKey === prev.lastWordKey && isExercise
            ? prev.exercisesForLastWord + 1
            : isExercise
            ? 1
            : prev.exercisesForLastWord;

        const snapshot = {
          newWordsThisSession: prev.newWordsThisSession,
          lastWordKey: prev.wordKey,
          exercisesForLastWord: newExercisesForLastWord,
        };

        const { wordKey, cardType } = pickNextCard(
          Words,
          nextWordStats,
          snapshot,
          learningRate.current,
          sampleLearnPageContentList,
        );

        const exerciseData =
          cardType !== 'wordIntro'
            ? generateExerciseData(wordKey, cardType, Words, sampleLearnPageContentList)
            : null;

        const isNewWord = cardType === 'wordIntro';

        return {
          wordKey,
          cardType,
          exerciseData,
          newWordsThisSession: isNewWord
            ? prev.newWordsThisSession + 1
            : prev.newWordsThisSession,
          lastWordKey: prev.wordKey,
          exercisesForLastWord: newExercisesForLastWord,
          cardsDone: newCardsDone,
          correctCount: newCorrectCount,
          wordsNew: isNewWord ? prev.wordsNew + 1 : prev.wordsNew,
          wordsReviewed: !isNewWord ? prev.wordsReviewed + 1 : prev.wordsReviewed,
        };
      });
      setAnswered(null);
    },
    [durationMinutes, durationMs, onComplete, wordStats],
  );

  const introModule = getWordIntroModule(runner.wordKey);

  return (
    <div className="max-w-4xl mx-auto px-20 py-20">
      <div className="flex justify-between items-center mb-20 text-text text-sm">
        <span>Time left: {formatTime(timeLeft)}</span>
        <span>Cards done: {runner.cardsDone}</span>
      </div>

      {runner.cardType === 'wordIntro' && introModule && (
        <div>
          <WordIntro
            word={introModule.word}
            translation={introModule.translation}
            partOfSpeech={introModule.partOfSpeech}
            representativeImageUrl={introModule.representativeImageUrl}
          />
          <div className="flex justify-center mt-20">
            <button className={nextButton} onClick={() => advance(null)}>
              Got it →
            </button>
          </div>
        </div>
      )}

      {runner.cardType === 'meaningGuess' &&
        runner.exerciseData?.cardType === 'meaningGuess' && (
          <div>
            <MeaningGuessQuestion
              heading={{ text: 'Guess the Meaning' }}
              meaningBestGuessQuestion={runner.exerciseData.data}
              onAnswer={(correct) => setAnswered(correct)}
            />
            {answered !== null && (
              <div className="flex justify-center mt-20">
                <button className={nextButton} onClick={() => advance(answered)}>
                  Next →
                </button>
              </div>
            )}
          </div>
        )}

      {runner.cardType === 'contextBlank' &&
        runner.exerciseData?.cardType === 'contextBlank' && (
          <div>
            <ContextBlankQuestion
              heading={{ text: 'Fill in the Blank' }}
              contextBlankQuestion={runner.exerciseData.data}
              onAnswer={(correct) => setAnswered(correct)}
            />
            {answered !== null && (
              <div className="flex justify-center mt-20">
                <button className={nextButton} onClick={() => advance(answered)}>
                  Next →
                </button>
              </div>
            )}
          </div>
        )}

      {runner.cardType === 'wordDefinition' &&
        runner.exerciseData?.cardType === 'wordDefinition' && (
          <div>
            <WordDefinitionQuestion
              heading={{ text: 'What does this mean?' }}
              wordDefinitionQuestion={runner.exerciseData.data}
              onAnswer={(correct) => setAnswered(correct)}
            />
            {answered !== null && (
              <div className="flex justify-center mt-20">
                <button className={nextButton} onClick={() => advance(answered)}>
                  Next →
                </button>
              </div>
            )}
          </div>
        )}
    </div>
  );
};

export { SessionRunner };
