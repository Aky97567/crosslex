import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ratenzahlung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Ratenzahlung',
        article: 'die',
        translation: 'instalment payment, payment by instalments',
        partOfSpeech: 'noun',
        themes: ['finance'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A payment method in which a total amount is divided into smaller regular payments (Raten) made over an agreed period. Common in Germany for large purchases such as furniture, electronics, or vehicles. Interest (Zinsen) is often charged on top. Missed instalments trigger a Mahnung and may result in contract termination.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Ratenzahlung'?",
          options: [
            { text: 'A payment method dividing a total amount into smaller regular payments over time', isCorrect: true },
            { text: 'A penalty charged when a payment is made after the agreed deadline', isCorrect: false },
            { text: 'A discount offered by a seller for paying the full amount upfront in cash', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe das neue Sofa auf Ratenzahlung gekauft. Die Ratenzahlung läuft über 24 Monate zu je 50 Euro. Bei einer Ratenzahlung muss man immer auf die Zinsen achten.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Rate' (instalment, portion) + 'Zahlung' (payment). A Zahlung broken into Raten — a single payment divided into manageable portions spread over time.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Teilzahlung',
            article: 'die',
            translation: 'partial payment',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Abzahlung',
            article: 'die',
            translation: 'paying off by instalments',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Anzahlung',
            article: 'die',
            translation: 'down payment, deposit',
            similarityScore: 3,
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
              "'RATEN-zahlung' — Rate = instalment, Zahlung = payment. Payment in rates: small regular pieces paid over time instead of all at once.",
          },
          {
            id: 2,
            content:
              "Think of 'rating' your payments — you split the total into a rated series of smaller, more manageable payments.",
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
