import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const berechtigung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Berechtigung',
        article: 'die',
        translation: 'authorization, entitlement',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Official permission or the right to do something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Berechtigung'?",
          options: [
            { text: 'authorization, entitlement', isCorrect: true },
            { text: 'a punishment', isCorrect: false },
            { text: 'a suggestion', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie benötigen eine {{Berechtigung}} für diesen Bereich.',
          'Seine {{Berechtigung}} wurde widerrufen.',
          'Mit dieser Karte haben Sie die {{Berechtigung}}, hier zu parken.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' + 'Recht' (right, law) — literally 'to grant someone a right'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Genehmigung',
            article: 'die',
            translation: 'permit, approval',
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
              "'Berechtigung' contains 'Recht' (right) — a Berechtigung grants you a right to do something.",
          },
          {
            id: 2,
            content:
              "Think of a badge granting you the right of entry — Berechtigung.",
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
