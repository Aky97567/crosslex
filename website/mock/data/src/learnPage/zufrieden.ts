import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zufrieden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'zufrieden',
        article: null,
        translation: 'satisfied, content',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Pleased with a situation; content.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'zufrieden'?",
          options: [
            { text: 'satisfied, content', isCorrect: true },
            { text: 'dissatisfied', isCorrect: false },
            { text: 'angry', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bist du mit dem Ergebnis {{zufrieden}}?',
          'Ich bin sehr {{zufrieden}} mit meiner neuen Wohnung.',
          'Der Kunde war leider nicht {{zufrieden}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Der Kunde ist {{zufrieden}}.',
        positivAttributiv: 'Das ist ein {{zufriedener}} Kunde.',
        komparativPredicativ: 'Ich bin mit diesem Ergebnis {{zufriedener}} als mit dem letzten.',
        komparativAttributiv: 'Das ist der {{zufriedenere}} Kunde.',
        superlativPredicativ: 'Der Kunde war {{am zufriedensten}}.',
        superlativAttributiv: 'Das war der {{zufriedenste}} Kunde des Tages.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'zu' (to) + 'Frieden' (peace) — literally 'at peace', i.e. content.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'glücklich',
            article: null,
            translation: 'happy',
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
              "'Zufrieden' contains 'Frieden' (peace) — being zufrieden means being at peace with things.",
          },
          {
            id: 2,
            content: "Think of inner peace and contentment — zufrieden.",
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
