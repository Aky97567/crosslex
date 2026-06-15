import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const quittung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Quittung',
        article: 'die',
        translation: 'receipt',
        partOfSpeech: 'noun',
        themes: ['finance', 'daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A written or printed confirmation that a payment has been received. In Germany, a Quittung is legally significant — it proves a transaction occurred and is required for expense claims, tax deductions, and refunds. Keep your Quittungen; without them, reimbursements are nearly impossible.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Quittung'?",
          options: [
            { text: 'A written confirmation that a payment has been received', isCorrect: true },
            { text: 'A formal invoice requesting payment for goods or services', isCorrect: false },
            { text: 'A bank statement showing your monthly account activity', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe die Quittung für die Reparatur sorgfältig aufgehoben. Ohne eine Quittung bekomme ich keine Erstattung von meiner Versicherung. Der Techniker hat mir nach der Arbeit sofort eine Quittung ausgestellt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From medieval Latin 'quietantia' (discharge of a debt), via French 'quittance'. Related to 'quit' — a Quittung declares that the payer is free of the debt, quit and clear.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Kassenbon',
            article: 'der',
            translation: 'till receipt, cash register slip',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Beleg',
            article: 'der',
            translation: 'receipt, supporting document',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Kassenzettel',
            article: 'der',
            translation: 'till receipt',
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
              "'Quittung' comes from 'quit' — once you have a Quittung, you are quit of the debt, done and clear.",
          },
          {
            id: 2,
            content:
              "Think of 'quit-tung' as the 'quit song' — the receipt is the final note that sings: you have paid.",
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
