import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const arzt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Arzt',
        article: 'der',
        translation: 'doctor (male)',
        partOfSpeech: 'noun',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A person trained in medicine who helps sick or injured people. The female form is Ärztin.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Arzt'?",
          options: [
            { text: 'a nurse', isCorrect: false },
            { text: 'a doctor', isCorrect: true },
            { text: 'a pharmacist', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich muss zum Arzt gehen. Der Arzt hat mir ein Rezept gegeben. Bitte ruf den Arzt an.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Greek 'archiatros' (chief physician). The word entered German via Latin. The female form 'Ärztin' adds the suffix -in.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Ärztin',
            article: 'die',
            translation: 'doctor (female)',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Krankenhaus',
            article: 'das',
            translation: 'hospital',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Rezept',
            article: 'das',
            translation: 'prescription',
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
              "Think of 'Arzt' as 'arts' — a doctor practises the art of medicine.",
          },
          {
            id: 2,
            content:
              "'Arzt' sounds like 'arts' — imagine a Renaissance painting of a doctor (art + zt).",
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
