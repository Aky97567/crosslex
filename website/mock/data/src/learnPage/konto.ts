import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const konto: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Konto',
        article: 'das',
        translation: 'bank account',
        partOfSpeech: 'noun',
        theme: 'finance',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A bank account held at a financial institution. In Germany, a Girokonto (current account) is needed to receive salary, pay rent, and set up direct debits. Opening one requires an Anmeldung.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Konto'?",
          options: [
            { text: 'A bank account', isCorrect: true },
            { text: 'A credit card', isCorrect: false },
            { text: 'A monthly budget plan', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe ein Konto bei der Sparkasse eröffnet. Ohne Konto kann ich kein Gehalt empfangen. Das Geld wurde direkt auf mein Konto überwiesen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Italian 'conto' (account, bill), itself from Latin 'computus' (calculation). The same root gives English 'count' and 'account'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Girokonto',
            article: 'das',
            translation: 'current account',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Sparkonto',
            article: 'das',
            translation: 'savings account',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Bankkonto',
            article: 'das',
            translation: 'bank account',
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
              "'Konto' is almost identical to the English/Italian/Spanish word — it's an international banking term that crossed into German unchanged.",
          },
          {
            id: 2,
            content:
              "Think of 'account' — Konto = account. If you can say one, you already know the other.",
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
