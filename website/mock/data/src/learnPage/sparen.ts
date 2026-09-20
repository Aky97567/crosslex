import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sparen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sparen',
        article: null,
        translation: 'to save (money)',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To keep money instead of spending it, usually for future use.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sparen'?",
          options: [
            { text: 'To keep money instead of spending it', isCorrect: true },
            { text: 'To spend all your money quickly', isCorrect: false },
            { text: 'To borrow money', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{spare}} jeden Monat etwas Geld.',
          'Er {{spart}} für ein neues Auto.',
          'Wir haben genug Geld {{gespart}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sparen', related to English 'spare' (as in 'spare change') — both from a Germanic root meaning to keep back.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zurücklegen',
            article: null,
            translation: 'to put aside, set by',
            similarityScore: 4,
            level: ['B1'],
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
              "'Sparen' relates to English 'spare' — sparing money means keeping it spare.",
          },
          {
            id: 2,
            content:
              "Think of 'spare change' you save instead of spend — sparen.",
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
