import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const umgang: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Umgang',
        article: 'der',
        translation: 'handling, dealing with',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The way someone deals with or interacts with a person or situation.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Umgang'?",
          options: [
            { text: 'handling, way of dealing with', isCorrect: true },
            { text: 'a disagreement', isCorrect: false },
            { text: 'a solution', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der {{Umgang}} mit Kunden erfordert Geduld.',
          'Sie hat einen freundlichen {{Umgang}} mit ihren Kollegen.',
          'Ich übe den {{Umgang}} mit dem neuen Programm.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'um-' (around) + 'gehen' (to go) — literally 'going around with' something, i.e. how you deal with it.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Behandlung',
            article: 'die',
            translation: 'treatment, handling',
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
              "'Umgang' — 'um' (around) + 'gehen' (to go) — how you 'go around' handling something.",
          },
          {
            id: 2,
            content:
              "Think of learning the ropes of how to deal with a new tool — Umgang.",
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
