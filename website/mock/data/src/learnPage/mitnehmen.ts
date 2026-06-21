import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const mitnehmen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'mitnehmen',
        article: null,
        translation: 'to take along, bring with',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'transport', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To take a person or thing along when going somewhere. Also used at food counters for takeaway orders: "zum Mitnehmen" (to go / takeaway).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'mitnehmen'?",
          options: [
            { text: 'to leave something behind', isCorrect: false },
            { text: 'to take along, bring with', isCorrect: true },
            { text: 'to borrow something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Vergiss nicht, deinen Ausweis mitnehmen. Ich nehme meinen Regenschirm mit. Er hat die Unterlagen aus dem Büro mitgenommen.',
        alternateForms: ['mitgenommen'],
        trennbarTokens: ['nehme', 'mit'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'mit-' (with, along) + 'nehmen' (to take). To take with — bringing something or someone along on your way.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bringen',
            article: null,
            translation: 'to bring',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'nehmen',
            article: null,
            translation: 'to take',
            similarityScore: 4,
            level: ['A2'],
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
              "'Mit' = with, 'nehmen' = to take. Take with you — mitnehmen.",
          },
          {
            id: 2,
            content:
              "'Zum Mitnehmen, bitte' — for takeaway, please. A phrase you'll use every time you grab a coffee to go.",
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
