import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const tanzen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'tanzen',
        article: null,
        translation: 'to dance',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To move rhythmically to music.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'tanzen'?",
          options: [
            { text: 'to dance', isCorrect: true },
            { text: 'to sing', isCorrect: false },
            { text: 'to run', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{tanzen}} gern auf Partys.',
          'Sie {{tanzt}} seit Jahren Ballett.',
          'Ich habe die ganze Nacht {{getanzt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old French 'dancier', borrowed into Middle High German — the same root gives English 'dance'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Tanzen' looks and sounds almost exactly like 'dance' — same French root.",
          },
          {
            id: 2,
            content:
              "Picture someone getting a 'tan' while dancing at the beach — a sound-alike hook for 'tanzen'.",
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
