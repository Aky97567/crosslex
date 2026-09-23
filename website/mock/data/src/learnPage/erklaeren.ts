import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erklaeren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'erklären',
        article: null,
        translation: 'to explain',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To make something clear or understandable to someone by describing it in detail.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'erklären'?",
          options: [
            { text: 'to explain', isCorrect: true },
            { text: 'to hide something', isCorrect: false },
            { text: 'to forget something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du mir das bitte {{erklären}}?',
          'Die Lehrerin {{erklärt}} die neue Regel.',
          'Er hat mir den Weg {{erklärt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'klar' (clear) with the prefix 'er-' — erklären literally means 'to make clear'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Zeigen' means to show, a different action from explaining with words.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Erklären' contains 'klar' (clear) — erklären means making something klar.",
          },
          {
            id: 2,
            content:
              "Picture a teacher drawing a diagram on the board — that's erklären.",
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
