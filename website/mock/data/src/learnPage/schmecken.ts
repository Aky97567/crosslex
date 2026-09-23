import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schmecken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schmecken',
        article: null,
        translation: 'to taste',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To have a particular flavor, or to perceive flavor when eating or drinking.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schmecken'?",
          options: [
            { text: 'to taste', isCorrect: true },
            { text: 'to smell nice', isCorrect: false },
            { text: 'to look appetizing', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Suppe {{schmeckt}} sehr gut.',
          'Wie {{schmeckt}} dir der Kuchen?',
          'Das Essen hat lecker {{geschmeckt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'smecken', related to English 'smack' (as in 'to smack one's lips') — both share the same Germanic root about taste.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Schmecken' is related to English 'smack' — smacking your lips shows something schmeckt good.",
          },
          {
            id: 2,
            content:
              "Picture taking a bite and smiling — 'Das schmeckt gut!'",
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
