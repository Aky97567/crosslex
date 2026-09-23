import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schwimmen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schwimmen',
        article: null,
        translation: 'to swim',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To move through water by moving one's arms, legs, or body.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schwimmen'?",
          options: [
            { text: 'to swim', isCorrect: true },
            { text: 'to walk on land', isCorrect: false },
            { text: 'to fly', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{schwimme}} jeden Samstag im Schwimmbad.',
          'Er {{schwimmt}} sehr schnell.',
          'Wir sind im See {{geschwommen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'swimman', directly related to English 'swim' — both share the same Germanic root.",
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
              "'Schwimmen' looks and sounds like English 'swim-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture diving into a pool and swimming laps — that's schwimmen.",
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
