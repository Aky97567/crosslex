import {
  WordIntroModule,
  WordContextModule,
  MeaningGuessQuestionModule,
} from '@whitelotus/common-crosslex-view';
import { ContextBlankQuestionData, WordDefinitionQuestionData, TypeTheWordQuestionData } from '@whitelotus/front-entities';
import { LearningRate, RATE_CONFIG, WordsSeenStore } from './sessionStorage';

export type CardType = 'wordIntro' | 'meaningGuess' | 'contextBlank' | 'wordDefinition' | 'typeTheWord';

export type SessionSnapshot = {
  lastIntroducedWordKey: string | null;
  exercisesSinceLastIntro: number;
  sessionDurationMs: number;
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

const availableExerciseTypes = (
  wordKey: string,
  wordData: WordDataMap,
  wordStats: WordsSeenStore,
): CardType[] => {
  const types: CardType[] = ['wordDefinition'];
  if (getMeaningGuessModule(wordData[wordKey])) types.push('meaningGuess');
  if (getWordContextModule(wordData[wordKey])) types.push('contextBlank');
  const stats = wordStats[wordKey];
  // accuracy = correctCount / count, so count * accuracy = correctCount
  if (stats && Math.round(stats.count * stats.accuracy) >= 3) types.push('typeTheWord');
  return types;
};

export const pickNextCard = (
  allWordKeys: string[],
  wordStats: WordsSeenStore,
  session: SessionSnapshot,
  learningRate: LearningRate,
  wordData: WordDataMap,
): { wordKey: string; cardType: CardType } => {
  const { newWordProbability } = RATE_CONFIG[learningRate];
  const unseenKeys = allWordKeys.filter((k) => !wordStats[k]);
  const seenKeys = allWordKeys.filter((k) => !!wordStats[k]);

  // Cold start — pool is empty
  if (seenKeys.length === 0) {
    const key = unseenKeys.length > 0 ? pickRandom(unseenKeys) : pickRandom(allWordKeys);
    return { wordKey: key, cardType: 'wordIntro' };
  }

  // Guarantee the [intro → quiz] unit
  if (session.exercisesSinceLastIntro === 0 && session.lastIntroducedWordKey !== null) {
    const types = availableExerciseTypes(session.lastIntroducedWordKey, wordData, wordStats);
    return { wordKey: session.lastIntroducedWordKey, cardType: pickRandom(types) };
  }

  // Dynamic coin flip: probability scales up when pool is small so early sessions
  // don't hammer the same word repeatedly.
  // P = baseP + (1 - baseP) / poolSize  →  converges to baseP as pool grows
  const dynamicP = newWordProbability + (1 - newWordProbability) / seenKeys.length;
  if (unseenKeys.length > 0 && Math.random() < dynamicP) {
    return { wordKey: pickRandom(unseenKeys), cardType: 'wordIntro' };
  }

  // Weighted random exercise from pool
  const now = Date.now();
  const weights = seenKeys.map((k) => {
    const stats = wordStats[k];
    const recency = (now - stats.lastSeen) / Math.max(session.sessionDurationMs, 1);
    return Math.max(0.01, (1 - stats.accuracy) + recency);
  });

  const wordKey = pickWeightedRandom(seenKeys, weights);
  const cardType = pickRandom(availableExerciseTypes(wordKey, wordData, wordStats));
  return { wordKey, cardType };
};

export type ExerciseData =
  | { cardType: 'meaningGuess'; data: MeaningGuessQuestionModule['meaningBestGuessQuestion'] }
  | { cardType: 'contextBlank'; data: ContextBlankQuestionData }
  | { cardType: 'wordDefinition'; data: WordDefinitionQuestionData }
  | { cardType: 'typeTheWord'; data: TypeTheWordQuestionData };

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
    const allForms = [wordText, ...(mod.alternateForms ?? [])];
    const pattern = allForms.map((f) => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const sentence = mod.paragraphWithUsage.replace(new RegExp(pattern, 'gi'), '___');
    if (!sentence.includes('___')) return null;

    const distractors = allWordKeys
      .filter((k) => k !== wordKey)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((k) => getWordIntroModule(wordData[k])?.word)
      .filter((w): w is string => !!w)
      .map((text) => ({ text, isCorrect: false }));

    return {
      cardType: 'contextBlank',
      data: { sentence, options: shuffle([{ text: wordText, isCorrect: true }, ...distractors]) },
    };
  }

  if (cardType === 'wordDefinition') {
    const intro = getWordIntroModule(word);
    if (!intro) return null;

    const distractors = allWordKeys
      .filter((k) => k !== wordKey)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((k) => getWordIntroModule(wordData[k])?.translation)
      .filter((t): t is string => !!t)
      .map((text) => ({ text, isCorrect: false }));

    return {
      cardType: 'wordDefinition',
      data: {
        word: intro.word,
        article: intro.article ?? undefined,
        options: shuffle([{ text: intro.translation, isCorrect: true }, ...distractors]),
      },
    };
  }

  if (cardType === 'typeTheWord') {
    const intro = getWordIntroModule(word);
    if (!intro) return null;
    return {
      cardType: 'typeTheWord',
      data: { word: intro.word, article: intro.article ?? undefined, translation: intro.translation },
    };
  }

  return null;
};

// Falls back to wordDefinition (always has data) if the requested type returns null.
export const generateExerciseDataSafe = (
  wordKey: string,
  cardType: Exclude<CardType, 'wordIntro'>,
  allWordKeys: string[],
  wordData: WordDataMap,
): ExerciseData | null => {
  const result = generateExerciseData(wordKey, cardType, allWordKeys, wordData);
  if (result !== null) return result;
  if (cardType === 'wordDefinition') return null;
  return generateExerciseData(wordKey, 'wordDefinition', allWordKeys, wordData);
};
