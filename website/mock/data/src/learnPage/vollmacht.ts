import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const vollmacht: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Vollmacht',
        article: 'die',
        translation: 'power of attorney',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/vollmacht/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A legal document authorising another person to act on your behalf in official or legal matters.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is a 'Vollmacht'?",
          options: [
            { text: 'A document authorising someone to act on your behalf', isCorrect: true },
            { text: 'A formal objection against an official decision', isCorrect: false },
            { text: 'A certificate of completed training', isCorrect: false },
            { text: 'An official residence registration', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mit einer Vollmacht kann Ihre Frau alle behördlichen Angelegenheiten für Sie erledigen. Ich habe meinem Anwalt eine Vollmacht ausgestellt, damit er mich vertreten kann.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "voll" (full, from Old High German "fol") + "Macht" (power, from Old High German "maht"). Literally: full power — you grant someone your complete authority to act.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Ermächtigung',
            article: 'die',
            translation: 'authorisation',
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Berechtigung',
            article: 'die',
            translation: 'entitlement / authorisation',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Genehmigung',
            article: 'die',
            translation: 'approval / permit',
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
              '"Voll" = full, "Macht" = power. You hand over your full power to someone else to act for you.',
            imageUrl: 'https://picsum.photos/seed/vollmacht1/300/200',
          },
          {
            id: 2,
            content:
              'Think "full might" — you give someone the full might to represent you legally.',
            imageUrl: 'https://picsum.photos/seed/vollmacht2/300/200',
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
