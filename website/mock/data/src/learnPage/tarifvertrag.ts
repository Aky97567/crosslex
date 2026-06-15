import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const tarifvertrag: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Tarifvertrag',
        article: 'der',
        translation: 'collective wage agreement, collective bargaining agreement',
        partOfSpeech: 'noun',
        themes: ['work', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A legally binding agreement negotiated between a trade union (Gewerkschaft) and an employers\' association, setting minimum wages, working hours, holiday entitlement, and other conditions for an entire sector or company. Workers covered by a Tarifvertrag receive at minimum the agreed conditions; individual contracts may exceed them but not fall below.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Tarifvertrag'?",
          options: [
            { text: 'A legally binding wage and conditions agreement negotiated between unions and employers', isCorrect: true },
            { text: 'An individual employment contract negotiated between one employee and their employer', isCorrect: false },
            { text: 'A government regulation setting the national minimum wage', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'In meiner Branche gilt ein Tarifvertrag für alle Beschäftigten. Der Tarifvertrag legt das Mindestgehalt und die Arbeitszeiten fest. Die Gewerkschaft hat den neuen Tarifvertrag nach langen Verhandlungen durchgesetzt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Tarif' (rate, scheduled price) + 'Vertrag' (contract). A Tarifvertrag is a contract that sets the tariff — the agreed rate — for labour across an entire sector.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Lohntarifvertrag',
            article: 'der',
            translation: 'wage agreement',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Manteltarifvertrag',
            article: 'der',
            translation: 'general working conditions agreement',
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Kollektivvertrag',
            article: 'der',
            translation: 'collective agreement (Austrian term)',
            similarityScore: 5,
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
              "'TARIF-vertrag' — Tarif = scheduled rate, Vertrag = contract. A contract that sets the rate for your work across a whole industry.",
          },
          {
            id: 2,
            content:
              "Think of a 'tariff contract' — just as customs tariffs set the price for imported goods, this sets the price for labour.",
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
