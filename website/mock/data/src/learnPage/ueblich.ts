import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ueblich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'üblich',
        article: null,
        translation: 'usual, customary',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Done, used, or happening normally; customary.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'üblich'?",
          options: [
            { text: 'usual, customary', isCorrect: true },
            { text: 'unusual', isCorrect: false },
            { text: 'forbidden', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das ist in Deutschland durchaus {{üblich}}.',
          'Es ist {{üblich}}, sich vorher anzumelden.',
          'Die {{übliche}} Wartezeit beträgt zwei Wochen.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Methode ist {{üblich}}.',
        positivAttributiv: 'Das ist eine {{übliche}} Methode.',
        komparativPredicativ: 'Diese Methode ist {{üblicher}} als jene.',
        komparativAttributiv: 'Das ist die {{üblichere}} Methode.',
        superlativPredicativ: 'Diese Methode ist {{am üblichsten}}.',
        superlativAttributiv: 'Das ist die {{üblichste}} Methode.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Übung' (practice, habit) — üblich describes what is customarily practiced.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'gewöhnlich',
            article: null,
            translation: 'usual, ordinary',
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
              "'Üblich' relates to 'Übung' (practice) — what's üblich is what's practiced as normal.",
          },
          {
            id: 2,
            content: "Think of the usual routine everyone practices — üblich.",
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
