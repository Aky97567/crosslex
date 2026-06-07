import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sprechen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sprechen',
        article: null,
        translation: 'to speak',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To use your voice to say words; to communicate verbally with another person or in a language.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sprechen'?",
          options: [
            { text: 'to listen', isCorrect: false },
            { text: 'to speak', isCorrect: true },
            { text: 'to understand', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich lerne Deutsch sprechen. Kannst du bitte langsam sprechen? Sie spricht sehr gut Englisch.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sprehhan'. Related to English 'speak' — both come from the same Proto-Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'reden',
            article: null,
            translation: 'to talk',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'sich unterhalten',
            article: null,
            translation: 'to converse, to chat',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'plaudern',
            article: null,
            translation: 'to chat, to have a chat',
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
              "'Sprechen' sounds like 'sprech' — think of a speech. You give a speech when you sprechen.",
          },
          {
            id: 2,
            content:
              "Think of 'speak' — sprECHen → sp-ECH-en. The 'ech' in the middle sounds like 'eck', the noise you make when trying to speak a new language.",
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
