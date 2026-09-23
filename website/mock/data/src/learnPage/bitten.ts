import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bitten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bitten',
        article: null,
        translation: 'to ask for, request',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To politely ask someone for something or ask them to do something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bitten'?",
          options: [
            { text: 'to ask for, request', isCorrect: true },
            { text: 'to order someone', isCorrect: false },
            { text: 'to thank someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{bitte}} dich um Hilfe.',
          'Er {{bittet}} um ein Glas Wasser.',
          'Sie hat mich um Geduld {{gebeten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'bitten', related to English 'bid' (as in 'to bid someone to do something') — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Fragen' (to ask questions) is broader — not the same as politely requesting.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Bitten' sounds like 'bid-en' — you bid (bitten) someone for a favor.",
          },
          {
            id: 2,
            content:
              "Picture saying 'Bitte!' (please) while asking for something — that's bitten.",
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
