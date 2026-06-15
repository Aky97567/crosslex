import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const tablette: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Tablette',
        article: 'die',
        translation: 'tablet, pill',
        partOfSpeech: 'noun',
        themes: ['health'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A small solid piece of medicine that you swallow. You get prescription tablets with a Rezept from the doctor, and non-prescription tablets directly from the Apotheke.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Tablette'?",
          options: [
            { text: 'a tablet or pill you swallow as medicine', isCorrect: true },
            { text: 'an injection given by a doctor', isCorrect: false },
            { text: 'a bandage used to cover a wound', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich nehme eine Tablette gegen die Kopfschmerzen. Die Tablette wirkt sehr schnell. Der Arzt hat mir diese Tablette empfohlen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From French 'tablette' (small flat piece), from Latin 'tabula' (board, tablet). The same root gives English 'tablet' — a small flat thing.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Pille',
            article: 'die',
            translation: 'pill',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Kapsel',
            article: 'die',
            translation: 'capsule',
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
              "Think of 'tablet' — Tablette is tablet in German. A small, flat piece of medicine you swallow.",
          },
          {
            id: 2,
            content:
              "Think of a 'table' (Tisch) — a Tablette is a tiny flat table of medicine for your body.",
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
