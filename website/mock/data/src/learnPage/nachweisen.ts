import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const nachweisen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'nachweisen',
        article: null,
        translation: 'to prove, demonstrate, show evidence',
        partOfSpeech: 'verb',
        level: ['B1'],
        representativeImageUrl:
          'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To provide evidence or documented proof that something is true or that a requirement has been met.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'nachweisen'?",
          options: [
            { text: 'To point to a destination on a map', isCorrect: false },
            { text: 'To provide documented proof of something', isCorrect: true },
            { text: 'To follow someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Sie müssen Ihre Sprachkenntnisse nachweisen. Er konnte seine Unschuld nicht nachweisen. Bitte weisen Sie Ihre Qualifikationen durch entsprechende Zeugnisse nach.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'nach' (after, following) + 'weisen' (to show, point). To point to evidence that follows from a claim – showing proof that backs up what was said.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'beweisen',
            article: null,
            translation: 'to prove',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'belegen',
            article: null,
            translation: 'to substantiate, document',
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'dokumentieren',
            article: null,
            translation: 'to document',
            similarityScore: 3,
            level: ['B1'],
            register: 'borrowed',
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
              "'Nach' + 'weisen' – to show (weisen) what comes after (nach) a claim: your evidence.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
          {
            id: 2,
            content:
              "Imagine a detective pointing out (weisen) what happened afterwards (nach) to prove the case.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
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
