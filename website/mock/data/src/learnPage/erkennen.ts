import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erkennen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'erkennen',
        article: null,
        translation: 'to recognize',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To identify someone or something because one has seen or known it before, or to become aware of something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'erkennen'?",
          options: [
            { text: 'to recognize', isCorrect: true },
            { text: 'to forget someone', isCorrect: false },
            { text: 'to greet someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich habe ihn sofort {{erkannt}}.',
          'Man {{erkennt}} das Problem erst nach genauem Hinsehen.',
          'Sie {{erkennt}} ihre alte Schulfreundin nicht mehr.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'kennen' (to know) with the prefix 'er-', which here marks the moment of successfully achieving something — erkennen is literally 'to arrive at knowing'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'identifizieren',
            article: null,
            translation: 'to identify (formal)',
            similarityScore: 3,
            level: ["B1"],
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
              "'Erkennen' contains 'kennen' (to know) — erkennen is knowing someone when you see them again.",
          },
          {
            id: 2,
            content:
              "Picture spotting an old friend in a crowd and shouting 'Ich erkenne dich!'",
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
