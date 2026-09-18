import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const tisch: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Tisch',
        article: 'der',
        translation: 'table',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A piece of furniture with a flat top and legs.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Tisch'?",
          options: [
            { text: 'A type of vehicle', isCorrect: false },
            { text: 'A piece of furniture', isCorrect: true },
            { text: 'A type of food', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der {{Tisch}} im Esszimmer ist aus Holz.',
          'Er stellt das Essen auf den {{Tisch}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'tisch', from Old High German 'tisc'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine synonym found — Schreibtisch/Esstisch/Beistelltisch are
        // functionally distinct kinds of table (desk, dining table, side
        // table), not synonyms of Tisch itself. Flagged for a human content
        // pass rather than filled with a weak fit.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content: "Think of 'Tisch' as a table with a 'dish' on it.",
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
