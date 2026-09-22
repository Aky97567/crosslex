import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const unterhalten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich unterhalten',
        article: null,
        translation: 'to converse, chat',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv', 'irregular'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To talk with someone in a friendly, informal way.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich unterhalten'?",
          options: [
            { text: 'to converse, chat', isCorrect: true },
            { text: 'to argue', isCorrect: false },
            { text: 'to remain silent', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir möchten uns über das Wochenende {{unterhalten}}.',
          'Sie {{unterhält}} sich gern mit ihren Nachbarn.',
          'Wir haben uns lange {{unterhalten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'unter-' (among, between) + 'halten' (to hold) — literally 'to hold together' a conversation between people.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'plaudern',
            article: null,
            translation: 'to chat (informal)',
            similarityScore: 4,
            level: ['B1'],
            register: 'colloquial',
            cefrRelevant: true,
          },
        ],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Unterhalten' contains 'halten' (to hold) — a conversation 'holds' people together.",
          },
          {
            id: 2,
            content:
              "'Unterhalten' can also mean 'to entertain' — close to chatting pleasantly with someone.",
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
