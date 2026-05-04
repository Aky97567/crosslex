import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kuendigung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Kündigung',
        article: 'die',
        translation: 'termination / notice',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/kuendigung/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The formal ending of a contract, employment, or tenancy by giving notice. Can be given by either party and must usually follow a notice period.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What does 'Kündigung' mean?",
          options: [
            { text: 'Formal notice to end a contract or employment', isCorrect: true },
            { text: 'A written objection to an official decision', isCorrect: false },
            { text: 'An application for a new job or apartment', isCorrect: false },
            { text: 'A legal document granting permission', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Kündigung des Mietvertrages muss mindestens drei Monate im Voraus schriftlich erfolgen. Ich habe heute meine Kündigung beim Chef eingereicht.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "kündigen" (to give notice/announce), from Middle High German "künden" (to make known, to announce). Related to "Kunde" (customer, literally "one who is known").',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Abmahnung',
            article: 'die',
            translation: 'formal warning',
            similarityScore: 3,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Entlassung',
            article: 'die',
            translation: 'dismissal',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Frist',
            article: 'die',
            translation: 'deadline / notice period',
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
              'Think of "Kündigung" as "announcing the end" — künden = to announce, and you\'re announcing you\'re done.',
            imageUrl: 'https://picsum.photos/seed/kuendigung1/300/200',
          },
          {
            id: 2,
            content:
              'Sounds a bit like "condition" — you are ending the conditions of your contract.',
            imageUrl: 'https://picsum.photos/seed/kuendigung2/300/200',
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
