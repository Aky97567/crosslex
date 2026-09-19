import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const laut: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'laut',
        article: null,
        translation: 'loud',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Producing or characterized by a lot of sound.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'laut'?",
          options: [
            { text: 'loud', isCorrect: true },
            { text: 'quiet', isCorrect: false },
            { text: 'fast', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Musik ist mir zu {{laut}}.',
          'Er hat eine sehr {{laute}} Stimme.',
          'Bitte sei nicht so {{laut}}!',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'hlut', related to English 'loud' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'lärmend',
            article: null,
            translation: 'noisy',
            similarityScore: 3,
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
            content: "'Laut' sounds close to 'loud' — same root, similar sound.",
          },
          {
            id: 2,
            content: "Think of turning up the volume — 'laut' means loud.",
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
