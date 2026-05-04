import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ueberweisung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Überweisung',
        article: 'die',
        translation: 'bank transfer / referral',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/ueberweisung/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The electronic transfer of money from one bank account to another. Also used in medical contexts for a referral from a general practitioner to a specialist.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is an 'Überweisung'?",
          options: [
            { text: 'An electronic transfer of money between accounts', isCorrect: true },
            { text: 'A direct debit authorisation from your account', isCorrect: false },
            { text: 'A monthly salary statement from your employer', isCorrect: false },
            { text: 'A fee for opening a bank account', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Miete zahle ich jeden Monat per Überweisung auf das Konto des Vermieters. Mein Arzt hat mir eine Überweisung zum Facharzt ausgestellt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "überweisen" (to transfer or refer), composed of "über" (over/across) + "weisen" (to direct or show). Literally: to direct something across to another.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Zahlung',
            article: 'die',
            translation: 'payment',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Lastschrift',
            article: 'die',
            translation: 'direct debit',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Transaktion',
            article: 'die',
            translation: 'transaction',
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
              '"Über" = over, "weisen" = to direct. You are directing money over to another account.',
            imageUrl: 'https://picsum.photos/seed/ueberweisung1/300/200',
          },
          {
            id: 2,
            content:
              'In Germany, Überweisung is still king — many landlords and offices only accept bank transfers, not cards.',
            imageUrl: 'https://picsum.photos/seed/ueberweisung2/300/200',
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
