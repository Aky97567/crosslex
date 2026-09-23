import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const baden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'baden',
        article: null,
        translation: 'to bathe',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To wash oneself or relax by sitting in a bathtub full of water, or to swim in open water for fun.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'baden'?",
          options: [
            { text: 'to bathe', isCorrect: true },
            { text: 'to sleep', isCorrect: false },
            { text: 'to eat', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{bade}} gern am Abend.',
          'Er {{badet}} sein Baby jeden Tag.',
          'Wir haben im See {{gebadet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'badon', directly related to English 'bathe' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Duschen' is a different method of washing, not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Baden' looks and sounds like English 'bathe-n' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture soaking in a warm bathtub full of bubbles — that's baden.",
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
