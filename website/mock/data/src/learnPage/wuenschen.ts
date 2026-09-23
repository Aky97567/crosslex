import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wuenschen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'wünschen',
        article: null,
        translation: 'to wish',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To want something to happen, or to express a hope for someone else's happiness or success.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'wünschen'?",
          options: [
            { text: 'to wish', isCorrect: true },
            { text: 'to plan something in detail', isCorrect: false },
            { text: 'to refuse something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{wünsche}} mir ein neues Fahrrad.',
          'Was {{wünschst}} du dir zum Geburtstag?',
          'Wir haben ihr alles Gute {{gewünscht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'wunsken', related to English 'wish' — both descend from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Hoffen' (to hope) implies some expectation, a different concept from simply wishing.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Wünschen' looks and sounds like English 'wish in' — make a wish.",
          },
          {
            id: 2,
            content:
              "Picture blowing out birthday candles while you dir etwas wünschst.",
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
