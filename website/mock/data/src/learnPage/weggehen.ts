import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const weggehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'weggehen',
        article: null,
        translation: 'to go away, leave',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To leave a place; to go away from where you are.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'weggehen'?",
          options: [
            { text: 'to go away, leave', isCorrect: true },
            { text: 'to arrive', isCorrect: false },
            { text: 'to stay', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss jetzt {{weggehen}}.',
          'Ich {{gehe}} um neun Uhr {{weg}}.',
          'Sie ist ohne ein Wort {{weggegangen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'weg' (away) + 'gehen' (to go) — literally 'to go away'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'fortgehen',
            article: null,
            translation: 'to go away (more formal, literary)',
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
            content: "'Weg' + 'gehen' — going (gehen) 'away' (weg).",
          },
          {
            id: 2,
            content:
              "Think of someone saying 'I'm on my way, gotta go' — 'weggehen'.",
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
