import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kuessen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'küssen',
        article: null,
        translation: 'to kiss',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To touch someone with one's lips as a sign of love, affection, or greeting.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'küssen'?",
          options: [
            { text: 'to kiss', isCorrect: true },
            { text: 'to hug someone', isCorrect: false },
            { text: 'to wave at someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er {{küsst}} sie zum Abschied.',
          'Die beiden {{küssten}} sich vor dem Kino.',
          'Sie hat ihn auf die Wange {{geküsst}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'kussen', related to English 'kiss' — both descend from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Küssen' looks and sounds like English 'kiss-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture a couple saying goodbye at the airport — 'Sie küssen sich.'",
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
