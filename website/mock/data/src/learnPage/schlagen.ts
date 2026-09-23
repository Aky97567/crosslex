import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schlagen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schlagen',
        article: null,
        translation: 'to hit, beat',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To hit something or someone forcefully, or to beat rhythmically, such as a heart or clock.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schlagen'?",
          options: [
            { text: 'to hit, beat', isCorrect: true },
            { text: 'to touch something gently', isCorrect: false },
            { text: 'to catch something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er {{schlägt}} mit dem Hammer auf den Nagel.',
          'Mein Herz {{schlägt}} schneller, wenn ich nervös bin.',
          'Die Uhr hat gerade zwölf Mal {{geschlagen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'slahan', related to English 'slay' — both share the same Germanic root, though 'slay' narrowed in meaning over time.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'hauen',
            article: null,
            translation: 'to hit, whack (colloquial)',
            similarityScore: 3,
            level: ["B1"],
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
              "'Schlagen' is related to English 'slay' — both once simply meant 'to strike'.",
          },
          {
            id: 2,
            content:
              "Picture a boxer's fist connecting with a punching bag — that's schlagen.",
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
