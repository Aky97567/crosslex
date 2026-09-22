import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fahren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'fahren',
        article: null,
        translation: 'to drive, go (by vehicle)',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'transport', 'timetable', 'irregular'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To travel or operate a vehicle, such as a car, bus, or bike.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'fahren'?",
          options: [
            { text: 'to drive, go (by vehicle)', isCorrect: true },
            { text: 'to walk', isCorrect: false },
            { text: 'to fly', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{fahren}} am Wochenende nach Hamburg.',
          'Er {{fährt}} jeden Tag mit dem Fahrrad zur Arbeit.',
          'Sie ist mit dem Zug {{gefahren}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'faran', related to English 'fare' (as in 'thoroughfare') — both share the same Germanic root meaning to travel.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Fahren' relates to English 'fare' — a 'thoroughfare' is a road you fahren (travel) along.",
          },
          {
            id: 2,
            content:
              "Think of paying your 'fare' before you 'fahren' (travel).",
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
