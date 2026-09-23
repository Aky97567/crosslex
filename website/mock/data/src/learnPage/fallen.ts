import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fallen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'fallen',
        article: null,
        translation: 'to fall',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To drop down suddenly from a higher position to a lower one, often by accident.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'fallen'?",
          options: [
            { text: 'to fall', isCorrect: true },
            { text: 'to jump up', isCorrect: false },
            { text: 'to stand still', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Pass auf, das Glas {{fällt}} vom Tisch!',
          'Er ist auf dem Eis {{gefallen}}.',
          'Die Blätter {{fallen}} im Herbst von den Bäumen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'fallan', directly related to English 'fall' — both share the same Germanic origin.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'stürzen',
            article: null,
            translation: 'to fall, plunge (suddenly)',
            similarityScore: 3,
            level: ["B1"],
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
              "'Fallen' looks just like English 'fall(en)' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture someone tripping and shouting 'Fallen!' as a warning.",
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
