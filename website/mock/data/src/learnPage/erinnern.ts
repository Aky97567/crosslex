import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erinnern: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich erinnern',
        article: null,
        translation: 'to remember',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To bring a memory of something back to mind.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich erinnern'?",
          options: [
            { text: 'to remember', isCorrect: true },
            { text: 'to forget', isCorrect: false },
            { text: 'to imagine', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich kann mich nicht mehr {{erinnern}}.',
          'Er {{erinnert}} sich gut an seine Kindheit.',
          'Wir haben uns an den Urlaub {{erinnert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'er-' + 'innern', related to 'innen' (inside) — literally 'to bring back inside' one's mind.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'sich besinnen',
            article: null,
            translation: 'to recall, reflect (formal)',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "'Erinnern' relates to 'innen' (inside) — remembering brings something back 'inside' your mind.",
          },
          {
            id: 2,
            content:
              "Think of 'inner' memories resurfacing — 'sich erinnern' means to remember.",
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
