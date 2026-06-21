import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const krankmeldung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Krankmeldung',
        displayName: 'Krank­meldung',
        article: 'die',
        translation: 'sick note, notification of illness',
        partOfSpeech: 'noun',
        themes: ['work', 'health'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "A formal notification to your employer that you are too ill to work. After the third consecutive sick day, a doctor's certificate (Arbeitsunfähigkeitsbescheinigung) is legally required. Since 2023, German doctors submit this electronically to the health insurer, who then forwards it digitally to the employer.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Krankmeldung'?",
          options: [
            { text: 'A formal notification to your employer that you are too ill to work', isCorrect: true },
            { text: 'An application for paid medical leave submitted to your health insurer', isCorrect: false },
            { text: "A doctor's recommendation to take preventive health measures", isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe heute Morgen eine Krankmeldung bei meinem Chef eingereicht. Die Krankmeldung gilt ab dem ersten Krankheitstag. Nach drei Tagen muss ich auch eine ärztliche Bescheinigung zur Krankmeldung vorlegen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'krank' (sick, ill) + 'Meldung' (report, notification). A Krankmeldung is literally the reporting of one's illness — making it officially known that you cannot work.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Krankschreibung',
            article: 'die',
            translation: 'sick note issued by a doctor',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Attest',
            article: 'das',
            translation: 'medical certificate',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Arbeitsunfähigkeitsbescheinigung',
            article: 'die',
            translation: 'certificate of incapacity for work',
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
              "'Krank-MELDUNG' — krank = sick, Meldung = notification. You are notifying your employer that you are sick.",
          },
          {
            id: 2,
            content:
              "Think of 'crank-melting' — when you're sick, you feel like a crank that's melting down, and the Krankmeldung makes it official.",
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
