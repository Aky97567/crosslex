import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gut: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'gut',
        article: null,
        translation: 'good',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Of a high standard or quality; pleasant or favorable.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'gut'?",
          options: [
            { text: 'good', isCorrect: true },
            { text: 'bad', isCorrect: false },
            { text: 'strange', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Essen schmeckt sehr {{gut}}.',
          'Sie ist eine {{gute}} Freundin.',
          'Wie geht es dir? Mir geht es {{gut}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieser Kaffee ist {{gut}}.',
        positivAttributiv: 'Das ist ein {{guter}} Kaffee.',
        komparativPredicativ: 'Dieser Kaffee ist {{besser}} als der andere.',
        komparativAttributiv: 'Das ist der {{bessere}} Kaffee.',
        superlativPredicativ: 'Dieser Kaffee schmeckt {{am besten}}.',
        superlativAttributiv: 'Das ist der {{beste}} Kaffee, den es gibt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'guot', related to English 'good' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'super',
            article: null,
            translation: 'great (informal)',
            similarityScore: 3,
            level: ['A2'],
            register: 'colloquial',
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
            content:
              "'Gut' sounds like a shortened 'good' — same word, fewer letters.",
          },
          {
            id: 2,
            content:
              "Think of a 'gut feeling' — trusting that something is 'gut' (good).",
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
