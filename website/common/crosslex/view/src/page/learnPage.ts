import { HasContentPageType } from '../common';

export type Mnemonic = {
  id: number;
  content: string;
  imageUrl?: string;
};

export type SimilarWord = {
  word: string;
  translation: string;
  similarityScore: 1 | 2 | 3 | 4 | 5;
};

type MeaningBestGuessOption = {
  text: string;
  isCorrect: boolean;
};

export type MeaningBestGuessQuestion = {
  question: string;
  options: MeaningBestGuessOption[];
};

export type LearnPageContent = HasContentPageType<'learn'> & {
  word: string;
  article: 'der' | 'die' | 'das' | null;
  level: ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')[];
  translation: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb';
  meaning: string;
  meaningBestGuessQuestion: MeaningBestGuessQuestion;
  paragraphWithUsage: string;
  etymology: string;
  similarWords: SimilarWord[];
  representativeImageUrl: string;
  mnemonics: Mnemonic[];
  wordShowcaseUrl: string;
};
