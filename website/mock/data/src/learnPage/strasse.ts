import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const strasse: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Straße',
        article: 'die',
        translation: 'street, road',
        partOfSpeech: 'noun',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A road in a town or city with buildings on one or both sides; used to describe both small streets and larger roads.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Straße'?",
          options: [
            { text: 'a park or open space', isCorrect: false },
            { text: 'a street or road', isCorrect: true },
            { text: 'a bridge', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich wohne in dieser Straße. Die Straße ist sehr laut. Geh die Straße entlang und dann links.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'via strata' (paved road). The same root gives us 'street' in English — both come from the Roman road-building tradition.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Weg',
            article: 'der',
            translation: 'path, way',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Gasse',
            article: 'die',
            translation: 'lane, alley',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Allee',
            article: 'die',
            translation: 'avenue, boulevard',
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
              "'Straße' and 'street' both come from Latin 'strata'. They are the same word in different languages — paved road.",
          },
          {
            id: 2,
            content:
              "German addresses always say 'Straße' (or its abbreviation 'Str.'). You'll see it on every sign.",
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
