import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ordentlich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'ordentlich',
        article: null,
        translation: 'tidy, proper',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Neat and well-organized; done properly.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'ordentlich'?",
          options: [
            { text: 'tidy, proper', isCorrect: true },
            { text: 'messy', isCorrect: false },
            { text: 'lazy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sein Zimmer ist immer sehr {{ordentlich}}.',
          'Bitte erledige die Arbeit {{ordentlich}}.',
          'Sie hat alles {{ordentlich}} aufgeräumt.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Sein Zimmer ist {{ordentlich}}.',
        positivAttributiv: 'Das ist ein {{ordentliches}} Zimmer.',
        komparativPredicativ: 'Sein Zimmer ist {{ordentlicher}} als meins.',
        komparativAttributiv: 'Das ist das {{ordentlichere}} Zimmer.',
        superlativPredicativ: 'Am Sonntag ist sein Zimmer {{am ordentlichsten}}.',
        superlativAttributiv: 'Das ist das {{ordentlichste}} Zimmer im Haus.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Ordnung' (order) — ordentlich describes something done in proper order.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aufgeräumt',
            article: null,
            translation: 'tidy, cleared up',
            similarityScore: 4,
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
              "'Ordentlich' contains 'Ordnung' (order) — ordentlich means keeping things in order.",
          },
          {
            id: 2,
            content: "Think of a perfectly organized desk — ordentlich.",
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
