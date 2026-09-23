import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const laecheln: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'lächeln',
        article: null,
        translation: 'to smile',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To make a happy facial expression by curving the corners of the mouth upward, usually without showing teeth or making a sound.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'lächeln'?",
          options: [
            { text: 'to smile', isCorrect: true },
            { text: 'to laugh loudly', isCorrect: false },
            { text: 'to cry', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie {{lächelt}} freundlich, als sie mich sieht.',
          'Er {{lächelte}} und sagte nichts.',
          'Das Baby hat zum ersten Mal {{gelächelt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A diminutive form of 'lachen' (to laugh) — lächeln is literally a small, quiet version of laughing.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Lachen' (to laugh) is a louder, different concept, not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Lächeln' contains 'lachen' (to laugh) — a lächeln is a small, quiet lachen.",
          },
          {
            id: 2,
            content:
              "Picture a gentle smile forming on someone's face — that's lächeln.",
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
