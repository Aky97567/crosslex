import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const mitbringen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'mitbringen',
        article: null,
        translation: 'to bring along',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To bring something or someone with you when you come.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'mitbringen'?",
          options: [
            { text: 'to bring along', isCorrect: true },
            { text: 'to take away', isCorrect: false },
            { text: 'to send', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du etwas zu essen {{mitbringen}}?',
          'Ich {{bringe}} einen Kuchen {{mit}}.',
          'Er hat seine Schwester {{mitgebracht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'mit' (with) + 'bringen' (to bring) — literally 'to bring with'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Mit' + 'bringen' — bringing (bringen) something 'with' (mit) you.",
          },
          {
            id: 2,
            content:
              "Think of bringing a plus-one 'with' you to a party — 'mitbringen'.",
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
