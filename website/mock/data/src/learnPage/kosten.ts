import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kosten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kosten',
        article: null,
        translation: 'to cost',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'finance'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To have a particular price.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kosten'?",
          options: [
            { text: 'to cost', isCorrect: true },
            { text: 'to be free', isCorrect: false },
            { text: 'to be sold out', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wie viel {{kostet}} das T-Shirt?',
          'Die Karten {{kosten}} zwanzig Euro.',
          'Der Kaffee hat drei Euro {{gekostet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from Latin 'constare' (to stand firm, cost) via Old French — the same root gives English 'cost'.",
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
              "'Kosten' looks and sounds like English 'cost-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture checking a price tag — 'Was kostet das?'",
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
