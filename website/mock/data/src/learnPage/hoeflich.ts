import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const hoeflich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'höflich',
        article: null,
        translation: 'polite',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having or showing good manners; respectful.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'höflich'?",
          options: [
            { text: 'polite', isCorrect: true },
            { text: 'rude', isCorrect: false },
            { text: 'shy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Kellner war sehr {{höflich}}.',
          'Bitte antworte {{höflich}} auf die E-Mail.',
          'Sie hat sehr {{höflich}} nachgefragt.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Hof' (court, as in a royal court) + '-lich' — literally 'courtly', i.e. behaving as one would at court.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zuvorkommend',
            article: null,
            translation: 'courteous, obliging (formal)',
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
              "'Höflich' contains 'Hof' (court) — polite manners were originally 'court' manners.",
          },
          {
            id: 2,
            content: "Think of royal court etiquette — höflich.",
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
