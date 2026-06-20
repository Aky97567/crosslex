import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const einzugsermaechtigung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Einzugs­ermächtigung',
        article: 'die',
        translation: 'direct debit authorisation',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Written permission given to a company or creditor allowing them to automatically withdraw amounts from your bank account. Widely used in Germany for rent, insurance premiums, and utilities. Different from a Dauerauftrag (standing order), where you push money out — here you authorise the recipient to pull it in.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Einzugsermächtigung'?",
          options: [
            { text: 'Written authorisation allowing a company to withdraw money directly from your account', isCorrect: true },
            { text: 'An instruction to your bank to transfer a fixed amount each month', isCorrect: false },
            { text: 'A formal limit set on how much can be spent on a bank card per day', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe dem Vermieter eine Einzugsermächtigung für die monatliche Miete gegeben. Die Einzugsermächtigung kann ich jederzeit schriftlich widerrufen. Mit einer Einzugsermächtigung muss ich die Überweisung nicht mehr manuell ausführen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Einzug' (collection, drawing in) + 'Ermächtigung' (authorisation, empowerment). You are empowering someone to draw money in from your account.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Lastschriftmandat',
            article: 'das',
            translation: 'direct debit mandate',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'SEPA-Mandat',
            article: 'das',
            translation: 'SEPA direct debit mandate',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Abbuchungsauftrag',
            article: 'der',
            translation: 'debit order',
            similarityScore: 4,
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
              "'Einzug' = collection + 'Ermächtigung' = authorisation — you are authorising someone to collect money from your account.",
          },
          {
            id: 2,
            content:
              "Think of 'in-draw-authorisation' — you are authorising a company to draw money in from your bank.",
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
