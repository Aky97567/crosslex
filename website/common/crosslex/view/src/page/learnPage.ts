import { HasContentPageType } from '../common';

type MemoryHook = {
  id: number;
  content: string;
  imageUrl?: string;
};

type SimilarWord = {
  word: string;
  translation: string;
  similarityScore: number; // 0-5 scale
};

type MeaningBestGuessOption = {
  text: string;
  isCorrect: boolean;
};

type MeaningBestGuessQuestion = {
  question: string;
  options: MeaningBestGuessOption[];
};

export type LearnPageContent = HasContentPageType<'learn'> & {
  word: string;
  translation: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb';
  meaning: string;
  meaningBestGuessQuestion: MeaningBestGuessQuestion;
  paragraphWithUsage: string;
  etymology: string;
  similarWords: SimilarWord[];
  representativeImageUrl: string;
  memoryHooks: MemoryHook[];
  wordTheaterUrl: string;
};
