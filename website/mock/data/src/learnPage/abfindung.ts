import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const abfindung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Abfindung',
        article: 'die',
        translation: 'severance pay, redundancy payment',
        partOfSpeech: 'noun',
        themes: ['work', 'finance'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A one-time payment made by an employer to an employee when their employment is terminated, typically through redundancy or mutual agreement. In Germany there is no automatic legal right to an Abfindung, but it is commonly negotiated when a Kündigung would otherwise be contested before a labour court (Arbeitsgericht).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Abfindung'?",
          options: [
            { text: 'A one-time payment made by an employer when terminating employment', isCorrect: true },
            { text: 'A monthly bonus paid to employees for exceptional performance', isCorrect: false },
            { text: 'A reimbursement of work-related expenses at the end of a contract', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Er hat nach der Kündigung eine Abfindung von seinem Arbeitgeber erhalten. Die Abfindung entspricht drei Monatsgehältern. Ohne eine faire Abfindung wollte er vor das Arbeitsgericht gehen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab-' (away, off) + 'finden' (to find) → 'abfinden' (to settle with, to compensate). To abfinden someone is to settle accounts with them and send them on their way.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Entschädigung',
            article: 'die',
            translation: 'compensation, indemnity',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Abgangsentschädigung',
            article: 'die',
            translation: 'termination compensation',
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Ausgleichszahlung',
            article: 'die',
            translation: 'settlement payment',
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
              "'Ab-FIND-ung' contains 'finden' (to find) — it is the money you find waiting for you when your job ends.",
          },
          {
            id: 2,
            content:
              "Think of 'ab' (away) + 'find' — you find the payment as you walk away from the job for the last time.",
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
