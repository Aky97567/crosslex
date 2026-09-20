import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const haeufig: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'häufig',
        article: null,
        translation: 'frequent, often',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Happening often; occurring repeatedly.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'häufig'?",
          options: [
            { text: 'frequent, often', isCorrect: true },
            { text: 'rare', isCorrect: false },
            { text: 'never', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Diese Frage wird mir {{häufig}} gestellt.',
          'Er macht {{häufig}} denselben Fehler.',
          'Regen ist in diesem Monat {{häufig}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieser Fehler ist {{häufig}}.',
        positivAttributiv: 'Das ist ein {{häufiger}} Fehler.',
        komparativPredicativ: 'Dieser Fehler ist {{häufiger}} als jener.',
        komparativAttributiv: 'Das ist der {{häufigere}} Fehler.',
        superlativPredicativ: 'Dieser Grund ist {{am häufigsten}}.',
        superlativAttributiv: 'Das ist der {{häufigste}} Grund für Beschwerden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Haufen' (heap, pile) — häufig originally described something piling up frequently.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'oft',
            article: null,
            translation: 'often',
            similarityScore: 5,
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
              "'Häufig' relates to 'Haufen' (heap) — frequent things pile up like a heap.",
          },
          {
            id: 2,
            content:
              "Think of a growing heap from something happening again and again — häufig.",
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
