import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const rennen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'rennen',
        article: null,
        translation: 'to run, race',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To move very quickly on foot, faster than jogging, often in a hurry or a race.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'rennen'?",
          options: [
            { text: 'to run, race', isCorrect: true },
            { text: 'to walk slowly', isCorrect: false },
            { text: 'to stand still', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{renne}} zur Bushaltestelle, weil ich spät dran bin.',
          'Die Kinder {{rennen}} über den Spielplatz.',
          'Er ist so schnell wie möglich zum Bahnhof {{gerannt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'rennen', related to English 'run' — both share a common Germanic root about swift movement.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Laufen' (to run, walk) is broader — it covers plain walking too, not just fast running.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Rennen' sounds like 'run-nen' — an easy sound connection to English 'run'.",
          },
          {
            id: 2,
            content:
              "Picture sprinting to catch a train, out of breath — that's rennen.",
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
