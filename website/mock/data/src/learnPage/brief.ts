import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const brief: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Brief',
        article: 'der',
        translation: 'letter',
        partOfSpeech: 'noun',
        theme: 'daily_life',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A written message sent to someone, usually in an envelope by post; also used for official letters from authorities.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Brief'?",
          options: [
            { text: 'an email', isCorrect: false },
            { text: 'a letter sent by post', isCorrect: true },
            { text: 'a newspaper', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe einen Brief bekommen. Der Brief ist von meiner Bank. Ich muss den Brief beantworten.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'brevis' (short). Originally a 'brief' document — a short written communication. The English word 'brief' shares the same root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Schreiben',
            article: 'das',
            translation: 'written communication, formal letter',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Nachricht',
            article: 'die',
            translation: 'message',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Mitteilung',
            article: 'die',
            translation: 'written notice, message',
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
              "Think of a 'brief' message — a letter is originally a brief, short written note.",
          },
          {
            id: 2,
            content:
              "'Brief' in English means short. A Brief in German is a short written message — same word, same Latin root.",
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
