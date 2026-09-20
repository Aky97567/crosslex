import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const eindruck: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Eindruck',
        article: 'der',
        translation: 'impression',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'An idea or feeling about someone or something formed quickly.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Eindruck'?",
          options: [
            { text: 'an impression', isCorrect: true },
            { text: 'a decision', isCorrect: false },
            { text: 'a mistake', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er hat einen guten {{Eindruck}} hinterlassen.',
          'Mein erster {{Eindruck}} war sehr positiv.',
          'Welchen {{Eindruck}} hattest du von der Stadt?',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ein-' (in) + 'drücken' (to press) — literally 'something pressed in', i.e. a mental impression.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Gefühl',
            article: 'das',
            translation: 'feeling, sense',
            similarityScore: 3,
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
              "'Eindruck' — 'ein' (in) + 'drücken' (to press) — an impression is something pressed into your mind.",
          },
          {
            id: 2,
            content:
              "Think of a stamp pressed 'in', leaving a lasting mark — Eindruck.",
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
