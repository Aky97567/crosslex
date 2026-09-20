import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gefaehrlich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'gefährlich',
        article: null,
        translation: 'dangerous',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'health', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Likely to cause harm or injury; risky.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'gefährlich'?",
          options: [
            { text: 'dangerous', isCorrect: true },
            { text: 'safe', isCorrect: false },
            { text: 'boring', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Diese Straße ist bei Glatteis sehr {{gefährlich}}.',
          'Es ist {{gefährlich}}, ohne Helm Rad zu fahren.',
          'Der Hund sieht {{gefährlich}} aus, ist aber freundlich.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Straße ist {{gefährlich}}.',
        positivAttributiv: 'Das ist eine {{gefährliche}} Straße.',
        komparativPredicativ: 'Diese Straße ist {{gefährlicher}} als jene.',
        komparativAttributiv: 'Das ist die {{gefährlichere}} Straße.',
        superlativPredicativ: 'Diese Straße ist bei Glatteis {{am gefährlichsten}}.',
        superlativAttributiv: 'Das ist die {{gefährlichste}} Straße der Stadt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Gefahr' (danger) + '-lich' — literally 'characterized by danger'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'riskant',
            article: null,
            translation: 'risky',
            similarityScore: 4,
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
              "'Gefährlich' contains 'Gefahr' (danger) — gefährlich means full of danger.",
          },
          {
            id: 2,
            content: "Think of a warning sign for 'Gefahr' — gefährlich.",
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
