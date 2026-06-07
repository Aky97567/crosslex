import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const auskunft: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Auskunft',
        article: 'die',
        translation: 'information, enquiry',
        partOfSpeech: 'noun',
        theme: 'daily_life',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Information given in response to a question; also the place (desk or service) where you can ask for information.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Auskunft'?",
          options: [
            { text: 'an official document', isCorrect: false },
            { text: 'information or an enquiry desk', isCorrect: true },
            { text: 'a waiting room', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich brauche eine Auskunft. Gehen Sie zur Auskunft am Bahnhof. Die Auskunft hat mir geholfen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus-' (out) + 'Kunft' (coming, from 'kommen' — to come). Auskunft is literally information that 'comes out' — what is given out when you ask.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Information',
            article: 'die',
            translation: 'information',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Angabe',
            article: 'die',
            translation: 'piece of information, detail',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Mitteilung',
            article: 'die',
            translation: 'communication, notice',
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
              "Think of 'aus' (out) — Auskunft is information that comes out. You ask, the information comes out.",
          },
          {
            id: 2,
            content:
              "At German train stations, the 'Auskunft' sign points to the information desk. It's the first word you need.",
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
