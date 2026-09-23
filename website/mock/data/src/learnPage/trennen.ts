import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const trennen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich trennen',
        article: null,
        translation: 'to separate, break up',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To end a romantic relationship or partnership, or more generally to split apart from someone or something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich trennen'?",
          options: [
            { text: 'to separate, break up', isCorrect: true },
            { text: 'to get married', isCorrect: false },
            { text: 'to move in together', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie haben sich nach zehn Jahren {{getrennt}}.',
          'Ich {{trenne}} mich nur ungern von alten Sachen.',
          'Wann {{trennt}} ihr euch eigentlich?',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'trennen', a purely Germanic word for splitting or parting something, with no direct English cognate.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Scheiden' specifically means legal divorce, a narrower concept than trennen.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Trennen' sounds like 'trend-en' — imagine a couple parting ways, a sad trend.",
          },
          {
            id: 2,
            content:
              "Picture drawing a line between two things to trennen them.",
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
