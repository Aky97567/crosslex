import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zeigen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'zeigen',
        article: null,
        translation: 'to show',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To let someone see something, or to point something out.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'zeigen'?",
          options: [
            { text: 'to show', isCorrect: true },
            { text: 'to hide', isCorrect: false },
            { text: 'to buy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du mir den Weg {{zeigen}}?',
          'Sie {{zeigt}} mir ihre Fotos.',
          'Er hat uns sein neues Auto {{gezeigt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'zeigon', closely related to the German noun 'Zeiger' (pointer, as on a clock face).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'präsentieren',
            article: null,
            translation: 'to present',
            similarityScore: 3,
            level: ['B1'],
            register: 'borrowed',
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
              "'Zeigen' relates to 'Zeiger' (a clock's pointer) — a pointer literally 'shows' the time.",
          },
          {
            id: 2,
            content:
              "Think of a game show host who 'zeigt' (shows) the prizes.",
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
