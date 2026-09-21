import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const dringend: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'dringend',
        article: null,
        translation: 'urgent',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Needing immediate attention or action.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'dringend'?",
          options: [
            { text: 'urgent', isCorrect: true },
            { text: 'unimportant', isCorrect: false },
            { text: 'optional', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss Sie {{dringend}} sprechen.',
          'Das ist eine {{dringende}} Angelegenheit.',
          'Bitte antworten Sie so schnell wie möglich, es ist {{dringend}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Sache ist {{dringend}}.',
        positivAttributiv: 'Das ist eine {{dringende}} Sache.',
        komparativPredicativ: 'Diese Sache ist {{dringender}} als jene.',
        komparativAttributiv: 'Das ist die {{dringendere}} Sache.',
        superlativPredicativ: 'Diese Angelegenheit ist {{am dringendsten}}.',
        superlativAttributiv: 'Das ist die {{dringendste}} Angelegenheit.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'dringen' (to penetrate, press) — dringend describes something that presses urgently for attention.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'eilig',
            article: null,
            translation: 'urgent, hasty',
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
              "'Dringend' relates to 'dringen' (to press) — an urgent matter presses on you.",
          },
          {
            id: 2,
            content:
              "Think of something pressing urgently for your attention — dringend.",
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
