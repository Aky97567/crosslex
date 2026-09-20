import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schnell: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schnell',
        article: null,
        translation: 'fast, quick',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Moving or happening with great speed.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schnell'?",
          options: [
            { text: 'fast, quick', isCorrect: true },
            { text: 'slow', isCorrect: false },
            { text: 'quiet', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er läuft sehr {{schnell}}.',
          'Das ist ein {{schnelles}} Auto.',
          'Kannst du das {{schnell}} machen?',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Der Zug ist {{schneller}} als der Bus.',
        superlativeSentence: 'Er läuft {{am schnellsten}} in der Klasse.',
        superlativeAttributiveSentence: 'Das ist das {{schnellste}} Auto der Welt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'snel', related to English 'snell' (dialectal for quick, brisk) — both from a Germanic root for speed.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'rasch',
            article: null,
            translation: 'quick, swift',
            similarityScore: 4,
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
              "'Schnell' sounds like 'snail' — but ironically means the opposite: fast!",
          },
          {
            id: 2,
            content: "Think of a race — go 'schnell' (fast) to win.",
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
