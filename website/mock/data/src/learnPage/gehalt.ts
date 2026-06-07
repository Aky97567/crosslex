import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gehalt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Gehalt',
        article: 'das',
        translation: 'salary',
        partOfSpeech: 'noun',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A fixed regular payment made by an employer to a salaried employee, typically monthly. Distinct from Lohn, which is paid hourly or daily to wage workers.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Gehalt'?",
          options: [
            { text: 'A monthly salary paid to an employee', isCorrect: true },
            { text: 'A tax refund from the Finanzamt', isCorrect: false },
            { text: 'A bonus paid at the end of the year', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Gehalt wird am Ende des Monats überwiesen. Das Gehalt ist im Arbeitsvertrag festgelegt. Nach der Probezeit wurde mein Gehalt erhöht.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'enthalten' (to contain) — originally meaning the content or sustenance provided to someone. Over time it narrowed to the regular payment that 'contains' your living.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Lohn',
            article: 'der',
            translation: 'wage (hourly/daily)',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Einkommen',
            article: 'das',
            translation: 'income',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Vergütung',
            article: 'die',
            translation: 'remuneration, pay',
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
              "'Gehalt' sounds like 'get-halted' — your money is held (gehalten) by the employer until payday.",
          },
          {
            id: 2,
            content:
              "Think of 'halt' — your salary is what holds your life together financially.",
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
