import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const selten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'selten',
        article: null,
        translation: 'rare, infrequent',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Not happening or found often; infrequent.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'selten'?",
          options: [
            { text: 'rare, infrequent', isCorrect: true },
            { text: 'common', isCorrect: false },
            { text: 'expensive', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'So ein Fehler ist sehr {{selten}}.',
          'Er besucht seine Familie nur {{selten}}.',
          'Diese Briefmarke ist extrem {{selten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'seltan', related to English 'seldom' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'rar',
            article: null,
            translation: 'rare, scarce',
            similarityScore: 4,
            level: ['B1'],
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
            content: "'Selten' sounds a bit like 'seldom' — both mean rare.",
          },
          {
            id: 2,
            content: "Think of something you 'seldom' see — selten.",
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
