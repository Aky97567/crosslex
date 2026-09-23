import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const beten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'beten',
        article: null,
        translation: 'to pray',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To speak to God or a higher power, often silently or in a fixed form of words, as an expression of faith.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'beten'?",
          options: [
            { text: 'to pray', isCorrect: true },
            { text: 'to sing a song', isCorrect: false },
            { text: 'to give a speech', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Viele Menschen {{beten}} vor dem Essen.',
          'Sie {{betet}} jeden Abend vor dem Schlafen.',
          'Er hat für seine kranke Mutter {{gebetet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'betōn', related to the archaic English word 'bid' in its older sense of 'to entreat, pray' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Anbeten' (to worship) is a stronger, more specific concept than a simple prayer.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Beten' sounds like 'bay-ten' — imagine kneeling quietly by a bay to beten (pray).",
          },
          {
            id: 2,
            content:
              "Picture folded hands and closed eyes — the universal posture for beten.",
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
