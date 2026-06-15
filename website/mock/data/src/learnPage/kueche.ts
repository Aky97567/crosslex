import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kueche: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Küche',
        article: 'die',
        translation: 'kitchen',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The room in a home where food is prepared and cooked. Also used to mean a style of cooking — "die deutsche Küche" means German cuisine.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Küche'?",
          options: [
            { text: 'the kitchen where food is cooked', isCorrect: true },
            { text: 'the dining room where people eat', isCorrect: false },
            { text: 'the living room of a home', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich koche das Abendessen in der Küche. Die Küche ist klein aber praktisch. In der Küche habe ich alles, was ich brauche.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'coquina' (kitchen), via Old High German 'kuchina'. The same Latin root gives English 'cuisine' and 'cook'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Küchenraum',
            article: 'der',
            translation: 'kitchen room',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Kochbereich',
            article: 'der',
            translation: 'cooking area',
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
              "Think of 'cuisine' — Küche and cuisine share the same Latin root. The Küche is where the cuisine is created.",
          },
          {
            id: 2,
            content:
              "'Küche' sounds like 'cooker' — it's where the cooker lives and all the cooking happens.",
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
