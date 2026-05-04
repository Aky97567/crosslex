import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const antrag: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Antrag',
        article: 'der',
        translation: 'application / request',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/antrag/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A formal written request submitted to an authority or organisation asking for a decision, benefit, or service.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is an 'Antrag'?",
          options: [
            { text: 'A formal written request to an authority', isCorrect: true },
            { text: 'A legal document giving someone your authority', isCorrect: false },
            { text: 'An official notice ending a contract', isCorrect: false },
            { text: 'A written objection to an official ruling', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Den Antrag auf Kindergeld müssen Sie bei der Familienkasse einreichen. Ich habe heute meinen Antrag auf Aufenthaltserlaubnis gestellt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "antragen" (to propose or bring forward), composed of "an" (to/at) + "tragen" (to carry/bear). Literally: to carry something to an authority.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Bewerbung',
            article: 'die',
            translation: 'job application',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Anfrage',
            article: 'die',
            translation: 'inquiry',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Formular',
            article: 'das',
            translation: 'form',
            similarityScore: 4,
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
              'Think "to enter a request" — an Antrag is how you enter the bureaucratic process for anything in Germany.',
            imageUrl: 'https://picsum.photos/seed/antrag1/300/200',
          },
          {
            id: 2,
            content:
              '"An" = to, "trag" sounds like "drag" — you drag your request to the authority.',
            imageUrl: 'https://picsum.photos/seed/antrag2/300/200',
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
