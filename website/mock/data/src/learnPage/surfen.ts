import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const surfen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'surfen',
        article: null,
        translation: 'to surf',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To ride waves on a board in the ocean, or to browse the internet.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'surfen'?",
          options: [
            { text: 'to surf', isCorrect: true },
            { text: 'to swim underwater', isCorrect: false },
            { text: 'to sail a boat', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er {{surft}} jeden Sommer an der Nordsee.',
          'Ich {{surfe}} abends oft im Internet.',
          'Wir haben letztes Jahr in Portugal {{gesurft}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed directly from English 'surf' — the German verb keeps the original spelling and adds German endings.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No direct single-word synonym for either sense (waves or internet).
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Surfen' is simply the English word 'surf' with a German ending — an easy cognate.",
          },
          {
            id: 2,
            content:
              "Picture riding a wave on a surfboard while shouting 'Ich surfe!'",
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
