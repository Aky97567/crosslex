import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gemuese: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Gemüse',
        article: 'das',
        translation: 'vegetables',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Plant-based food such as carrots, tomatoes, broccoli, and peppers. Gemüse is uncountable in German — you say "Ich esse Gemüse" not "ein Gemüse".',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Gemüse'?",
          options: [
            { text: 'vegetables', isCorrect: true },
            { text: 'fruit', isCorrect: false },
            { text: 'bread and grains', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich kaufe frisches Gemüse auf dem Markt. Das Gemüse ist sehr gesund. Ich esse jeden Tag Gemüse.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'gemüese' (mashed or cooked vegetable dishes). Related to 'Mus' (mash, purée) — originally food prepared by cooking and mashing plant material.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Grünzeug',
            article: 'das',
            translation: 'greens, green stuff (colloquial)',
            similarityScore: 3,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Gartengemüse',
            article: 'das',
            translation: 'garden vegetables',
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
              "'Ge-MÜS-e' contains 'Mus' (mash) — Gemüse originally meant mushy cooked plants. Now it means all vegetables.",
          },
          {
            id: 2,
            content:
              "Think of 'muse' — healthy eating muses require plenty of Gemüse on your plate.",
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
