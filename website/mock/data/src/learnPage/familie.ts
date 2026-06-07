import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const familie: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Familie',
        article: 'die',
        translation: 'family',
        partOfSpeech: 'noun',
        theme: 'daily_life',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A group of people who are related to each other, especially parents and their children.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Familie'?",
          options: [
            { text: 'a group of friends', isCorrect: false },
            { text: 'a group of related people', isCorrect: true },
            { text: 'a neighbourhood', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Meine Familie wohnt in München. Ich besuche meine Familie jeden Monat. Die Familie ist sehr wichtig für mich.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'familia' (household, servants). The same root gives us 'family' in English and 'familia' in Spanish.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Verwandtschaft',
            article: 'die',
            translation: 'relatives, kinship',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Sippe',
            article: 'die',
            translation: 'kin, clan',
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
              "'Familie' is almost identical to 'family' — just swap the y for ie. Easy!",
          },
          {
            id: 2,
            content:
              "Think of 'familia' from Spanish TV shows — same word, same meaning.",
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
