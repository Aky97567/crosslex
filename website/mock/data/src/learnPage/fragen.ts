import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fragen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'fragen',
        article: null,
        translation: 'to ask',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To put a question to someone in order to get information.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'fragen'?",
          options: [
            { text: 'to ask', isCorrect: true },
            { text: 'to answer', isCorrect: false },
            { text: 'to know', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Darf ich dich etwas {{fragen}}?',
          'Sie {{fragt}} den Lehrer nach der Hausaufgabe.',
          'Ich habe ihn nach dem Weg {{gefragt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'fragen', closely related to Dutch 'vragen' — a shared West Germanic root for asking.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found — 'nachfragen' and
        // 'befragen' name narrower, more specific activities (following
        // up, formally interviewing), not the same general concept.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "Think of 'fragging' someone with questions in games — 'fragen' is asking.",
          },
          {
            id: 2,
            content:
              "Picture a game show host constantly 'fragen' (asking) contestants questions.",
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
