import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schmutzig: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schmutzig',
        article: null,
        translation: 'dirty',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Covered with dirt or marks; not clean.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schmutzig'?",
          options: [
            { text: 'dirty', isCorrect: true },
            { text: 'clean', isCorrect: false },
            { text: 'new', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Meine Schuhe sind ganz {{schmutzig}}.',
          'Das ist ein {{schmutziges}} Handtuch.',
          'Die Straße war sehr {{schmutzig}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Straße ist {{schmutzig}}.',
        positivAttributiv: 'Das ist eine {{schmutzige}} Straße.',
        komparativPredicativ: 'Diese Straße ist {{schmutziger}} als jene.',
        komparativAttributiv: 'Das ist die {{schmutzigere}} Straße.',
        superlativPredicativ: 'Dieses Zimmer war {{am schmutzigsten}}.',
        superlativAttributiv: 'Das war das {{schmutzigste}} Zimmer im Haus.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Schmutz' (dirt) + the adjective suffix '-ig' — 'Schmutz' comes from Middle High German 'smuz', related to English 'smut'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'dreckig',
            article: null,
            translation: 'dirty, filthy',
            similarityScore: 4,
            level: ['A2'],
            register: 'colloquial',
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
              "'Schmutzig' contains 'Schmutz' (dirt) — 'schmutzig' just means covered in dirt.",
          },
          {
            id: 2,
            content:
              "Think of 'smut' — a related English word for dirt or grime.",
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
