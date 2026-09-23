import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const glauben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'glauben',
        article: null,
        translation: 'to believe, think',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To accept something as true, or to have an opinion about something without being certain.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'glauben'?",
          options: [
            { text: 'to believe, think', isCorrect: true },
            { text: 'to know something for certain', isCorrect: false },
            { text: 'to forget something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{glaube}}, es regnet morgen.',
          'Er {{glaubt}} mir nicht.',
          'Sie hat lange an das Projekt {{geglaubt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'gilouben', related to English 'believe' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Denken' (to think) is broader general thinking, not the same as believing.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Glauben' shares a root with English 'love' — both describe a strong conviction or feeling.",
          },
          {
            id: 2,
            content:
              "Picture crossing your fingers, hoping something is true — 'Ich glaube es.'",
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
