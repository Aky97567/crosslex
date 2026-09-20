import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const beschwerde: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Beschwerde',
        article: 'die',
        translation: 'complaint',
        partOfSpeech: 'noun',
        themes: ['daily_life', 'bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A formal statement that something is wrong or unsatisfactory.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Beschwerde'?",
          options: [
            { text: 'a complaint', isCorrect: true },
            { text: 'a compliment', isCorrect: false },
            { text: 'a request', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte eine {{Beschwerde}} einreichen.',
          'Die Firma hat viele {{Beschwerden}} erhalten.',
          'Ihre {{Beschwerde}} wird bearbeitet.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'sich beschweren' (to complain), built on 'schwer' (heavy) — a Beschwerde is the formal, 'heavy' grievance you voice.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Reklamation',
            article: 'die',
            translation: 'complaint, claim (formal)',
            similarityScore: 4,
            level: ['B1'],
            register: 'formal',
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
              "'Beschwerde' relates to 'schwer' (heavy) — a complaint is the heavy burden you put into words.",
          },
          {
            id: 2,
            content:
              "Think of filing a formal complaint at a service desk — Beschwerde.",
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
