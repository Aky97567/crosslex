import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const baeckerei: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Bäckerei',
        article: 'die',
        translation: 'bakery',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A shop where bread, rolls, and cakes are made and sold fresh. Germany has a very strong bakery culture — there are thousands of independent Bäckereien across the country.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Bäckerei'?",
          options: [
            { text: 'a bakery where bread and rolls are sold', isCorrect: true },
            { text: 'a supermarket with a food counter', isCorrect: false },
            { text: 'a café where you can sit and drink coffee', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich kaufe Brot in der Bäckerei. Die Bäckerei öffnet um sechs Uhr morgens. In der Bäckerei gibt es viele frische Brötchen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'backen' (to bake) + '-erei' (place suffix). A Bäckerei is simply the place where baking happens — the same logic as 'bakery' in English.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Konditorei',
            article: 'die',
            translation: 'patisserie, cake shop',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Brotladen',
            article: 'der',
            translation: 'bread shop',
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
              "Think of 'bakery' — Bäckerei means exactly the same thing. 'Backen' = to bake, '-erei' = the place.",
          },
          {
            id: 2,
            content:
              "'Bäck-erei' — the 'Bäck' sounds like 'beck' as in beck and call. At the Bäckerei, fresh bread is at your beck and call every morning.",
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
