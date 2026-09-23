import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wissen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'wissen',
        article: null,
        translation: 'to know (facts)',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To have information or knowledge about something, especially facts.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'wissen'?",
          options: [
            { text: 'to know (facts)', isCorrect: true },
            { text: 'to guess something', isCorrect: false },
            { text: 'to forget something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{weiß}} die Antwort nicht.',
          '{{Weißt}} du, wie spät es ist?',
          'Er hat es schon lange {{gewusst}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'wizzan', related to the archaic English word 'wit' (as in 'to wit', meaning knowledge) — both share the same ancient root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Kennen' (to be familiar with) is a different type of knowing, not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Wissen' is related to English 'wit' — someone quick-witted weiß things fast.",
          },
          {
            id: 2,
            content:
              "Picture a lightbulb of certainty — 'Ich weiß es genau!'",
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
