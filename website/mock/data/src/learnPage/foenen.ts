import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const foenen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'fönen',
        article: null,
        translation: 'to blow-dry',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To dry hair using a hairdryer.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'fönen'?",
          options: [
            { text: 'to blow-dry', isCorrect: true },
            { text: "to brush one's hair", isCorrect: false },
            { text: "to wash one's hair", isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{föne}} mir nach der Dusche die Haare.',
          'Sie {{fönt}} ihre Haare jeden Morgen.',
          'Er hat sich die Haare schnell {{gefönt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Fön' (hairdryer, from 'Föhn', the warm Alpine wind) — fönen means to dry using a Fön.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Fönen' contains 'Fön' — you always fönen with a Fön (hairdryer).",
          },
          {
            id: 2,
            content:
              "Picture warm air blowing through your hair — that's fönen.",
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
