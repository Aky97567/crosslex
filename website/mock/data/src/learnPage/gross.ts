import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gross: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'groß',
        article: null,
        translation: 'big, tall',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Of considerable size, height, or extent.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'groß'?",
          options: [
            { text: 'big, tall', isCorrect: true },
            { text: 'small', isCorrect: false },
            { text: 'heavy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das ist ein sehr {{großes}} Haus.',
          'Wie {{groß}} bist du?',
          'Berlin ist eine {{große}} Stadt.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'groz', related to English 'gross' (as in 'gross domestic product', meaning total, large) — both from the same root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'riesig',
            article: null,
            translation: 'huge, giant',
            similarityScore: 3,
            level: ['A2'],
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
              "'Groß' relates to English 'gross' — as in a 'gross' (large) amount.",
          },
          {
            id: 2,
            content:
              "Think of something so 'gross' (large) it takes up the whole room.",
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
