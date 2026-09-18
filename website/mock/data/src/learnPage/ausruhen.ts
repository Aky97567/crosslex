import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ausruhen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich ausruhen',
        article: null,
        translation: 'to rest',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar', 'timetable', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To stop being active in order to recover energy; to relax the body and mind.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich ausruhen'?",
          options: [
            { text: 'to rest', isCorrect: true },
            { text: 'to work', isCorrect: false },
            { text: 'to run', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte mich jetzt {{ausruhen}}.',
          'Ich {{ruhe}} mich am Nachmittag {{aus}}.',
          'Wir haben uns im Urlaub gut {{ausgeruht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus-' + 'ruhen' (to rest) — 'ruhen' comes from Old High German 'ruowen', related to English 'rest' via a shared root for calm and stillness.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'sich erholen',
            article: null,
            translation: 'to recover, recuperate',
            similarityScore: 4,
            level: ['B1'],
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
              "'Aus' + 'ruhen' (to rest) — literally resting 'out', i.e. taking a break to recover.",
          },
          {
            id: 2,
            content:
              "Think of stepping 'out' of your busy day to just 'ruhen' (rest) — 'ausruhen'.",
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
