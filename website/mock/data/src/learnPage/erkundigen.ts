import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erkundigen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich erkundigen',
        article: null,
        translation: 'to inquire, ask about',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'bureaucracy', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To ask for information about something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich erkundigen'?",
          options: [
            { text: 'to inquire, ask about', isCorrect: true },
            { text: 'to answer', isCorrect: false },
            { text: 'to complain', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte mich nach den Öffnungszeiten {{erkundigen}}.',
          'Er {{erkundigt}} sich regelmäßig nach ihrem Befinden.',
          'Sie hat sich nach dem Preis {{erkundigt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'er-' + 'kund' (known) — literally 'to make known to oneself' by asking.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'nachfragen',
            article: null,
            translation: 'to ask, follow up',
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
              "'Erkundigen' relates to 'kund' (known) — inquiring is making something known to yourself.",
          },
          {
            id: 2,
            content:
              "Think of scouting for information — sich erkundigen.",
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
