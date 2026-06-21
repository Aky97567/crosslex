import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const nebenkostenabrechnung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Nebenkostenabrechnung',
        displayName: 'Neben­kosten­abrechnung',
        article: 'die',
        translation: 'utility cost statement, ancillary cost settlement',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The annual statement from a landlord showing the actual costs of utilities and shared services (water, heating, building maintenance) for the previous year. Tenants pay a monthly advance (Vorauszahlung) throughout the year, and the Nebenkostenabrechnung reconciles this against real costs. A tenant may owe extra or receive a refund.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Nebenkostenabrechnung'?",
          options: [
            { text: 'The annual statement reconciling actual utility and shared service costs for a rented property', isCorrect: true },
            { text: 'A monthly utility bill sent directly to the tenant by the energy provider', isCorrect: false },
            { text: 'A list of repairs the tenant must pay for when moving out of a property', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe die Nebenkostenabrechnung von meinem Vermieter bekommen. Die Nebenkostenabrechnung zeigt, dass ich 150 Euro nachzahlen muss. Ich habe die Nebenkostenabrechnung sorgfältig auf Fehler geprüft.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Nebenkosten' (ancillary costs, costs alongside the rent) + 'Abrechnung' (billing settlement). The annual settling of all the costs that run beside your base rent.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Betriebskostenabrechnung',
            article: 'die',
            translation: 'operating cost statement',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Heizkostenabrechnung',
            article: 'die',
            translation: 'heating cost statement',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Nebenkosten',
            article: 'die',
            translation: 'ancillary costs, utilities',
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
              "'Neben-kosten-ABRECHNUNG' — Neben = side, Kosten = costs, Abrechnung = settlement. The annual settling of all the side costs of your apartment.",
          },
          {
            id: 2,
            content:
              "Think of 'neben' (next to) — these are all the costs sitting next to your rent, settled once a year in one statement.",
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
