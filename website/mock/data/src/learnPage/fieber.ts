import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fieber: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Fieber',
        article: 'das',
        translation: 'fever, high temperature',
        partOfSpeech: 'noun',
        themes: ['health'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A body temperature higher than normal, usually a sign that the body is fighting an infection. In German you say "Fieber haben" (to have a fever) or "Fieber messen" (to take a temperature).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Fieber'?",
          options: [
            { text: 'a high body temperature, a fever', isCorrect: true },
            { text: 'a headache that lasts several days', isCorrect: false },
            { text: 'a cold with a runny nose and cough', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe Fieber. Das Fieber ist heute Nacht gestiegen. Mit Fieber gehe ich zum Arzt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'febris' (fever), the same root as English 'fever'. Both words entered their languages directly from Latin medical vocabulary.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Temperaturerhöhung',
            article: 'die',
            translation: 'elevated temperature',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Fieberhitze',
            article: 'die',
            translation: 'fever heat',
            similarityScore: 4,
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
              "Think of 'fever' — Fieber and fever come from the same Latin root. Same word, nearly the same sound.",
          },
          {
            id: 2,
            content:
              "'Fieber' sounds like 'feverish' shortened. When you have Fieber, you feel feverish and hot.",
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
