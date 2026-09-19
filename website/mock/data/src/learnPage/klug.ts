import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const klug: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'klug',
        article: null,
        translation: 'clever, smart',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having or showing intelligence and good judgment.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'klug'?",
          options: [
            { text: 'clever, smart', isCorrect: true },
            { text: 'lazy', isCorrect: false },
            { text: 'strong', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie ist sehr {{klug}}.',
          'Das war eine {{kluge}} Entscheidung.',
          'Er löst Probleme immer {{klug}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle Low German 'klok', related to Dutch 'kloek' (bold, sound) — a Low German word for sound judgment that spread into standard German.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'intelligent',
            article: null,
            translation: 'intelligent',
            similarityScore: 4,
            level: ['A2'],
            register: 'borrowed',
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
              "'Klug' rhymes with 'look' — take a smart look before you decide.",
          },
          {
            id: 2,
            content: "Think of an owl — wise and 'klug' (clever).",
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
