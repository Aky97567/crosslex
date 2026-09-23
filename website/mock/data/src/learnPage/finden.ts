import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const finden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'finden',
        article: null,
        translation: 'to find',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To discover or locate something, especially after searching for it, or to have an opinion about something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'finden'?",
          options: [
            { text: 'to find', isCorrect: true },
            { text: 'to lose something', isCorrect: false },
            { text: 'to hide something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{finde}} meinen Schlüssel nicht.',
          'Wo {{findet}} man hier eine Apotheke?',
          'Wir haben endlich eine Wohnung {{gefunden}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'findan', directly related to English 'find' — both share the same Germanic root.",
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
              "'Finden' looks and sounds like English 'find-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture searching your bag and finally finding your keys — that's finden.",
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
