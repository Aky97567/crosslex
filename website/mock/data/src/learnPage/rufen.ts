import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const rufen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'rufen',
        article: null,
        translation: 'to call out',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To say something loudly to get someone's attention, or to summon someone.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'rufen'?",
          options: [
            { text: 'to call out', isCorrect: true },
            { text: 'to whisper quietly', isCorrect: false },
            { text: 'to write a message', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Mutter {{ruft}} ihre Kinder zum Essen.',
          'Ich {{rufe}} dich später an.',
          'Er hat laut um Hilfe {{gerufen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'ruofan', an old Germanic word for calling out loudly — related to the modern noun 'Ruf' (call, reputation).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Schreien' (to scream) is more intense than a plain call, not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Rufen' sounds like 'roof in' — shout from the rooftop to be heard.",
          },
          {
            id: 2,
            content:
              "Picture cupping your hands around your mouth to rufen (call out) loudly.",
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
