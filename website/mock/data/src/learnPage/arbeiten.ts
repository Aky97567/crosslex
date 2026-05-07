import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const arbeiten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'arbeiten',
        article: null,
        translation: 'to work',
        partOfSpeech: 'verb',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To do a job or task, especially in exchange for money; to be employed or to put effort into something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'arbeiten'?",
          options: [
            { text: 'to rest', isCorrect: false },
            { text: 'to work', isCorrect: true },
            { text: 'to study', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich arbeite von 9 bis 17 Uhr. Wo arbeiten Sie? Meine Schwester arbeitet in einem Krankenhaus.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'arabeiten' (to labour, to toil). Related to the English word 'effort' through a shared sense of strenuous activity.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Arbeit',
            article: 'die',
            translation: 'work, job',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Beruf',
            article: 'der',
            translation: 'profession, occupation',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'helfen',
            article: null,
            translation: 'to help',
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
              "'Arbeiten' contains 'Arbeit' (work). Think: you need to do the Arbeit-en (the work-ing).",
          },
          {
            id: 2,
            content:
              "Sounds like 'are-bite-en' — you bite into your work and get things done.",
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
