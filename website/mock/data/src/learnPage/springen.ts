import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const springen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'springen',
        article: null,
        translation: 'to jump',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To push oneself off the ground quickly with one's legs, moving upward or forward through the air.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'springen'?",
          options: [
            { text: 'to jump', isCorrect: true },
            { text: 'to sit down slowly', isCorrect: false },
            { text: 'to lie down', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Kinder {{springen}} auf dem Trampolin.',
          'Er {{springt}} über die Pfütze.',
          'Sie ist mutig vom Turm ins Wasser {{gesprungen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'springan', related to English 'spring' (as in 'to spring into action') — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Hüpfen' (to hop, skip) implies smaller, lighter movements, not a true synonym for a full jump.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Springen' looks and sounds like English 'spring-en' — a spring makes things jump.",
          },
          {
            id: 2,
            content:
              "Picture a kangaroo bouncing across a field — that's springen.",
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
