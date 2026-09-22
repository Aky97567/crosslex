import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kochen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kochen',
        article: null,
        translation: 'to cook',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To prepare food by heating it, especially by boiling, frying, or baking.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kochen'?",
          options: [
            { text: 'to cook', isCorrect: true },
            { text: 'to eat', isCorrect: false },
            { text: 'to buy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Meine Mutter {{kocht}} jeden Abend das Essen.',
          'Ich {{koche}} gern italienisch.',
          'Wir haben zusammen Suppe {{gekocht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'coquere' (to cook), borrowed into Old High German as 'kohhon' — the same Latin root gives English 'cook' and 'culinary'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'garen',
            article: null,
            translation: 'to cook, braise (technical)',
            similarityScore: 3,
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
              "'Kochen' shares its root with the English word 'cook' — say it fast and you'll hear it.",
          },
          {
            id: 2,
            content:
              "Picture a chef shouting 'kochen, kochen!' while stirring a pot — sound-alike memory hook.",
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
