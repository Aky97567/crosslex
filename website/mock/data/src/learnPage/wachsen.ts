import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wachsen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'wachsen',
        article: null,
        translation: 'to grow',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To increase in size, height, or amount over time, especially used for living things.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'wachsen'?",
          options: [
            { text: 'to grow', isCorrect: true },
            { text: 'to shrink', isCorrect: false },
            { text: 'to stay the same size', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Pflanze {{wächst}} sehr schnell.',
          'Kinder {{wachsen}} in den ersten Jahren am meisten.',
          'Die Stadt ist in den letzten Jahren stark {{gewachsen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'wahsan', directly related to English 'wax' (as in 'the moon waxes and wanes') — both share the same Germanic root about growing.",
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
              "'Wachsen' is related to English 'wax' (to grow) — 'the moon waxes' uses the same old root.",
          },
          {
            id: 2,
            content:
              "Picture a sunflower stretching taller each day — that's wachsen.",
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
