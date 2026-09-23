import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const halten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'halten',
        article: null,
        translation: 'to hold, stop',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To keep something firmly in one's hand or arms, or to bring something to a stop.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'halten'?",
          options: [
            { text: 'to hold, stop', isCorrect: true },
            { text: 'to drop something', isCorrect: false },
            { text: 'to start moving', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du bitte meine Tasche {{halten}}?',
          'Der Bus {{hält}} an jeder Haltestelle.',
          'Sie hat das Baby vorsichtig {{gehalten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'haltan', related to English 'hold' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Halten' looks and sounds like English 'hold-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture gripping a railing tightly — that's halten.",
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
