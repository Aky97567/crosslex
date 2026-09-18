import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const entspannen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich entspannen',
        article: null,
        translation: 'to relax',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To become calm and free of tension or stress.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich entspannen'?",
          options: [
            { text: 'to relax', isCorrect: true },
            { text: 'to worry', isCorrect: false },
            { text: 'to work hard', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte mich am Wochenende {{entspannen}}.',
          'Er {{entspannt}} sich beim Lesen.',
          'Wir haben uns im Urlaub gut {{entspannt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ent-' (un-, removing) + 'spannen' (to tense, stretch) — literally 'to un-tense' oneself.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'relaxen',
            article: null,
            translation: 'to relax (informal, borrowed from English)',
            similarityScore: 3,
            level: ['A2'],
            register: 'colloquial',
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
              "'Entspannen' — 'ent-' (un-) + 'spannen' (to tense) — literally to un-tense yourself.",
          },
          {
            id: 2,
            content:
              "Think of releasing a tightly wound spring — that's what 'entspannen' feels like.",
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
