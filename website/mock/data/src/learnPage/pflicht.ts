import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const pflicht: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Pflicht',
        article: 'die',
        translation: 'duty / obligation',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/pflicht/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Something one is morally or legally required to do. A duty that cannot be avoided without consequences.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What does 'Pflicht' mean?",
          options: [
            { text: 'A legal or moral obligation', isCorrect: true },
            { text: 'A right or entitlement', isCorrect: false },
            { text: 'A formal request to an authority', isCorrect: false },
            { text: 'A certificate proving qualifications', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Es ist Ihre Pflicht, Ihre neue Adresse beim Einwohnermeldeamt zu melden. Die Schulpflicht gilt für alle Kinder in Deutschland.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From Old High German "pfliht" (obligation, care, service). Related to the English word "plight" in its older sense of a solemn pledge or obligation.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Verpflichtung',
            article: 'die',
            translation: 'commitment / obligation',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Verantwortung',
            article: 'die',
            translation: 'responsibility',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Anspruch',
            article: 'der',
            translation: 'entitlement / right',
            similarityScore: 2,
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
              '"Pflicht" sounds like "flinch" — something you can\'t flinch away from. You must do it.',
            imageUrl: 'https://picsum.photos/seed/pflicht1/300/200',
          },
          {
            id: 2,
            content:
              'In German bureaucracy, you will see "Pflicht" everywhere — it is your constant companion as an immigrant.',
            imageUrl: 'https://picsum.photos/seed/pflicht2/300/200',
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
