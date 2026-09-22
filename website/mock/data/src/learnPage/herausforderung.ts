import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const herausforderung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Herausforderung',
        article: 'die',
        translation: 'challenge',
        partOfSpeech: 'noun',
        themes: ['daily_life', 'work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: "A difficult task that tests someone's abilities.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Herausforderung'?",
          options: [
            { text: 'a challenge', isCorrect: true },
            { text: 'an easy task', isCorrect: false },
            { text: 'a reward', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Diese Aufgabe ist eine echte {{Herausforderung}}.',
          'Er liebt neue {{Herausforderungen}}.',
          'Die größte {{Herausforderung}} war die Sprache.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'heraus' (out) + 'fordern' (to demand) — literally 'to call someone out to compete', i.e. a challenge.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Schwierigkeit',
            article: 'die',
            translation: 'difficulty',
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
              "'Herausforderung' contains 'fordern' (to demand) — a challenge demands something out of you.",
          },
          {
            id: 2,
            content:
              "Think of someone calling you 'out' to prove yourself — Herausforderung.",
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
