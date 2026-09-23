import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const legen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'legen',
        article: null,
        translation: 'to lay, put down',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To put something down somewhere, usually in a flat or horizontal position.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'legen'?",
          options: [
            { text: 'to lay, put down', isCorrect: true },
            { text: 'to pick something up', isCorrect: false },
            { text: 'to throw something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{lege}} das Buch auf den Tisch.',
          'Er legt die Schlüssel auf die Kommode.',
          'Sie hat das Baby ins Bett {{gelegt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'leggen', related to English 'lay' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Stellen' (to place upright) is a distinct, non-interchangeable concept — a classic point of confusion for learners, not a synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Legen' is related to English 'lay' — both mean putting something down flat.",
          },
          {
            id: 2,
            content:
              "Picture placing a book flat on a table — that's legen.",
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
