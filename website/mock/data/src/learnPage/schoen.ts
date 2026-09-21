import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schoen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schön',
        article: null,
        translation: 'beautiful, nice',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Pleasing to look at, or pleasant in general.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schön'?",
          options: [
            { text: 'beautiful, nice', isCorrect: true },
            { text: 'ugly', isCorrect: false },
            { text: 'boring', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Wetter ist heute sehr {{schön}}.',
          'Sie hat ein {{schönes}} Kleid.',
          'Das war ein {{schöner}} Abend.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieser Park ist {{schön}}.',
        positivAttributiv: 'Das ist ein {{schöner}} Park.',
        komparativPredicativ: 'Dieser Park ist {{schöner}} als der andere.',
        komparativAttributiv: 'Das ist der {{schönere}} Park.',
        superlativPredicativ: 'Der Abend war heute {{am schönsten}}.',
        superlativAttributiv: 'Das war der {{schönste}} Abend des Urlaubs.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sconi', related to English 'sheen' (a shine or gleam) — both from a root meaning to shine or appear bright.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'hübsch',
            article: null,
            translation: 'pretty',
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
            content:
              "'Schön' relates to English 'sheen' — something with a nice sheen looks 'schön' (beautiful).",
          },
          {
            id: 2,
            content: "Think of shining beauty — a 'sheen' — 'schön'.",
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
