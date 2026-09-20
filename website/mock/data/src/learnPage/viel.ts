import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const viel: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'viel',
        article: null,
        translation: 'much, a lot (of)',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A large amount or number of something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'viel'?",
          options: [
            { text: 'much, a lot', isCorrect: true },
            { text: 'little', isCorrect: false },
            { text: 'none', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich habe heute {{viel}} zu tun.',
          'Er trinkt {{viel}} Wasser.',
          'Wir haben {{viele}} Freunde in Berlin.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Er hat {{viel}} Zeit.',
        positivAttributiv: 'Er investiert {{viel}} Zeit in dieses Projekt.',
        komparativPredicativ: 'Er hat {{mehr}} Zeit als ich.',
        komparativAttributiv: 'Er investiert {{mehr}} Zeit als ich.',
        superlativPredicativ: 'Sie arbeitet {{am meisten}}.',
        superlativAttributiv: 'Sie hat die {{meiste}} Zeit investiert.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'filu', related to English 'full' — both trace back to a Germanic root meaning abundant.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'reichlich',
            article: null,
            translation: 'plenty, ample',
            similarityScore: 3,
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
              "'Viel' sounds like 'feel' — you 'feel' like you have a lot when you have 'viel'.",
          },
          {
            id: 2,
            content:
              "Think of a 'villa' full of stuff — filled to the brim, like 'viel'.",
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
