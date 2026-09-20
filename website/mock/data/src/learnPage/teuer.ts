import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const teuer: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'teuer',
        article: null,
        translation: 'expensive',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Costing a lot of money; high in price.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'teuer'?",
          options: [
            { text: 'expensive', isCorrect: true },
            { text: 'cheap', isCorrect: false },
            { text: 'free', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Auto ist mir zu {{teuer}}.',
          'Sie trägt eine {{teure}} Uhr.',
          'Die Mieten in München sind sehr {{teuer}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Uhr ist {{teuer}}.',
        positivAttributiv: 'Das ist eine {{teure}} Uhr.',
        komparativPredicativ: 'Diese Uhr ist {{teurer}} als jene.',
        komparativAttributiv: 'Das ist die {{teurere}} Uhr.',
        superlativPredicativ: 'Dieses Restaurant ist {{am teuersten}}.',
        superlativAttributiv: 'Das ist das {{teuerste}} Restaurant der Stadt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'tiuri', originally meaning 'precious, valuable' — the sense narrowed to 'costly'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'kostspielig',
            article: null,
            translation: 'costly',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "'Teuer' sounds like 'tour' — an expensive world tour is 'teuer'.",
          },
          {
            id: 2,
            content:
              "Think of something so 'teuer' (expensive) it makes your eyes water.",
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
