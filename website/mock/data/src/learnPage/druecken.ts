import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const druecken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'drücken',
        article: null,
        translation: 'to press, push',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To apply force to something using one's hand or fingers, such as a button.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'drücken'?",
          options: [
            { text: 'to press, push', isCorrect: true },
            { text: 'to pull something', isCorrect: false },
            { text: 'to throw something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte {{drücken}} Sie hier auf den Knopf.',
          'Er {{drückt}} die Tür fest zu.',
          'Ich habe auf den falschen Knopf {{gedrückt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'drucken', related to English 'thrust' — both share the same Germanic root about applying force.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Schieben' means pushing something along, a different concept from pressing.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Drücken' sounds like 'druck-en' — related to English 'thrust', both about pushing with force.",
          },
          {
            id: 2,
            content:
              "Picture pushing an elevator button — 'Ich drücke auf den Knopf.'",
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
