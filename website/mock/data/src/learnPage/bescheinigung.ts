import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bescheinigung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Bescheinigung',
        article: 'die',
        translation: 'certificate, confirmation',
        partOfSpeech: 'noun',
        themes: ['bureaucracy', 'work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An official document issued by an authority that confirms or certifies a particular fact, status, or qualification.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Bescheinigung'?",
          options: [
            { text: 'A type of fine or penalty', isCorrect: false },
            { text: 'An official document confirming a fact', isCorrect: true },
            { text: 'A medical treatment', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich brauche eine ärztliche Bescheinigung für meinen Arbeitgeber. Die Bescheinigung muss offiziell unterschrieben sein. Ohne diese Bescheinigung kann ich den Antrag nicht stellen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'bescheinigen' (to certify) + '-ung' (noun suffix). 'Bescheinigen' derives from 'Schein' (light, appearance, certificate) – to make something appear officially true.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Bestätigung',
            article: 'die',
            translation: 'confirmation',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Nachweis',
            article: 'der',
            translation: 'proof, evidence',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Zertifikat',
            article: 'das',
            translation: 'certificate',
            similarityScore: 4,
            level: ['B1'],
            register: 'borrowed',
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
              "'Bescheinigung' contains 'Schein' (shine/paper) – it's the shining official paper that proves something.",
          },
          {
            id: 2,
            content:
              "Think: to 'be-shine' something means to make it officially visible and confirmed.",
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
