import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const singen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'singen',
        article: null,
        translation: 'to sing',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To produce musical sounds with one's voice, usually following a melody.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'singen'?",
          options: [
            { text: 'to sing', isCorrect: true },
            { text: 'to dance', isCorrect: false },
            { text: 'to paint', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie {{singt}} jeden Abend unter der Dusche.',
          'Wir {{singen}} zusammen im Chor.',
          'Er hat auf der Bühne wunderschön {{gesungen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'singan', directly related to English 'sing' — both share the same Germanic root.",
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
              "'Singen' looks and sounds like English 'sing in' — sing in tune.",
          },
          {
            id: 2,
            content:
              "Picture a choir bursting into song — 'Wir singen!'",
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
