import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kontoauszug: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Konto­auszug',
        article: 'der',
        translation: 'bank statement',
        partOfSpeech: 'noun',
        themes: ['finance'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A printed or digital list of all transactions on a bank account over a given period, showing deposits, withdrawals, and the running balance. In Germany, Kontoauszüge are frequently required as proof of income or payment history for rental applications, loan approvals, and benefit claims.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Kontoauszug'?",
          options: [
            { text: 'A detailed record of all transactions and balances on your bank account', isCorrect: true },
            { text: 'A formal instruction sent to your bank to transfer funds to another account', isCorrect: false },
            { text: 'A document confirming that your bank account has been successfully opened', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich brauche einen aktuellen Kontoauszug für meinen Mietvertrag. Der Kontoauszug zeigt alle Buchungen der letzten drei Monate. Den Kontoauszug habe ich direkt online heruntergeladen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Konto' (account) + 'Auszug' (extract, excerpt). A Kontoauszug is an extract pulled from your account — a snapshot of all its activity over a period of time.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Bankauszug',
            article: 'der',
            translation: 'bank extract',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Kontoübersicht',
            article: 'die',
            translation: 'account overview',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Buchungsübersicht',
            article: 'die',
            translation: 'transaction overview',
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
              "'Konto-AUSZUG' — Konto = account, Auszug = extract. An extract pulled from your account showing everything that went in and out.",
          },
          {
            id: 2,
            content:
              "'Auszug' also means 'moving out' in German — your Kontoauszug shows all the money that moved in and out of your account.",
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
