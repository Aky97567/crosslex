import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schaden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schaden',
        article: null,
        translation: 'to harm, damage',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To cause damage or have a negative effect on someone or something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schaden'?",
          options: [
            { text: 'to harm, damage', isCorrect: true },
            { text: 'to help someone', isCorrect: false },
            { text: 'to repair something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Rauchen {{schadet}} der Gesundheit.',
          'Zu viel Zucker {{schadet}} den Zähnen.',
          'Der Sturm hat dem Dach schwer {{geschadet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Schaden' (damage), from Old High German 'scado' — related to English 'scathe' (as in 'unscathed'), both sharing the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'schädigen',
            article: null,
            translation: 'to damage, harm (formal)',
            similarityScore: 4,
            level: ["B1"],
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
              "'Schaden' contains the noun 'Schaden' (damage) — schaden means causing Schaden.",
          },
          {
            id: 2,
            content:
              "Picture a warning label reading 'Schadet der Gesundheit' — 'Harmful to health'.",
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
