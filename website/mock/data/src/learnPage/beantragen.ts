import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const beantragen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'beantragen',
        article: null,
        translation: 'to apply for',
        partOfSpeech: 'verb',
        themes: ['bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To officially request something by submitting a formal application to an authority or institution.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'beantragen'?",
          options: [
            { text: 'To refuse a request', isCorrect: false },
            { text: 'To submit a formal application for something', isCorrect: true },
            { text: 'To pay a fee', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich muss einen neuen Reisepass beantragen. Er hat das Visum rechtzeitig beantragt. Um die Förderung zu erhalten, müssen Sie sie zuerst beantragen.',
        alternateForms: ['beantragt'],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' (prefix indicating completion) + 'tragen' (to carry/bring). Literally 'to bring forward' a formal request.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'einreichen',
            article: null,
            translation: 'to submit',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'ersuchen',
            article: null,
            translation: 'to request, to petition',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'ansuchen',
            article: null,
            translation: 'to apply, to petition (formal)',
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
              "'Beantragen' contains 'tragen' (to carry) – you carry your application to the office.",
          },
          {
            id: 2,
            content:
              "Think of 'bean' + 'tragen': you bring a bag of beans (your documents) to formally apply.",
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
