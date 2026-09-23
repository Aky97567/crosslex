import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const regnen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'regnen',
        article: null,
        translation: 'to rain',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To fall as rain from the sky — used only in the impersonal form 'es regnet'.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'regnen'?",
          options: [
            { text: 'to rain', isCorrect: true },
            { text: 'to snow', isCorrect: false },
            { text: 'to be sunny', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Es {{regnet}} den ganzen Tag.',
          'Morgen soll es wieder {{regnen}}.',
          'Es hat gestern stark {{geregnet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Regen' (rain), from Old High German 'regan' — directly related to English 'rain'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // Impersonal weather verb with no synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Regnen' contains 'Regen' (rain) — es regnet when Regen falls.",
          },
          {
            id: 2,
            content:
              "Picture dark clouds and an umbrella — 'Es regnet!'",
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
