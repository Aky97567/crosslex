import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const liegen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'liegen',
        article: null,
        translation: 'to lie, be lying down',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To be in a flat, horizontal position, or to be located somewhere.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'liegen'?",
          options: [
            { text: 'to lie, be lying down', isCorrect: true },
            { text: 'to stand up', isCorrect: false },
            { text: 'to walk around', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Katze {{liegt}} auf dem Sofa.',
          'Das Buch {{liegt}} auf dem Tisch.',
          'Ich habe den ganzen Tag im Bett {{gelegen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'liggen', related to English 'lie' (as in 'to lie down') — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Sitzen'/'stehen' describe different postures, not synonyms.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Liegen' is related to English 'lie' (down) — both describe a flat, resting position.",
          },
          {
            id: 2,
            content:
              "Picture stretching out on the grass in the sun — that's liegen.",
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
