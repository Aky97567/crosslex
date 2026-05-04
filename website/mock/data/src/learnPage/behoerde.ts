import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const behoerde: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Behörde',
        article: 'die',
        translation: 'government authority / office',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/behoerde/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An official government institution or administrative body with the power to issue decisions, permits, and documents.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is a 'Behörde'?",
          options: [
            { text: 'An official government institution or administrative body', isCorrect: true },
            { text: 'A private company handling legal documents', isCorrect: false },
            { text: 'A court that resolves disputes', isCorrect: false },
            { text: 'A trade union representing workers', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die zuständige Behörde für Aufenthaltstitel ist das Ausländeramt Ihrer Stadt. Bei deutschen Behörden müssen Sie oft lange warten und viele Dokumente mitbringen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "behören" (to concern/pertain to), related to "gehören" (to belong). A Behörde is literally the institution to which public matters belong or pertain.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Amt',
            article: 'das',
            translation: 'office / authority',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Verwaltung',
            article: 'die',
            translation: 'administration',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Zuständigkeit',
            article: 'die',
            translation: 'jurisdiction / responsibility',
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
              'Think "be heard" — a Behörde is the place where you go to be heard by the government.',
            imageUrl: 'https://picsum.photos/seed/behoerde1/300/200',
          },
          {
            id: 2,
            content:
              'As an immigrant, Behörde will be one of the most frequent words in your life. It is every government office you will ever visit.',
            imageUrl: 'https://picsum.photos/seed/behoerde2/300/200',
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
