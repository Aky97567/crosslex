import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schliessen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schließen',
        article: null,
        translation: 'to close',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To shut something, such as a door or shop, so that it is no longer open.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schließen'?",
          options: [
            { text: 'to close', isCorrect: true },
            { text: 'to open something', isCorrect: false },
            { text: 'to fix something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte {{schließen}} Sie die Tür.',
          'Der Laden {{schließt}} um achtzehn Uhr.',
          'Sie hat das Fenster {{geschlossen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sliozan', related to English 'sluice' (a gate that opens and closes to control water) — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zumachen',
            article: null,
            translation: 'to close, shut',
            similarityScore: 4,
            level: ["A2"],
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
              "'Schließen' is related to English 'sluice' — both involve a gate that shuts.",
          },
          {
            id: 2,
            content:
              "Picture locking up a shop for the night — that's schließen.",
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
