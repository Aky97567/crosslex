import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const werfen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'werfen',
        article: null,
        translation: 'to throw',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To send something through the air with force using one's hand or arm.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'werfen'?",
          options: [
            { text: 'to throw', isCorrect: true },
            { text: 'to catch something', isCorrect: false },
            { text: 'to carry something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er {{wirft}} den Ball ins Tor.',
          'Sie {{warf}} einen Stein ins Wasser.',
          'Ich habe den Müll in den Eimer {{geworfen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'werfan', directly related to English 'warp' (originally 'to throw' threads across a loom) — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Werfen' is related to English 'warp' — both once meant simply 'to throw'.",
          },
          {
            id: 2,
            content:
              "Picture a pitcher winding up to werfen the ball.",
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
