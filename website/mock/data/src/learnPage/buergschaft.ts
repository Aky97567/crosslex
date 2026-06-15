import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const buergschaft: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Bürgschaft',
        article: 'die',
        translation: 'guarantee, personal surety',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A written commitment by a third party (Bürge) to take on another person\'s financial obligation if they fail to pay. Commonly required in Germany when renting an apartment — landlords may ask for a Bürgschaft from a parent or relative if the applicant\'s income is insufficient. Also used in lending and business contracts.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Bürgschaft'?",
          options: [
            { text: "A written guarantee by a third party to cover someone else's debts if they cannot pay", isCorrect: true },
            { text: 'A formal permission from a landlord allowing a tenant to sublet a room', isCorrect: false },
            { text: 'An insurance policy covering accidental damage to a rented property', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Vater hat eine Bürgschaft für meine neue Wohnung unterschrieben. Die Bürgschaft bedeutet, dass er zahlt, wenn ich die Miete nicht bezahlen kann. Ohne eine Bürgschaft hat der Vermieter den Mietvertrag abgelehnt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Bürge' (guarantor, surety) + '-schaft' (collective or status suffix). A Bürgschaft is the act and status of being a Bürge — someone who stands behind another person's financial obligations.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Garantie',
            article: 'die',
            translation: 'guarantee, warranty',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Sicherheit',
            article: 'die',
            translation: 'security, collateral',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Haftung',
            article: 'die',
            translation: 'liability, legal responsibility',
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
              "'BÜRG-schaft' contains 'Bürge' (guarantor) — the Bürgschaft is the document that makes you the Bürge for someone else.",
          },
          {
            id: 2,
            content:
              "Think of 'burg' (castle) — a Bürgschaft builds a financial castle wall behind someone: you shield them if they cannot pay.",
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
