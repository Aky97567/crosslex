import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const stellen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'stellen',
        article: null,
        translation: 'to put, place (upright)',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To put something somewhere in an upright or standing position.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'stellen'?",
          options: [
            { text: 'to put, place (upright)', isCorrect: true },
            { text: 'to lay something flat', isCorrect: false },
            { text: 'to remove something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{stelle}} die Flasche auf den Tisch.',
          'Er {{stellt}} sein Fahrrad vor das Haus.',
          'Sie hat die Vase ins Regal {{gestellt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'stellen', related to English 'stall' (a fixed, standing place) — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Legen' (to lay flat) is a distinct, non-interchangeable concept — a classic point of confusion for learners, not a synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Stellen' is related to English 'stall' — a stall is a fixed, standing spot, like where you stellen something.",
          },
          {
            id: 2,
            content:
              "Picture placing a vase upright on a shelf — that's stellen.",
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
