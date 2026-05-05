import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const auto: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Auto',
        article: 'das',
        translation: 'car',
        partOfSpeech: 'noun',
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A road vehicle with four wheels powered by an engine.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Auto'?",
          options: [
            { text: 'A type of road vehicle', isCorrect: true },
            { text: 'A type of animal', isCorrect: false },
            { text: 'A piece of furniture', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Das Auto fährt schnell. Sie haben ein neues Auto gekauft.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology: "From Latin 'auto-', meaning self and Greek 'autós'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Fahrzeug',
            article: 'das',
            translation: 'vehicle',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Personenkraftwagen',
            article: 'der',
            translation: 'passenger car',
            similarityScore: 4,
            level: ['B2'],
            register: 'formal',
            cefrRelevant: false,
          },
          {
            word: 'Wagen',
            article: 'der',
            translation: 'car',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
        ],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content: "Think of 'Auto' as 'automobile' in English.",
          },
        ],
      },
      {
        moduleType: 'wordShowcase',
        heading: { text: 'Word Showcase' },
      },
    ],
  },
};
