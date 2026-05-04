import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zeugnis: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Zeugnis',
        article: 'das',
        translation: 'certificate / reference',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/zeugnis/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An official document attesting to someone\'s qualifications, school grades, or work performance. Can be a school report, a professional reference, or an academic certificate.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is a 'Zeugnis'?",
          options: [
            { text: 'An official document of qualifications or performance', isCorrect: true },
            { text: 'A formal objection to a decision', isCorrect: false },
            { text: 'A contract between two parties', isCorrect: false },
            { text: 'A permit to live or work in Germany', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Für die Bewerbung benötigen Sie Ihre Arbeitszeugnisse und Schulzeugnisse der letzten drei Jahre. Ein gutes Arbeitszeugnis ist sehr wichtig für die nächste Stelle.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "Zeuge" (witness, from Old High German "giziug"), related to "bezeugen" (to testify). A Zeugnis is literally a testimony — a document that witnesses your achievements.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Bescheinigung',
            article: 'die',
            translation: 'certificate / confirmation',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Qualifikation',
            article: 'die',
            translation: 'qualification',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Referenz',
            article: 'die',
            translation: 'reference',
            similarityScore: 4,
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
              '"Zeugnis" comes from "Zeuge" (witness). The document is a written witness to your achievements.',
            imageUrl: 'https://picsum.photos/seed/zeugnis1/300/200',
          },
          {
            id: 2,
            content:
              'Think "testimony" — a Zeugnis is your official testimony of skills, grades, or work performance.',
            imageUrl: 'https://picsum.photos/seed/zeugnis2/300/200',
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
