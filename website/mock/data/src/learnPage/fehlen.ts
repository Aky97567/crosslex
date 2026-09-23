import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fehlen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'fehlen',
        article: null,
        translation: 'to be missing, lack',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To not be present when expected, or to be missed by someone.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'fehlen'?",
          options: [
            { text: 'to be missing, lack', isCorrect: true },
            { text: 'to be present', isCorrect: false },
            { text: 'to be found', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Du {{fehlst}} mir sehr.',
          'Zwei Schüler {{fehlen}} heute in der Klasse.',
          'Mir hat das Geld {{gefehlt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from Old French 'faillir' (to fail, be lacking) — the same root gives English 'fail' and 'fault'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Fehlen' is related to English 'fail' — something that fehlt has failed to show up.",
          },
          {
            id: 2,
            content:
              "Picture an empty chair at the table — 'Er fehlt heute.'",
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
