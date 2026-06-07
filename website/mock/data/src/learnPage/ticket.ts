import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ticket: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Ticket',
        article: 'das',
        translation: 'ticket',
        partOfSpeech: 'noun',
        themes: ['transport'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A piece of paper or digital code that gives you the right to travel on public transport or enter an event.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Ticket'?",
          options: [
            { text: 'a timetable', isCorrect: false },
            { text: 'a ticket for travel or entry', isCorrect: true },
            { text: 'a receipt', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe kein Ticket. Wo kann ich ein Ticket kaufen? Das Ticket kostet fünf Euro.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed directly from English 'ticket', which came from French 'étiquette' (label, tag). The same French root gives us 'etiquette' in English.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Fahrkarte',
            article: 'die',
            translation: 'travel ticket (traditional German word)',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Fahrschein',
            article: 'der',
            translation: 'travel ticket',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Eintrittskarte',
            article: 'die',
            translation: 'admission ticket, entry pass',
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
              "'Ticket' is identical in German and English — a direct loan word. No memory trick needed!",
          },
          {
            id: 2,
            content:
              "Germans also say 'Fahrkarte' for a travel ticket, but 'Ticket' is widely used for both transport and events.",
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
