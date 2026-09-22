import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const absicht: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Absicht',
        article: 'die',
        translation: 'intention',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A plan or aim that someone intends to carry out.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Absicht'?",
          options: [
            { text: 'an intention', isCorrect: true },
            { text: 'a mistake', isCorrect: false },
            { text: 'a result', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das war nicht meine {{Absicht}}.',
          'Er hat die {{Absicht}}, im Sommer umzuziehen.',
          'Mit guter {{Absicht}} half sie ihrem Nachbarn.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab-' + 'sehen' (to see) — literally 'to look towards' a goal, i.e. to intend something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Vorhaben',
            article: 'das',
            translation: 'plan, intention',
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
              "'Absicht' relates to 'sehen' (to see) — an intention is what you're 'looking toward' doing.",
          },
          {
            id: 2,
            content: "Think of setting your sights on a goal — Absicht.",
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
