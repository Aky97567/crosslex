import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schenken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schenken',
        article: null,
        translation: 'to give (as a gift)',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To give something to someone as a present, without expecting anything in return.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schenken'?",
          options: [
            { text: 'to give (as a gift)', isCorrect: true },
            { text: 'to lend something', isCorrect: false },
            { text: 'to sell something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{schenke}} meiner Mutter Blumen.',
          'Was {{schenkst}} du ihm zum Geburtstag?',
          'Wir haben den Kindern Bücher {{geschenkt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'scenken' (to pour, to serve a drink) — the sense broadened from pouring a drink to giving generously.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Geben' (to give) is broader — it covers giving anything, not specifically as a gift.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Schenken' sounds like 'shank-en' — playfully imagine a handshake sealing a gift.",
          },
          {
            id: 2,
            content:
              "Picture wrapping a present and saying 'Ich schenke dir das.'",
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
