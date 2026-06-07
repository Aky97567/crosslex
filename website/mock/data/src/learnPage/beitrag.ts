import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const beitrag: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Beitrag',
        article: 'der',
        translation: 'contribution, fee, subscription',
        partOfSpeech: 'noun',
        theme: 'finance',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A regular payment made to a collective fund such as health insurance, pension, or a club. In employment contexts, both employer and employee pay Beiträge to social security.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Beitrag'?",
          options: [
            { text: 'A one-time payment for a fine', isCorrect: false },
            { text: 'A regular contribution or fee', isCorrect: true },
            { text: 'A reimbursement from the state', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Der monatliche Beitrag zur Krankenversicherung wird vom Gehalt abgezogen. Mein Beitrag zur Rentenversicherung ist gesetzlich vorgeschrieben. Den genauen Beitrag kann ich auf meiner Gehaltsabrechnung sehen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'bei-' (alongside, with) + 'tragen' (to carry, to contribute). A Beitrag is what you carry alongside others into a shared pot.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Gebühr',
            article: 'die',
            translation: 'fee, charge',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Abgabe',
            article: 'die',
            translation: 'levy, payment, submission',
            similarityScore: 3,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Prämie',
            article: 'die',
            translation: 'premium, bonus',
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
              "'Bei-trag' — you 'carry' (tragen) something 'alongside' (bei) the group. Your Beitrag is your share of the communal load.",
          },
          {
            id: 2,
            content:
              "Think of 'be-trag-en' → 'contribute'. A Beitrag is what you contribute to keep the system running for everyone.",
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
