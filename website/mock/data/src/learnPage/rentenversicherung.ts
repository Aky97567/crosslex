import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const rentenversicherung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Rentenversicherung',
        displayName: 'Renten­versicherung',
        article: 'die',
        translation: 'statutory pension insurance',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The compulsory state pension insurance into which all employed workers and their employers make monthly contributions. Administered by the Deutsche Rentenversicherung, it forms the foundation of retirement income in Germany. The Rente you eventually receive depends on your total years of contribution and your earnings level.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Rentenversicherung'?",
          options: [
            { text: 'Compulsory state insurance funding retirement pensions through shared employer and employee contributions', isCorrect: true },
            { text: 'A private pension plan taken out independently from a bank or insurance company', isCorrect: false },
            { text: 'A one-time government payment made to workers when they reach retirement age', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Arbeitgeber und ich zahlen gemeinsam in die Rentenversicherung ein. Die Rentenversicherung sichert mir im Alter eine monatliche Rente. Alle Beschäftigten in Deutschland sind Mitglied in der Rentenversicherung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Rente' (pension) + 'Versicherung' (insurance). The insurance that produces your Rente — the mechanism converting decades of work contributions into a monthly retirement income.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Altersvorsorge',
            article: 'die',
            translation: 'retirement provision, pension planning',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Rentenversicherungsbeitrag',
            article: 'der',
            translation: 'pension insurance contribution',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Betriebsrente',
            article: 'die',
            translation: 'company pension',
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
              "'Renten-VERSICHERUNG' — Renten = pension, Versicherung = insurance. The insurance mechanism that will one day pay your monthly pension.",
          },
          {
            id: 2,
            content:
              "Think of 'rent-en' — you pay in now so the state rents you a monthly income for the rest of your retirement.",
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
