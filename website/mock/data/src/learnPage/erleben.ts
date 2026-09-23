import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erleben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'erleben',
        article: null,
        translation: 'to experience',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To have something happen to you personally, or to go through an event, especially a memorable one.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'erleben'?",
          options: [
            { text: 'to experience', isCorrect: true },
            { text: 'to imagine something', isCorrect: false },
            { text: 'to read about something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir haben auf der Reise viel {{erlebt}}.',
          'Ich möchte gern ein echtes Abenteuer {{erleben}}.',
          'Sie {{erlebt}} ihren ersten Winter in Deutschland.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'leben' (to live) with the prefix 'er-' marking successful completion — erleben is literally 'to live through' something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Leben' (to live) is broader than experiencing a specific event, not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Erleben' contains 'leben' (to live) — erleben means living through an experience.",
          },
          {
            id: 2,
            content:
              "Picture a passport full of stamps — proof of everything you erlebt hast.",
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
