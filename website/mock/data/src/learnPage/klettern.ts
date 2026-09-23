import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const klettern: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'klettern',
        article: null,
        translation: 'to climb',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To move up, down, or across something using hands and feet, such as a mountain, tree, or wall.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'klettern'?",
          options: [
            { text: 'to climb', isCorrect: true },
            { text: 'to swim across a river', isCorrect: false },
            { text: 'to drive up a hill', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Kinder {{klettern}} gern auf Bäume.',
          'Er {{klettert}} jedes Wochenende in der Kletterhalle.',
          'Wir sind auf den höchsten Berg {{geklettert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'kletteren', a word shared across Germanic dialects for scrambling or crawling upward — a purely Germanic word with no direct English cognate.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Steigen' (to climb, rise) is broader — it covers any upward movement, not just hands-and-feet climbing.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Klettern' sounds like 'clatter-n' — imagine the clattering sound of hands and feet scrambling up rocks.",
          },
          {
            id: 2,
            content:
              "Picture a rock climber gripping the wall — that's klettern.",
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
