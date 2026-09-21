import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zuverlaessig: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'zuverlässig',
        article: null,
        translation: 'reliable',
        partOfSpeech: 'adjective',
        themes: ['work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Consistently good in quality or performance; trustworthy.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'zuverlässig'?",
          options: [
            { text: 'reliable', isCorrect: true },
            { text: 'unreliable', isCorrect: false },
            { text: 'lazy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Mein Kollege ist sehr {{zuverlässig}}.',
          'Ist diese Information {{zuverlässig}}?',
          'Wir brauchen einen {{zuverlässigen}} Partner.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Mein Kollege ist {{zuverlässig}}.',
        positivAttributiv: 'Das ist ein {{zuverlässiger}} Kollege.',
        komparativPredicativ: 'Mein Kollege ist {{zuverlässiger}} als der andere.',
        komparativAttributiv: 'Das ist der {{zuverlässigere}} Kollege.',
        superlativPredicativ: 'Dieser Partner ist {{am zuverlässigsten}}.',
        superlativAttributiv: 'Das ist der {{zuverlässigste}} Partner, den wir haben.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'sich verlassen auf' (to rely on) — zuverlässig describes something you can rely on.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'vertrauenswürdig',
            article: null,
            translation: 'trustworthy',
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
              "'Zuverlässig' relates to 'sich verlassen' (to rely on) — zuverlässig means worthy of reliance.",
          },
          {
            id: 2,
            content: "Think of someone you can always count on — zuverlässig.",
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
