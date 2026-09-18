import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aufstehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'aufstehen',
        article: null,
        translation: 'to get up, stand up',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To rise from a lying or sitting position, especially getting out of bed.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'aufstehen'?",
          options: [
            { text: 'to get up, stand up', isCorrect: true },
            { text: 'to sit down', isCorrect: false },
            { text: 'to go to sleep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss morgen früh {{aufstehen}}.',
          'Ich {{stehe}} jeden Tag um sechs Uhr {{auf}}.',
          'Heute bin ich spät {{aufgestanden}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'auf' (up) + 'stehen' (to stand) — literally 'to stand up'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found — 'aufwachen' (to wake
        // up) names a different, earlier moment (waking, not getting
        // out of bed), not the same concept.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Auf' + 'stehen' — stand (stehen) up (auf): getting out of bed.",
          },
          {
            id: 2,
            content:
              "Think of standing 'up' from bed each morning — that's 'aufstehen'.",
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
