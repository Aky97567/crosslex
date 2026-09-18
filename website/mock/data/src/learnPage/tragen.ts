import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const tragen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'tragen',
        article: null,
        translation: 'to wear, carry',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To carry something, or to have clothing on your body.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'tragen'?",
          options: [
            { text: 'to wear, carry', isCorrect: true },
            { text: 'to buy', isCorrect: false },
            { text: 'to wash', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss die Tasche {{tragen}}.',
          'Sie {{trägt}} heute ein rotes Kleid.',
          'Er hat die Kisten allein {{getragen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'tragan', related to English 'drag' — both from a Germanic root meaning to pull or carry a load.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'anziehen' names a different concept — the act of putting
        // clothes on, not the state of wearing or carrying something —
        // so no entry is listed.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Tragen' relates to English 'drag' — you drag (tragen) a heavy bag when you carry it.",
          },
          {
            id: 2,
            content:
              "Think of a shopping bag you 'trage' (carry) all the way home.",
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
