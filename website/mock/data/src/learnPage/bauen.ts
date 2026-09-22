import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bauen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bauen',
        article: null,
        translation: 'to build',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To construct or make something, such as a house, using materials, tools, and effort.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bauen'?",
          options: [
            { text: 'to build', isCorrect: true },
            { text: 'to sell something', isCorrect: false },
            { text: 'to clean something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Meine Eltern {{bauen}} ein neues Haus.',
          'Er {{baut}} jedes Wochenende an seinem Auto.',
          'Sie haben die Brücke in zwei Jahren {{gebaut}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'buan', meaning 'to dwell' — the same root gives English 'bower' and 'neighbor' (literally 'near-dweller').",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'errichten',
            article: null,
            translation: 'to erect, construct (formal)',
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
              "'Bauen' sounds like 'bow-en' — picture bowing wooden boughs into the frame of a house.",
          },
          {
            id: 2,
            content:
              "Picture a construction site sign that reads 'Bauen' — it always means something is being built.",
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
