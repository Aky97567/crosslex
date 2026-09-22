import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const laufen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'laufen',
        article: null,
        translation: 'to run, walk',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'transport', 'timetable', 'irregular'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To move quickly on foot, or more generally, to walk.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'laufen'?",
          options: [
            { text: 'to run, walk', isCorrect: true },
            { text: 'to sit', isCorrect: false },
            { text: 'to drive', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{laufe}} jeden Morgen eine Runde.',
          'Er {{läuft}} sehr schnell.',
          'Wir sind zum Bahnhof {{gelaufen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'loufan', related to English 'leap' — both from the same Germanic root for quick movement.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'rennen',
            article: null,
            translation: 'to run, sprint',
            similarityScore: 4,
            level: ['A2'],
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
              "'Laufen' relates to 'leap' — running (laufen) often starts with a leap forward.",
          },
          {
            id: 2,
            content:
              "Picture a runner who never stops — always 'laufen' (running) the whole way.",
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
