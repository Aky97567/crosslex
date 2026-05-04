import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aufenthalt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Aufenthalt',
        article: 'der',
        translation: 'stay / residence',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/aufenthalt/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The period of time someone lives or stays in a particular place, especially used in legal contexts for a foreigner\'s residence in Germany.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What does 'Aufenthalt' mean?",
          options: [
            { text: 'The period of staying or living in a place', isCorrect: true },
            { text: 'A document permitting you to work in Germany', isCorrect: false },
            { text: 'The process of registering at a new address', isCorrect: false },
            { text: 'A temporary break during a journey', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Für einen längeren Aufenthalt in Deutschland benötigen Sie eine Aufenthaltserlaubnis. Mein Aufenthalt in Deutschland begann vor drei Jahren.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "aufhalten" (to stay/stop), composed of "auf" (up/open) + "halten" (to hold). The idea of holding yourself in place — staying somewhere.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Wohnsitz',
            article: 'der',
            translation: 'place of residence',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Unterkunft',
            article: 'die',
            translation: 'accommodation',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Aufenthaltserlaubnis',
            article: 'die',
            translation: 'residence permit',
            similarityScore: 5,
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
              '"Auf" = up, "halt" sounds like "halt" (stop). An Aufenthalt is where you stop and stay.',
            imageUrl: 'https://picsum.photos/seed/aufenthalt1/300/200',
          },
          {
            id: 2,
            content:
              'Think of a train making an "Aufenthalt" (stop) at a station — you have made your Aufenthalt in Germany.',
            imageUrl: 'https://picsum.photos/seed/aufenthalt2/300/200',
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
