import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const genehmigung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Genehmigung',
        article: 'die',
        translation: 'permit, approval, authorization',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl:
          'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Official permission or authorization granted by an authority, allowing someone to do or have something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Genehmigung'?",
          options: [
            { text: 'A type of fine', isCorrect: false },
            { text: 'Official permission or authorization', isCorrect: true },
            { text: 'A meeting agenda', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Für den Umbau des Hauses benötigen Sie eine Baugenehmigung. Die Genehmigung wurde nach zwei Wochen erteilt. Ohne Genehmigung dürfen Sie hier nicht parken.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'genehmigen' (to approve, permit) + '-ung'. 'Genehmigen' comes from 'nehmen' (to take) with the prefix 'ge-', meaning to accept or agree to take something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Erlaubnis',
            article: 'die',
            translation: 'permission',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Bewilligung',
            article: 'die',
            translation: 'approval, grant',
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Zulassung',
            article: 'die',
            translation: 'admission, approval',
            similarityScore: 3,
            level: ['B2'],
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
              "'Genehmigung' contains 'nehmen' (take) – the authority 'takes' your request and approves it.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
          {
            id: 2,
            content:
              "Think: 'ge-nehm-igung' – something that has been 'taken' (nehmen) and accepted, granting you permission.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
        ],
      },
      {
        moduleType: 'wordShowcase',
        heading: { text: 'Word Showcase' },
        wordShowcaseUrl: 'https://example.com/word-theater-video.mp4',
      },
    ],
  },
};
