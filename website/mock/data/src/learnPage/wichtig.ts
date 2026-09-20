import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wichtig: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'wichtig',
        article: null,
        translation: 'important',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Of great significance or value; deserving attention.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'wichtig'?",
          options: [
            { text: 'important', isCorrect: true },
            { text: 'unimportant', isCorrect: false },
            { text: 'boring', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das ist eine sehr {{wichtige}} Entscheidung.',
          'Pünktlichkeit ist mir {{wichtig}}.',
          'Die Unterlagen sind besonders {{wichtig}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Entscheidung ist {{wichtig}}.',
        positivAttributiv: 'Das ist eine {{wichtige}} Entscheidung.',
        komparativPredicativ: 'Diese Entscheidung ist {{wichtiger}} als jene.',
        komparativAttributiv: 'Das ist die {{wichtigere}} Entscheidung.',
        superlativPredicativ: 'Dieser Termin ist mir {{am wichtigsten}}.',
        superlativAttributiv: 'Das ist der {{wichtigste}} Termin dieser Woche.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Gewicht' (weight) — something wichtig literally 'carries weight' in importance.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bedeutend',
            article: null,
            translation: 'significant',
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
              "'Wichtig' relates to 'Gewicht' (weight) — important things carry weight.",
          },
          {
            id: 2,
            content:
              "Think of something that 'weighs' heavily on your decisions — wichtig.",
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
