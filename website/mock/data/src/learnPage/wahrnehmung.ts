import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wahrnehmung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Wahrnehmung',
        article: 'die',
        translation: 'perception',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The way someone notices or interprets something through the senses.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Wahrnehmung'?",
          options: [
            { text: 'perception', isCorrect: true },
            { text: 'a decision', isCorrect: false },
            { text: 'a mistake', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Seine {{Wahrnehmung}} der Situation war anders als meine.',
          'Die {{Wahrnehmung}} von Farben verändert sich mit dem Licht.',
          'Ihre {{Wahrnehmung}} hat sich im Laufe der Zeit geändert.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'wahr' (true) + 'nehmen' (to take) — literally 'to take as true', i.e. to perceive.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Empfindung',
            article: 'die',
            translation: 'sensation, feeling',
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
              "'Wahrnehmung' — 'wahr' (true) + 'nehmen' (to take) — perception is taking something in as true.",
          },
          {
            id: 2,
            content:
              "Think of your senses 'taking in' the world around you — Wahrnehmung.",
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
