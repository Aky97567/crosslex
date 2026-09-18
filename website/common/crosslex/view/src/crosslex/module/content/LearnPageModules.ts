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
  level?: ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')[];
  register?: 'formal' | 'colloquial' | 'technical' | 'archaic' | 'borrowed';
  cefrRelevant?: boolean;
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

export type WordTheme = 'transport' | 'health' | 'daily_life' | 'work' | 'bureaucracy' | 'finance' | 'trennbar' | 'timetable' | 'reflexiv' | 'irregular';

export type WordIntroModule = Module<
  'wordIntro',
  {
    article: Article;
    heading: Heading;
    level: ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')[];
    partOfSpeech: string;
    representativeImageUrl?: string;
    themes?: WordTheme[];
    translation: string;
    trennbar?: true;
    word: string;
    displayName?: string;
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
    // One string per sentence — explicit, not inferred by splitting on
    // punctuation (which breaks on "?"/"!" and on non-terminal periods
    // like German ordinal dates, e.g. "30. April"). Occurrences of the
    // word (any form) are wrapped in {{...}} within each sentence — see
    // parseAnnotatedParagraph. No separate alternateForms/trennbarTokens
    // list to keep in sync — the markers are the declaration. Which
    // sentence renders as "context, not the quiz blank" is derived from
    // wordIntro.trennbar (sentence index 1, per the mandatory trennbar
    // paragraph order below), not declared here. No minimum length
    // enforced by the type — "at least 3 sentences" is a content
    // guideline (see docs/word-content.md), not a structural guarantee.
    paragraphWithUsage: string[];
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
    wordShowcaseUrl?: string;
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
