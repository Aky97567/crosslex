import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sauber: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sauber',
        article: null,
        translation: 'clean',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Free from dirt or marks; not dirty.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sauber'?",
          options: [
            { text: 'clean', isCorrect: true },
            { text: 'dirty', isCorrect: false },
            { text: 'wet', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Küche ist jetzt {{sauber}}.',
          'Ich brauche ein {{sauberes}} Handtuch.',
          'Meine Hände sind jetzt {{sauber}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Diese Küche ist {{sauberer}} als meine.',
        superlativeSentence: 'Dieses Zimmer ist {{am saubersten}}.',
        superlativeAttributiveSentence: 'Das ist das {{sauberste}} Hotelzimmer, in dem ich war.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'subar', related to English 'sober' via Latin — the sense drifted from 'unclouded, clear' to 'clean'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'rein',
            article: null,
            translation: 'pure, clean',
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
              "'Sauber' sounds like 'saber' — imagine a knight polishing his saber until it's 'sauber' (clean).",
          },
          {
            id: 2,
            content: "Think of a squeaky-clean kitchen — 'sauber'.",
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
