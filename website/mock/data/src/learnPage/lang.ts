import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const lang: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'lang',
        article: null,
        translation: 'long',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having great length or duration.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'lang'?",
          options: [
            { text: 'long', isCorrect: true },
            { text: 'short', isCorrect: false },
            { text: 'wide', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Weg zur Arbeit ist sehr {{lang}}.',
          'Sie hat {{lange}} Haare.',
          'Der Film war zu {{lang}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieser Weg ist {{lang}}.',
        positivAttributiv: 'Das ist ein {{langer}} Weg.',
        komparativPredicativ: 'Dieser Weg ist {{länger}} als der andere.',
        komparativAttributiv: 'Das ist der {{längere}} Weg.',
        superlativPredicativ: 'Der Nil ist {{am längsten}}.',
        superlativAttributiv: 'Das ist der {{längste}} Fluss Europas.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'lang', related to English 'long' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'langwierig',
            article: null,
            translation: 'lengthy, drawn-out',
            similarityScore: 3,
            level: ['B1'],
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
            content: "'Lang' sounds just like 'long' with a shorter vowel.",
          },
          {
            id: 2,
            content: "Think of a 'lengthy' explanation — 'lang' means long.",
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
