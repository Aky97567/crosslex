import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const obst: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Obst',
        article: 'das',
        translation: 'fruit',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Sweet edible fruit from trees and plants, such as apples, bananas, and strawberries. Like Gemüse, Obst is uncountable — you say "Ich esse Obst" not "ein Obst".',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Obst'?",
          options: [
            { text: 'fruit', isCorrect: true },
            { text: 'vegetables', isCorrect: false },
            { text: 'snacks and sweets', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich esse gerne Obst zum Frühstück. Das Obst im Supermarkt ist sehr frisch. Äpfel und Bananen sind mein liebstes Obst.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'obaz' (food, that which is eaten above the meal). Distantly related to the 'ob-' prefix meaning 'above' — fruit grows above ground on trees.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Früchte',
            article: 'die',
            translation: 'fruits (plural form)',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Obstsorte',
            article: 'die',
            translation: 'type of fruit',
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
              "'Obst' sounds like 'upmost' — fruit grows upmost, at the top of trees.",
          },
          {
            id: 2,
            content:
              "Think of 'obvious' — the most obvious healthy snack is Obst: grab an apple.",
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
