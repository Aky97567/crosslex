import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fruehstueck: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Frühstück',
        article: 'das',
        translation: 'breakfast',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The first meal of the day, eaten in the morning. A typical German Frühstück includes bread, cold cuts, cheese, and coffee or tea.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Frühstück'?",
          options: [
            { text: 'breakfast, the first meal of the day', isCorrect: true },
            { text: 'lunch, the midday meal', isCorrect: false },
            { text: 'a snack eaten between meals', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich esse jeden Morgen Frühstück. Das Frühstück besteht aus Brot, Käse und Kaffee. Ohne Frühstück bin ich nicht fit.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'früh' (early) + 'Stück' (piece, bit). Frühstück is the early bite — the first piece of food you eat in the day.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Morgenessen',
            article: 'das',
            translation: 'morning meal (Swiss German)',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Frühmahlzeit',
            article: 'die',
            translation: 'early meal',
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
              "'Früh' = early, 'Stück' = piece or bit. Frühstück is literally the early bit — the first food of the day.",
          },
          {
            id: 2,
            content:
              "Think of 'früh' as 'free' — Frühstück is the free early piece that starts your day.",
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
