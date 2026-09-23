import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kommen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kommen',
        article: null,
        translation: 'to come',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To move toward the person speaking, or to arrive at a place.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kommen'?",
          options: [
            { text: 'to come', isCorrect: true },
            { text: 'to leave a place', isCorrect: false },
            { text: 'to stay far away', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          '{{Kommst}} du heute Abend zur Party?',
          'Der Zug {{kommt}} in fünf Minuten.',
          'Sie ist gestern spät nach Hause {{gekommen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'queman', related to English 'come' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Ankommen' means specifically 'to arrive', narrower than the general 'come'.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Kommen' sounds a bit like 'come-en' — an easy connection to English 'come'.",
          },
          {
            id: 2,
            content:
              "Picture waving someone over — 'Komm her!' means 'Come here!'",
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
