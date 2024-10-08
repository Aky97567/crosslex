import { Heading, Module, ModuleParent } from '../../../common';

export type Mnemonic = {
  id: number;
  content: string;
  imageUrl?: string;
};

export type SimilarWord = {
  word: string;
  article: Article;
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

export type Article = 'der' | 'die' | 'das' | null;

export type WordIntroModule = Module<
  'wordIntro',
  {
    article: Article;
    heading: Heading;
    level: ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')[];
    partOfSpeech: string;
    representativeImageUrl: string;
    translation: string;
    word: string;
  }
>;

export type WordMeaningModule = Module<
  'wordMeaning',
  {
    heading: Heading;
    meaning: string;
  }
>;

export type WordContextModule = Module<
  'wordContext',
  {
    heading: Heading;
    paragraphWithUsage: string;
  }
>;

export type MeaningGuessQuestionModule = Module<
  'meaningGuessQuestion',
  {
    heading: Heading;
    meaningBestGuessQuestion: MeaningBestGuessQuestion;
  }
>;

export type EtymologyModule = Module<
  'etymology',
  {
    heading: Heading;
    etymology: string;
  }
>;

export type SimilarWordsModule = Module<
  'similarWords',
  {
    heading: Heading;
    similarWords: SimilarWord[];
  }
>;

export type MnemonicsModule = Module<
  'mnemonics',
  {
    heading: Heading;
    mnemonics: Mnemonic[];
  }
>;

export type WordShowcaseModule = Module<
  'wordShowcase',
  {
    heading: Heading;
    wordShowcaseUrl: string;
  }
>;

export type ContentModules =
  | WordIntroModule
  | WordMeaningModule
  | WordContextModule
  | MeaningGuessQuestionModule
  | EtymologyModule
  | SimilarWordsModule
  | MnemonicsModule
  | WordShowcaseModule;

export type ContentModule = Module<
  'content',
  {
    modules: Array<ContentModules>;
  }
>;

export type HasContent = ModuleParent<'content', ContentModule>;
