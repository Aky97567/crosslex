import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const rente: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Rente',
        article: 'die',
        translation: 'pension, retirement benefit',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A regular monthly payment made to people who have retired from work, funded through contributions to the statutory pension insurance (Rentenversicherung) during their working life. The Rentenantrag (pension application) must be submitted before payments begin, typically a few months before retirement.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Rente'?",
          options: [
            { text: 'A regular monthly payment received after retirement', isCorrect: true },
            { text: 'A one-time payment made when leaving a job', isCorrect: false },
            { text: 'A government subsidy for low-income workers', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Vater bezieht seit drei Jahren eine Rente. Die Rente reicht kaum, um alle Lebenshaltungskosten zu decken. Er hat seinen Antrag auf Rente rechtzeitig beim Rentenversicherungsträger eingereicht.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From French 'rente' (income, revenue), borrowed into German in the 18th century. Ultimately from Latin 'reddita' (returned, rendered) — money returned to you after years of contribution.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Altersrente',
            article: 'die',
            translation: 'old-age pension',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Pension',
            article: 'die',
            translation: 'pension (civil servants)',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Ruhegehalt',
            article: 'das',
            translation: 'retirement pay (civil service, formal)',
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
              "'Rente' looks like 'rent' — your pension is like the universe paying you rent for all the years you worked.",
          },
          {
            id: 2,
            content:
              "Think of 'return' — your Rente is the return on decades of pension contributions, finally paid back to you.",
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
