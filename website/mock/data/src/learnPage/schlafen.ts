import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schlafen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schlafen',
        article: null,
        translation: 'to sleep',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable', 'irregular'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To rest in the natural state of unconsciousness, with the eyes closed.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schlafen'?",
          options: [
            { text: 'to sleep', isCorrect: true },
            { text: 'to dream', isCorrect: false },
            { text: 'to wake up', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte jetzt {{schlafen}}.',
          'Das Baby {{schläft}} den ganzen Tag.',
          'Wir haben schlecht {{geschlafen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'slafan', related to English 'sleep' — both from the same ancient Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'ruhen' (to rest) names a different, broader concept —
        // resting isn't the same as sleeping — so no entry is listed.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Schlafen' sounds close to 'sleep an' — 'schlafen' means to sleep.",
          },
          {
            id: 2,
            content: "Think of counting sheep as you drift off to 'schlafen'.",
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
