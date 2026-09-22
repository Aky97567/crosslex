import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const beliebt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'beliebt',
        article: null,
        translation: 'popular',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Liked or admired by many people.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'beliebt'?",
          options: [
            { text: 'popular', isCorrect: true },
            { text: 'unpopular', isCorrect: false },
            { text: 'unknown', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Dieses Restaurant ist bei Touristen sehr {{beliebt}}.',
          'Sie ist eine {{beliebte}} Lehrerin.',
          'Das Lied war letztes Jahr sehr {{beliebt}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieses Café ist {{beliebt}}.',
        positivAttributiv: 'Das ist ein {{beliebtes}} Café.',
        komparativPredicativ: 'Dieses Café ist {{beliebter}} als jenes.',
        komparativAttributiv: 'Das ist das {{beliebtere}} Café.',
        superlativPredicativ: 'Dieses Café ist {{am beliebtesten}}.',
        superlativAttributiv: 'Das ist das {{beliebteste}} Café der Stadt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'lieben' (to love) — beliebt describes something that is widely loved or favored.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'angesagt',
            article: null,
            translation: 'trendy, popular (informal)',
            similarityScore: 3,
            level: ['B1'],
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
              "'Beliebt' relates to 'lieben' (to love) — something beliebt is widely loved.",
          },
          {
            id: 2,
            content: "Think of a crowd favorite — beliebt.",
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
