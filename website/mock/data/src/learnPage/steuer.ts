import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const steuer: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Steuer',
        article: 'die',
        translation: 'tax',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/steuer/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A compulsory financial contribution to the state, levied on income, purchases, or property, used to fund public services.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is 'Steuer'?",
          options: [
            { text: 'A compulsory financial payment to the state', isCorrect: true },
            { text: 'A monthly contribution to health insurance', isCorrect: false },
            { text: 'A penalty for missing an official deadline', isCorrect: false },
            { text: 'A fee paid to register at an authority', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Als Arbeitnehmer in Deutschland zahlen Sie automatisch Einkommensteuer auf Ihr Gehalt. Die Steuererklärung muss jedes Jahr bis Ende Juli abgegeben werden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From Old High German "stiura" (support, rudder, contribution). Related to "steuern" (to steer or control). The state uses taxes to steer society.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Abgabe',
            article: 'die',
            translation: 'levy / charge',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Beitrag',
            article: 'der',
            translation: 'contribution',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Gebühr',
            article: 'die',
            translation: 'fee / charge',
            similarityScore: 3,
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
              '"Steuer" also means steering wheel. The government uses taxes to steer the economy — and your wallet.',
            imageUrl: 'https://picsum.photos/seed/steuer1/300/200',
          },
          {
            id: 2,
            content:
              'Steuererklärung (tax return) will become one of your least favourite annual words in Germany.',
            imageUrl: 'https://picsum.photos/seed/steuer2/300/200',
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
