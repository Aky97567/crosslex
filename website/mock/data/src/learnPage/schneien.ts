import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schneien: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schneien',
        article: null,
        translation: 'to snow',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To fall as snow from the sky — used only in the impersonal form 'es schneit'.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schneien'?",
          options: [
            { text: 'to snow', isCorrect: true },
            { text: 'to rain', isCorrect: false },
            { text: 'to become warm', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Im Winter {{schneit}} es hier oft.',
          'Es hat die ganze Nacht {{geschneit}}.',
          'Schau mal, es {{schneit}}!',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Schnee' (snow), from Old High German 'sneo' — directly related to English 'snow'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // Impersonal weather verb with no single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Schneien' contains 'Schnee' (snow) — es schneit when Schnee falls.",
          },
          {
            id: 2,
            content:
              "Picture snowflakes falling while a child shouts 'Es schneit!'",
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
