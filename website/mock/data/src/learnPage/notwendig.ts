import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const notwendig: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'notwendig',
        article: null,
        translation: 'necessary',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Required in order for something to happen or be true.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'notwendig'?",
          options: [
            { text: 'necessary', isCorrect: true },
            { text: 'optional', isCorrect: false },
            { text: 'forbidden', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ein gültiger Ausweis ist {{notwendig}}.',
          'Ist diese Unterschrift wirklich {{notwendig}}?',
          'Die Reparatur war dringend {{notwendig}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Reparatur ist {{notwendig}}.',
        positivAttributiv: 'Das ist eine {{notwendige}} Reparatur.',
        komparativPredicativ: 'Diese Reparatur ist {{notwendiger}} als jene.',
        komparativAttributiv: 'Das ist die {{notwendigere}} Reparatur.',
        superlativPredicativ: 'Diese Änderung war {{am notwendigsten}}.',
        superlativAttributiv: 'Das war die {{notwendigste}} Änderung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Not' (need, necessity) + 'wenden' (to turn) — literally 'turning towards a need', i.e. required by necessity.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'erforderlich',
            article: null,
            translation: 'required (formal)',
            similarityScore: 4,
            level: ['B1'],
            register: 'formal',
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
              "'Notwendig' contains 'Not' (need) — something notwendig answers a need.",
          },
          {
            id: 2,
            content:
              "Think of an emergency ('Not') requiring immediate action — notwendig.",
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
