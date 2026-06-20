import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const steuererklaerung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Steuer­erklärung',
        article: 'die',
        translation: 'tax return',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The annual document submitted to the tax authority (Finanzamt) declaring your income, deductions, and expenses for the previous year. While not mandatory for all employees, filing a Steuererklärung frequently results in a refund. The standard deadline is 31 July of the following year, extendable with a tax advisor.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Steuererklärung'?",
          options: [
            { text: 'The annual document you submit to declare your income and claim tax refunds', isCorrect: true },
            { text: 'A monthly payment plan set up with the tax authority', isCorrect: false },
            { text: 'A formal objection to a tax assessment issued by the Finanzamt', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich muss jedes Jahr eine Steuererklärung beim Finanzamt einreichen. Die Steuererklärung hat mir letztes Jahr 400 Euro Rückerstattung gebracht. Für die Steuererklärung brauche ich alle Belege aus dem vergangenen Jahr.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Steuer' (tax) + 'Erklärung' (declaration, explanation). A Steuererklärung is literally a declaration — a formal explanation of your finances to the state.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Einkommensteuererklärung',
            article: 'die',
            translation: 'income tax return',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Jahressteuererklärung',
            article: 'die',
            translation: 'annual tax return',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Steuerbescheid',
            article: 'der',
            translation: 'tax assessment notice',
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
              "'Steuer-ERKLÄRUNG' contains 'erklären' (to explain) — you are formally explaining your finances to the tax authority.",
          },
          {
            id: 2,
            content:
              "Think of 'steward-declaration' — you're declaring to the state steward exactly how much you earned.",
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
