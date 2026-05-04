import {
  WordIntroModule,
  WordContextModule,
  MeaningGuessQuestionModule,
} from '@whitelotus/common-crosslex-view';
import { ContextBlankQuestionData } from '@whitelotus/front-entities';
import { WordDefinitionQuestionData } from '@whitelotus/front-entities';
import { LearningRate, WordsSeenStore } from './sessionStorage';

export type CardType = 'wordIntro' | 'meaningGuess' | 'contextBlank' | 'wordDefinition';

export type SessionSnapshot = {
  newWordsThisSession: number;
  lastWordKey: string | null;
  exercisesForLastWord: number;
};

type WordData = {
  content: {
    moduleType: 'content';
    modules: Array<
      | WordIntroModule
      | WordContextModule
      | MeaningGuessQuestionModule
      | { moduleType: string }
    >;
  };
};

type WordDataMap = Record<string, WordData>;

const pickWeightedRandom = (keys: string[], weights: number[]): string => {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < keys.length; i++) {
    r -= weights[i];
    if (r <= 0) return keys[i];
  }
  return keys[keys.length - 1];
};

const pickRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const shuffle = <T>(arr: T[]): T[] => {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

const getWordIntroModule = (wordData: WordData): WordIntroModule | null => {
  const m = wordData.content.modules.find((mod) => mod.moduleType === 'wordIntro');
  return m ? (m as WordIntroModule) : null;
};

const getWordContextModule = (wordData: WordData): WordContextModule | null => {
  const m = wordData.content.modules.find((mod) => mod.moduleType === 'wordContext');
  return m ? (m as WordContextModule) : null;
};

const getMeaningGuessModule = (wordData: WordData): MeaningGuessQuestionModule | null => {
  const m = wordData.content.modules.find((mod) => mod.moduleType === 'meaningGuessQuestion');
  return m ? (m as MeaningGuessQuestionModule) : null;
};

const availableExerciseTypes = (wordKey: string, wordData: WordDataMap): CardType[] => {
  const types: CardType[] = ['wordDefinition'];
  if (getMeaningGuessModule(wordData[wordKey])) types.push('meaningGuess');
  if (getWordContextModule(wordData[wordKey])) types.push('contextBlank');
  return types;
};

export const pickNextCard = (
  allWordKeys: string[],
  wordStats: WordsSeenStore,
  session: SessionSnapshot,
  learningRate: LearningRate,
  wordData: WordDataMap,
): { wordKey: string; cardType: CardType } => {
  const unseenKeys = allWordKeys.filter((k) => !wordStats[k]);
  const seenKeys = allWordKeys.filter((k) => !!wordStats[k]);

  const canShowNewWord =
    learningRate === 'aggressive' &&
    session.newWordsThisSession < 3 &&
    (session.lastWordKey === null || session.exercisesForLastWord >= 3) &&
    unseenKeys.length > 0;

  if (canShowNewWord) {
    return { wordKey: pickRandom(unseenKeys), cardType: 'wordIntro' };
  }

  if (seenKeys.length === 0) {
    const fallbackKey = pickRandom(allWordKeys);
    return { wordKey: fallbackKey, cardType: 'wordIntro' };
  }

  const now = Date.now();
  const weights = seenKeys.map((k) => {
    const stats = wordStats[k];
    const age = now - stats.lastSeen;
    const timeBonus = age < 3_600_000 ? 0 : age < 86_400_000 ? 0.3 : 0.6;
    return Math.max(0.01, (1 - stats.accuracy) + timeBonus);
  });

  const wordKey = pickWeightedRandom(seenKeys, weights);
  const types = availableExerciseTypes(wordKey, wordData);
  const cardType = pickRandom(types);

  return { wordKey, cardType };
};

export type ExerciseData =
  | { cardType: 'meaningGuess'; data: MeaningGuessQuestionModule['meaningBestGuessQuestion'] }
  | { cardType: 'contextBlank'; data: ContextBlankQuestionData }
  | { cardType: 'wordDefinition'; data: WordDefinitionQuestionData };

export const generateExerciseData = (
  wordKey: string,
  cardType: Exclude<CardType, 'wordIntro'>,
  allWordKeys: string[],
  wordData: WordDataMap,
): ExerciseData | null => {
  const word = wordData[wordKey];
  if (!word) return null;

  if (cardType === 'meaningGuess') {
    const mod = getMeaningGuessModule(word);
    if (!mod) return null;
    return { cardType: 'meaningGuess', data: mod.meaningBestGuessQuestion };
  }

  if (cardType === 'contextBlank') {
    const mod = getWordContextModule(word);
    const intro = getWordIntroModule(word);
    if (!mod || !intro) return null;

    const wordText = intro.word;
    const regex = new RegExp(wordText, 'i');
    const sentence = mod.paragraphWithUsage.replace(regex, '___');
    if (!sentence.includes('___')) return null;

    const distractorKeys = allWordKeys
      .filter((k) => k !== wordKey)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const distractors = distractorKeys
      .map((k) => getWordIntroModule(wordData[k])?.word)
      .filter((w): w is string => !!w)
      .map((text) => ({ text, isCorrect: false }));

    const options = shuffle([{ text: wordText, isCorrect: true }, ...distractors]);
    return { cardType: 'contextBlank', data: { sentence, options } };
  }

  if (cardType === 'wordDefinition') {
    const intro = getWordIntroModule(word);
    if (!intro) return null;

    const distractorKeys = allWordKeys
      .filter((k) => k !== wordKey)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const distractors = distractorKeys
      .map((k) => getWordIntroModule(wordData[k])?.translation)
      .filter((t): t is string => !!t)
      .map((text) => ({ text, isCorrect: false }));

    const options = shuffle([{ text: intro.translation, isCorrect: true }, ...distractors]);
    return {
      cardType: 'wordDefinition',
      data: { word: intro.word, article: intro.article ?? undefined, options },
    };
  }

  return null;
};
