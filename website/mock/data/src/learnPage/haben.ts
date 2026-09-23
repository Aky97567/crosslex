import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const haben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'haben',
        article: null,
        translation: 'to have',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To possess or own something, or to experience a feeling or condition.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'haben'?",
          options: [
            { text: 'to have', isCorrect: true },
            { text: 'to give something away', isCorrect: false },
            { text: 'to need something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{habe}} zwei Geschwister.',
          '{{Hast}} du heute Zeit?',
          'Wir haben in letzter Zeit viele Probleme {{gehabt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'habēn', directly related to English 'have' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Besitzen' (to own) is more formal/legal, a narrower concept than general 'have'.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Haben' looks and sounds like English 'have-n' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture counting what you own — 'Ich habe ein Auto und ein Fahrrad.'",
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
