import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schwach: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schwach',
        article: null,
        translation: 'weak',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Lacking strength or power; not strong.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schwach'?",
          options: [
            { text: 'weak', isCorrect: true },
            { text: 'strong', isCorrect: false },
            { text: 'fast', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Nach der Krankheit fühlte er sich noch {{schwach}}.',
          'Das Signal ist hier sehr {{schwach}}.',
          'Sie hat ein {{schwaches}} Argument vorgebracht.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Das Signal ist {{schwach}}.',
        positivAttributiv: 'Das ist ein {{schwaches}} Signal.',
        komparativPredicativ: 'Das Signal ist hier {{schwächer}} als dort.',
        komparativAttributiv: 'Das ist das {{schwächere}} Signal.',
        superlativPredicativ: 'Dieses Argument war {{am schwächsten}}.',
        superlativAttributiv: 'Das war das {{schwächste}} Argument.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'swah', related to English 'sway' — both connected to a root meaning to give way or waver.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'kraftlos',
            article: null,
            translation: 'powerless, feeble',
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
            content:
              "'Schwach' sounds a little like 'sway' — something weak sways easily.",
          },
          {
            id: 2,
            content: "Think of a weak signal that sways in and out — schwach.",
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
