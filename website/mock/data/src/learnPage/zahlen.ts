import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zahlen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'zahlen',
        article: null,
        translation: 'to pay',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'finance'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To give money in exchange for something, such as goods, services, or a bill.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'zahlen'?",
          options: [
            { text: 'to pay', isCorrect: true },
            { text: 'to receive money', isCorrect: false },
            { text: 'to save money', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{zahle}} immer bar.',
          '{{Zahlst}} du oder ich?',
          'Wir haben die Rechnung schon {{gezahlt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Zahl' (number) — zahlen originally meant 'to count out' money, which became simply 'to pay'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bezahlen',
            article: null,
            translation: 'to pay (for something)',
            similarityScore: 4,
            level: ["A1"],
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
              "'Zahlen' contains 'Zahl' (number) — zahlen means counting out money to pay.",
          },
          {
            id: 2,
            content:
              "Picture handing cash to a cashier — 'Ich zahle jetzt.'",
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
