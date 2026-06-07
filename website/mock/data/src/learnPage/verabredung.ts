import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verabredung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Verabredung',
        article: 'die',
        translation: 'arrangement, date, meetup',
        partOfSpeech: 'noun',
        theme: 'daily_life',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An agreement to meet someone at a specific time and place; a social appointment with a friend, colleague, or date.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Verabredung'?",
          options: [
            { text: 'a formal medical appointment', isCorrect: false },
            { text: 'an arrangement to meet someone', isCorrect: true },
            { text: 'a reservation at a restaurant', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe eine Verabredung um 18 Uhr. Hast du eine Verabredung heute? Die Verabredung war sehr schön.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'sich verabreden' (to arrange to meet). The verb comes from 'abreden' (to agree, to discuss), with 'ver-' adding a sense of mutual arrangement.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Termin',
            article: 'der',
            translation: 'appointment (formal)',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Treffen',
            article: 'das',
            translation: 'meeting, get-together',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Zusammenkunft',
            article: 'die',
            translation: 'gathering, meeting',
            similarityScore: 3,
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
              "Think of 'ver-ab-red-ung' — you 'red-uce' the options by agreeing on one time and one place to meet.",
          },
          {
            id: 2,
            content:
              "'Ich habe eine Verabredung' — a useful phrase meaning 'I have plans'. Learn it as a whole sentence.",
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
