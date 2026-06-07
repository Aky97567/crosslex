import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verspaetung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Verspätung',
        article: 'die',
        translation: 'delay, lateness',
        partOfSpeech: 'noun',
        themes: ['transport'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Arriving or happening later than planned; used for trains, buses, flights, and people who are late.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Verspätung'?",
          options: [
            { text: 'a timetable change', isCorrect: false },
            { text: 'a delay or being late', isCorrect: true },
            { text: 'a cancelled journey', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Der Zug hat Verspätung. Die Verspätung beträgt 20 Minuten. Ich habe eine Verspätung — tut mir leid!',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'verspäten' (to delay) + the suffix '-ung'. 'Spät' means late — so Verspätung is literally the state of being too late.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Verzögerung',
            article: 'die',
            translation: 'delay, postponement',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Zuspätkommen',
            article: 'das',
            translation: 'being late, tardiness',
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
              "'Spät' means late. Verspätung = the very-late-ness. You'll hear it every time a German train is delayed.",
          },
          {
            id: 2,
            content:
              "Think: 'ver-' (gone wrong) + 'spät' (late) = something has gone wrong with the timing.",
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
