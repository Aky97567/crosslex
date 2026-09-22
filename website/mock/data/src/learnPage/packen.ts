import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const packen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'packen',
        article: null,
        translation: 'to pack',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To put things together into a bag, box, or suitcase, often for a trip.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'packen'?",
          options: [
            { text: 'to pack', isCorrect: true },
            { text: 'to open a box', isCorrect: false },
            { text: 'to carry something on your back', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{packe}} meinen Koffer für die Reise.',
          'Er {{packt}} seine Bücher in eine Kiste.',
          'Wir haben gestern Abend alles {{gepackt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Pack' (bundle), related to English 'pack' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'einpacken',
            article: null,
            translation: 'to pack up',
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
              "'Packen' is almost identical to English 'pack' — an easy cognate.",
          },
          {
            id: 2,
            content:
              "Picture stuffing clothes into a suitcase while saying 'Ich packe!'",
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
