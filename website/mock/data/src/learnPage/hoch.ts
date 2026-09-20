import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const hoch: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'hoch',
        article: null,
        translation: 'high, tall',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Extending a long way upward; not low.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'hoch'?",
          options: [
            { text: 'high, tall', isCorrect: true },
            { text: 'low', isCorrect: false },
            { text: 'deep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Berg ist sehr {{hoch}}.',
          'Das ist ein {{hohes}} Gebäude.',
          'Die Preise sind zu {{hoch}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Der Berg ist {{höher}} als der andere.',
        superlativeSentence: 'Im Sommer sind die Preise {{am höchsten}}.',
        superlativeAttributiveSentence: 'Das ist der {{höchste}} Berg der Alpen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'hoh', related to English 'high' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'erhöht',
            article: null,
            translation: 'elevated, raised',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "Think of someone saying 'ho!' while pointing up high — 'hoch' means high.",
          },
          {
            id: 2,
            content: "Think of a high jump — 'hoch' means high.",
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
