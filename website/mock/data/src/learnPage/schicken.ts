import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schicken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schicken',
        article: null,
        translation: 'to send',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To cause something, such as a letter or message, to go to another person or place.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schicken'?",
          options: [
            { text: 'to send', isCorrect: true },
            { text: 'to receive something', isCorrect: false },
            { text: 'to keep something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{schicke}} dir die Fotos per E-Mail.',
          'Er {{schickt}} seiner Mutter jede Woche einen Brief.',
          'Wir haben das Paket schon {{geschickt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle Low German 'schicken' (to arrange, send), related to 'schicklich' (fitting, proper) — the sense of arranging things narrowed to sending them.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'senden',
            article: null,
            translation: 'to send (formal)',
            similarityScore: 3,
            level: ["B1"],
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
              "'Schicken' sounds like 'chick-en' — imagine sending a chicken by mail, a silly but memorable image.",
          },
          {
            id: 2,
            content:
              "Picture dropping a letter into a mailbox — that's schicken.",
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
