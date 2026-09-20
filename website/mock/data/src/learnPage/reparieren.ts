import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const reparieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'reparieren',
        article: null,
        translation: 'to repair',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To fix something that is broken or not working properly.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'reparieren'?",
          options: [
            { text: 'To fix something that is broken', isCorrect: true },
            { text: 'To buy something new', isCorrect: false },
            { text: 'To throw something away', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Mechaniker muss das Auto {{reparieren}}.',
          'Ich {{repariere}} mein Fahrrad selbst.',
          'Er hat die Waschmaschine schon {{repariert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'reparare' (to make ready again), via French 'réparer' — the same root gives English 'repair'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'instand setzen',
            article: null,
            translation: 'to repair, fix up (formal)',
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
              "'Reparieren' looks and sounds just like English 'repair' — same Latin root.",
          },
          {
            id: 2,
            content:
              "Think of 're-pairing' broken parts back together — 'reparieren'.",
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
