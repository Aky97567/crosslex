import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ankommen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'ankommen',
        article: null,
        translation: 'to arrive',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['transport', 'trennbar'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To reach a place at the end of a journey.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'ankommen'?",
          options: [
            { text: 'to arrive', isCorrect: true },
            { text: 'to depart', isCorrect: false },
            { text: 'to wait', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Zug soll um acht Uhr {{ankommen}}.',
          'Ich {{komme}} morgen in Berlin {{an}}.',
          'Wir sind pünktlich {{angekommen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an-' (at, on) + 'kommen' (to come) — literally 'to come to' a place.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'eintreffen',
            article: null,
            translation: 'to arrive (more formal)',
            similarityScore: 4,
            level: ['B1'],
            register: 'formal',
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
              "'An' + 'kommen' — coming (kommen) 'to' (an) a place: arriving.",
          },
          {
            id: 2,
            content:
              "Picture a train finally coming 'on' to the platform — 'ankommen'.",
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
