import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const geld: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Geld',
        article: 'das',
        translation: 'money',
        partOfSpeech: 'noun',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Coins and banknotes used to pay for things; the currency used in everyday transactions.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Geld'?",
          options: [
            { text: 'a bank account', isCorrect: false },
            { text: 'money, currency', isCorrect: true },
            { text: 'a price tag', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Hast du genug Geld dabei? Ich habe kein Geld mehr. Das Geld liegt auf dem Tisch.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'gelt' (payment, reward). Related to the English word 'yield' — both come from a root meaning to pay or give.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Bargeld',
            article: 'das',
            translation: 'cash',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Preis',
            article: 'der',
            translation: 'price',
            similarityScore: 3,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Rechnung',
            article: 'die',
            translation: 'bill, invoice',
            similarityScore: 3,
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
              "Think of 'gold' — Geld sounds like gold, and gold is the original money.",
          },
          {
            id: 2,
            content:
              "'Geld' rhymes with 'held' — money is held in your wallet.",
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
