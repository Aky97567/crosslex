import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schwer: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schwer',
        article: null,
        translation: 'heavy, difficult',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having great weight, or not easy to do.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schwer'?",
          options: [
            { text: 'heavy, difficult', isCorrect: true },
            { text: 'light, easy', isCorrect: false },
            { text: 'fast', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Koffer ist sehr {{schwer}}.',
          'Das war eine {{schwere}} Entscheidung.',
          'Diese Aufgabe ist mir zu {{schwer}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieser Koffer ist {{schwer}}.',
        positivAttributiv: 'Das ist ein {{schwerer}} Koffer.',
        komparativPredicativ: 'Dieser Koffer ist {{schwerer}} als meiner.',
        komparativAttributiv: 'Das ist der {{schwerere}} Koffer.',
        superlativPredicativ: 'Diese Prüfung war {{am schwersten}}.',
        superlativAttributiv: 'Das war die {{schwerste}} Prüfung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'swari', a Germanic word for something weighty or burdensome — the sense of 'difficult' grew out of the idea of a heavy load.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'schwierig',
            article: null,
            translation: 'difficult',
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
              "Picture struggling under a heavy load — that feeling is 'schwer'.",
          },
          {
            id: 2,
            content:
              "'Schwer' rhymes loosely with 'swear' — you might swear under something 'schwer' (heavy).",
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
