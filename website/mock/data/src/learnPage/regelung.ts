import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const regelung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Regelung',
        article: 'die',
        translation: 'regulation, arrangement',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An official rule or arrangement governing how something is done.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Regelung'?",
          options: [
            { text: 'a regulation, arrangement', isCorrect: true },
            { text: 'a mistake', isCorrect: false },
            { text: 'a suggestion', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Diese {{Regelung}} gilt ab nächstem Monat.',
          'Es gibt eine neue {{Regelung}} für Homeoffice.',
          'Die {{Regelung}} wurde gemeinsam beschlossen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'regeln' (to regulate), built on 'Regel' (rule) — the noun form of setting a rule.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Vorschrift',
            article: 'die',
            translation: 'regulation, rule (formal)',
            similarityScore: 4,
            level: ['B1'],
            register: 'formal',
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
              "'Regelung' contains 'Regel' (rule) — a Regelung is the arrangement built around a rule.",
          },
          {
            id: 2,
            content:
              "Think of the fine print that sets the official rule — Regelung.",
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
