import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kind: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Kind',
        article: 'das',
        translation: 'child',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A young person, from a baby to a teenager. Also used in legal and family contexts — "Kinder" (plural) are often mentioned in benefits such as Kindergeld and Elterngeld.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Kind'?",
          options: [
            { text: 'a child or young person', isCorrect: true },
            { text: 'a friend or close acquaintance', isCorrect: false },
            { text: 'a family member who is elderly', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Das Kind spielt im Garten. Mein Kind geht schon in die Schule. Als Kind habe ich viel Fußball gespielt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'kind', related to English 'kin' (relatives) and 'kindergarten'. Both share the Germanic root meaning one who is born of a family.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Kleinkind',
            article: 'das',
            translation: 'toddler, small child',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Jugendlicher',
            article: 'der',
            translation: 'teenager, young person',
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
              "Think of 'kindergarten' — the garden for Kinder. Kind = child, and you already know this from the word kindergarten.",
          },
          {
            id: 2,
            content:
              "'Kind' relates to 'kin' (family in English). A Kind is the smallest and newest member of your kin.",
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
