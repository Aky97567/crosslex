import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const reisen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'reisen',
        article: null,
        translation: 'to travel',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'transport', 'timetable'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To go from one place to another, especially over a long distance.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'reisen'?",
          options: [
            { text: 'to travel', isCorrect: true },
            { text: 'to stay', isCorrect: false },
            { text: 'to walk', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{reise}} gern nach Italien.',
          'Wir {{reisen}} im Sommer nach Spanien.',
          'Er ist letztes Jahr durch Asien {{gereist}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'reisa' (journey), directly related to the German noun 'Reise' (trip).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found — 'verreisen' is a
        // compound built from 'reisen' naming a narrower, more specific
        // sense ("to go away on a trip"), not the same general concept.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Reisen' relates to 'Reise' (trip) — to reisen is simply to take a Reise.",
          },
          {
            id: 2,
            content:
              "Sounds a bit like 'raisin', but 'reisen' actually means to travel.",
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
