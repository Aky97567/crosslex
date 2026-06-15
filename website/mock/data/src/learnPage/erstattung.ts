import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erstattung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Erstattung',
        article: 'die',
        translation: 'reimbursement, refund',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The repayment of costs or expenses that were previously paid out of pocket. Common in Germany for health expenses, travel costs, and tax returns. To claim one, you submit an Antrag (application) with proof of payment and wait for the money to be transferred back.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Erstattung'?",
          options: [
            { text: 'The repayment of costs or expenses you have already paid', isCorrect: true },
            { text: 'A penalty fee charged for a late payment', isCorrect: false },
            { text: 'An advance payment made before a service is provided', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe eine Erstattung von meiner Krankenkasse für die Arztrechnung beantragt. Die Krankenkasse hat mir die Erstattung nach zwei Wochen auf mein Konto überwiesen. Ohne den Kassenbon ist eine Erstattung leider nicht möglich.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'er-' (prefix indicating completion) + 'statten' (to furnish, to provide) + '-ung'. 'Statten' relates to 'Statt' (place, stead) — giving something back in place of what was spent.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Rückerstattung',
            article: 'die',
            translation: 'reimbursement, refund',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Rückzahlung',
            article: 'die',
            translation: 'repayment, payback',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Entschädigung',
            article: 'die',
            translation: 'compensation, indemnification',
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
              "'Er-STATT-ung' contains 'statt' (instead) — the money comes back instead of what you originally spent.",
          },
          {
            id: 2,
            content:
              "Think of 'first-at-tung' — the money you spent first is at your account again after the Erstattung.",
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
