import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fuehrerschein: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Führerschein',
        article: 'der',
        translation: 'driving licence',
        partOfSpeech: 'noun',
        themes: ['transport', 'bureaucracy'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An official document that proves you are legally allowed to drive a car or other vehicle.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Führerschein'?",
          options: [
            { text: 'a train pass', isCorrect: false },
            { text: 'a driving licence', isCorrect: true },
            { text: 'a travel permit', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe meinen Führerschein dabei. Hast du einen Führerschein? Der Führerschein ist ein wichtiges Dokument.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A compound of 'führen' (to lead, to drive) and 'Schein' (certificate, permit). Literally a 'driving certificate' — a certificate that you can lead a vehicle.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Fahrerlaubnis',
            article: 'die',
            translation: 'driving licence (official term)',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Fahrerausweis',
            article: 'der',
            translation: "driver's permit",
            similarityScore: 4,
            level: ['A2'],
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
              "Break it down: Führer (driver/leader) + Schein (certificate) = the certificate that says you can lead a car.",
          },
          {
            id: 2,
            content:
              "'Schein' also means 'shine' — your driving licence shines proof that you can drive.",
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
