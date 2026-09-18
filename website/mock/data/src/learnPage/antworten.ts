import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const antworten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'antworten',
        article: null,
        translation: 'to answer',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To give a reply to a question or statement.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'antworten'?",
          options: [
            { text: 'to answer', isCorrect: true },
            { text: 'to ask', isCorrect: false },
            { text: 'to forget', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte {{antworte}} mir schnell.',
          'Sie {{antwortet}} nicht auf meine Nachricht.',
          'Er hat sofort {{geantwortet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Antwort' (answer), from Old High German 'antwurti' — literally 'a word given back' in reply to a question.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'erwidern',
            article: null,
            translation: 'to reply, respond (formal)',
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
              "'Antworten' contains 'Antwort' (answer) — to antworten is simply to give an Antwort.",
          },
          {
            id: 2,
            content:
              "Think of an 'ant' who always 'answers' — silly, but 'ant-worten' sticks.",
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
