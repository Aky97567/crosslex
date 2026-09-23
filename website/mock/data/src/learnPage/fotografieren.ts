import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fotografieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'fotografieren',
        article: null,
        translation: 'to photograph',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To take a picture of someone or something using a camera.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'fotografieren'?",
          options: [
            { text: 'to photograph', isCorrect: true },
            { text: 'to draw a picture', isCorrect: false },
            { text: 'to write a letter', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{fotografiere}} gern die Berge im Urlaub.',
          'Er {{fotografiert}} jedes Gebäude in der Stadt.',
          'Wir haben die Hochzeit {{fotografiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from the international term 'photograph', from Greek 'phos' (light) and 'graphein' (to write) — literally 'writing with light'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'knipsen',
            article: null,
            translation: 'to snap a photo (colloquial)',
            similarityScore: 3,
            level: ["B1"],
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
              "'Fotografieren' is nearly identical to English 'photograph' — an easy cognate.",
          },
          {
            id: 2,
            content:
              "Think of a camera flash: 'Foto!' — then 'grafieren' (recording the image).",
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
