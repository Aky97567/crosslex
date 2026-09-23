import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schauen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schauen',
        article: null,
        translation: 'to look, watch',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To direct one's eyes toward something in order to see it, often for a while.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schauen'?",
          options: [
            { text: 'to look, watch', isCorrect: true },
            { text: 'to listen to music', isCorrect: false },
            { text: 'to smell something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          '{{Schau}} mal, wie schön der Sonnenuntergang ist!',
          'Wir {{schauen}} heute Abend einen Film.',
          'Er hat lange aus dem Fenster {{geschaut}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'scouwōn', related to English 'show' — both trace back to a shared Germanic root about looking and displaying.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'sehen',
            article: null,
            translation: 'to see, look',
            similarityScore: 3,
            level: ["A1"],
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
              "'Schauen' sounds like 'show-en' — you schauen (look at) a show.",
          },
          {
            id: 2,
            content:
              "Picture standing at a viewpoint, taking in the scenery — that's schauen.",
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
