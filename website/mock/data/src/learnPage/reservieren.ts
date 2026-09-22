import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const reservieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'reservieren',
        article: null,
        translation: 'to reserve',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To arrange for something, such as a table or seat, to be kept for you in advance.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'reservieren'?",
          options: [
            { text: 'To arrange for something to be kept for you', isCorrect: true },
            { text: 'To cancel a booking', isCorrect: false },
            { text: 'To pay in advance', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte einen Tisch für zwei Personen {{reservieren}}.',
          'Sie {{reserviert}} die Zimmer für nächste Woche.',
          'Wir haben die Plätze schon {{reserviert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'reservare' (to keep back), via French 'réserver' — the same root gives English 'reserve'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'buchen',
            article: null,
            translation: 'to book',
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
              "'Reservieren' looks just like English 'reserve' — same Latin root.",
          },
          {
            id: 2,
            content:
              "Think of putting a 'reserved' sign on a table — reservieren.",
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
