import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const scharf: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'scharf',
        article: null,
        translation: 'sharp, spicy',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'irregular_comparison'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Having a fine cutting edge, or having an intense, spicy taste.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'scharf'?",
          options: [
            { text: 'sharp, spicy', isCorrect: true },
            { text: 'sweet', isCorrect: false },
            { text: 'soft', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Messer ist sehr {{scharf}}.',
          'Das Essen in Thailand ist oft sehr {{scharf}}.',
          'Sie hat einen {{scharfen}} Blick für Details.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieses Curry ist {{scharf}}.',
        positivAttributiv: 'Das ist ein {{scharfes}} Curry.',
        komparativPredicativ: 'Dieses Curry ist {{schärfer}} als das andere.',
        komparativAttributiv: 'Das ist das {{schärfere}} Curry.',
        superlativPredicativ: 'Dieses Gericht schmeckt {{am schärfsten}}.',
        superlativAttributiv: 'Das ist das {{schärfste}} Gericht auf der Karte.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'scarf', related to English 'sharp' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'würzig',
            article: null,
            translation: 'spicy, flavorful',
            similarityScore: 3,
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
              "'Scharf' sounds like 'sharp' — same root, same core meaning.",
          },
          {
            id: 2,
            content: "Think of a sharp chili pepper — scharf.",
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
