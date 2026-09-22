import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const joggen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'joggen',
        article: null,
        translation: 'to jog',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To run at a slow, steady pace, usually for exercise.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'joggen'?",
          options: [
            { text: 'to jog', isCorrect: true },
            { text: 'to swim in a pool', isCorrect: false },
            { text: 'to ride a bicycle', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{jogge}} jeden Morgen im Park.',
          'Er {{joggt}} gern am Wochenende.',
          'Wir sind gestern zusammen {{gejoggt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed directly from English 'jog' — the German verb keeps the original spelling and simply adds German endings.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Laufen' (to run, walk) is broader than jogging specifically — not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Joggen' is just the English word 'jog' with a German ending — an easy cognate.",
          },
          {
            id: 2,
            content:
              "Picture joggers running past you, calling out 'Joggen macht Spaß!'",
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
