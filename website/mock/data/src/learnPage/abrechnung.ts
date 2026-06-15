import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const abrechnung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Abrechnung',
        article: 'die',
        translation: 'billing statement, final bill, settlement',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A detailed statement listing all costs over a period, showing what is owed or to be refunded. Appears in rental contexts as Nebenkostenabrechnung (utility cost statement) and in payroll as Gehaltsabrechnung (pay slip). Tenants in Germany receive a yearly Nebenkostenabrechnung and may owe extra or receive a refund.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Abrechnung'?",
          options: [
            { text: 'A detailed billing statement showing costs and balances owed', isCorrect: true },
            { text: 'An agreement to pay costs in monthly instalments', isCorrect: false },
            { text: 'A request to extend a payment deadline', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe die Abrechnung für die Nebenkosten von meinem Vermieter bekommen. Die Abrechnung zeigt, dass ich 200 Euro nachzahlen muss. Jede Abrechnung prüfe ich sorgfältig, bevor ich zahle.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab-' (off, settlement) + 'rechnen' (to calculate) + '-ung'. To 'abrechnen' means to settle accounts by calculating what remains — an Abrechnung is the result of that final calculation.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Rechnung',
            article: 'die',
            translation: 'invoice, bill',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Kostenaufstellung',
            article: 'die',
            translation: 'cost breakdown, itemised list',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Bilanz',
            article: 'die',
            translation: 'balance, account summary',
            similarityScore: 3,
            level: ['B2'],
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
              "'Ab-RECH-nung' contains 'rechnen' (to calculate) — an Abrechnung is the final calculation, the settled score.",
          },
          {
            id: 2,
            content:
              "Think of 'after-reckoning' — the Abrechnung is the reckoning that arrives after a billing period ends.",
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
