import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ziehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'ziehen',
        article: null,
        translation: 'to pull, move',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To apply force to move something toward oneself, or to move/relocate to a new home.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'ziehen'?",
          options: [
            { text: 'to pull, move', isCorrect: true },
            { text: 'to push something away', isCorrect: false },
            { text: 'to stay in one place', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte {{ziehen}} Sie an der Tür, nicht drücken.',
          'Wir {{ziehen}} nächsten Monat in eine neue Wohnung.',
          'Er hat den schweren Koffer hinter sich her {{gezogen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'ziohan', related to English 'tow' (as in towing a car) — both share the same Germanic root about pulling.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Umziehen' (to move house) is a distinct, narrower sense; 'zerren' is more forceful/violent.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Ziehen' is related to English 'tow' — both mean pulling something along.",
          },
          {
            id: 2,
            content:
              "Picture a tug-of-war rope being pulled — 'Wir ziehen!'",
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
