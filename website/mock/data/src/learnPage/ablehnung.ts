import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ablehnung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Ablehnung',
        article: 'die',
        translation: 'rejection, refusal',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'The act of refusing or not accepting something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Ablehnung'?",
          options: [
            { text: 'rejection, refusal', isCorrect: true },
            { text: 'approval', isCorrect: false },
            { text: 'a request', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die {{Ablehnung}} des Antrags kam überraschend.',
          'Er reagierte mit klarer {{Ablehnung}}.',
          'Eine {{Ablehnung}} kann man schriftlich anfechten.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab-' + 'lehnen' (to lean, decline) — literally 'to lean away from' something, i.e. to reject it.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Absage',
            article: 'die',
            translation: 'rejection, cancellation',
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
              "'Ablehnung' contains 'lehnen' (to lean) — rejecting something means leaning 'away' from it.",
          },
          {
            id: 2,
            content: "Think of physically leaning back and away — Ablehnung.",
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
