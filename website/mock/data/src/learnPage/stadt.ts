import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const stadt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Stadt',
        article: 'die',
        translation: 'city, town',
        partOfSpeech: 'noun',
        theme: 'daily_life',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A large, populated place with streets, buildings, and services; larger than a village, with its own local government.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Stadt'?",
          options: [
            { text: 'a village', isCorrect: false },
            { text: 'a city or town', isCorrect: true },
            { text: 'a country', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich lebe in einer großen Stadt. Die Stadt hat viele Parks und Geschäfte. Wir fahren morgen in die Stadt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'stat' (place, location). Related to English 'stead' (as in 'homestead') and 'stead' in place names like Hampstead.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Gemeinde',
            article: 'die',
            translation: 'municipality, community',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Ort',
            article: 'der',
            translation: 'town, place',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Ortschaft',
            article: 'die',
            translation: 'locality, settlement',
            similarityScore: 3,
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
              "Think of 'stadium' — a stadium is a large public place, and 'Stadt' shares the same root idea of a settled place.",
          },
          {
            id: 2,
            content:
              "Many German city names end in '-stadt' (Darmstadt, Neustadt). Stadt = the city itself.",
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
