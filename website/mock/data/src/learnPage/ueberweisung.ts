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
        translation: 'bank transfer; referral',
        partOfSpeech: 'noun',
        themes: ['finance'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Has two common meanings: (1) a bank transfer — sending money electronically from one account to another; (2) a medical referral — a document from your GP sending you to a specialist.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Überweisung'?",
          options: [
            { text: 'A bank transfer or a medical referral', isCorrect: true },
            { text: 'A formal written complaint to a company', isCorrect: false },
            { text: 'An invoice sent to a customer', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe eine Überweisung von 500 Euro an meinen Vermieter gemacht. Der Arzt hat mir eine Überweisung zum Facharzt ausgestellt. Die Überweisung dauert in der Regel ein bis zwei Werktage.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'über-' (over, across) + 'weisen' (to direct, to send) + '-ung' (noun suffix). To transfer is to direct something across — money across accounts, or a patient across to a specialist.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Banküberweisung',
            article: 'die',
            translation: 'bank transfer',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Zahlung',
            article: 'die',
            translation: 'payment',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Übertragung',
            article: 'die',
            translation: 'transfer, transmission',
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
              "'Über' = over/across, 'weisung' = direction. An Überweisung directs something across — money or a patient.",
          },
          {
            id: 2,
            content:
              "Think of 'over-wise' — wisely moving something over to where it needs to go.",
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
