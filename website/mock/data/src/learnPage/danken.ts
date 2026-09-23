import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const danken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'danken',
        article: null,
        translation: 'to thank',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To express gratitude to someone, usually by saying thank you.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'danken'?",
          options: [
            { text: 'to thank', isCorrect: true },
            { text: 'to apologize to someone', isCorrect: false },
            { text: 'to greet someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{danke}} dir für deine Hilfe.',
          'Er {{dankt}} seinen Eltern für alles.',
          'Wir haben ihr herzlich {{gedankt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Dank' (thanks), related to English 'think' — thanking someone originally meant 'thinking well of them'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Danken' sounds like 'dank-en' — imagine saying 'Danke!' (thanks) whenever you danken someone.",
          },
          {
            id: 2,
            content:
              "Picture shaking hands and saying 'Vielen Dank!' — that's danken.",
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
