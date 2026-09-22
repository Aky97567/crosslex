import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gluecklich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'glücklich',
        article: null,
        translation: 'happy',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Feeling or showing pleasure and contentment.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'glücklich'?",
          options: [
            { text: 'happy', isCorrect: true },
            { text: 'sad', isCorrect: false },
            { text: 'angry', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich bin sehr {{glücklich}} heute.',
          'Das ist ein {{glückliches}} Paar.',
          'Wir waren alle sehr {{glücklich}} über das Ergebnis.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Ich bin {{glücklich}}.',
        positivAttributiv: 'Das ist ein {{glücklicher}} Tag.',
        komparativPredicativ: 'Ich bin heute {{glücklicher}} als gestern.',
        komparativAttributiv: 'Heute ist der {{glücklichere}} Tag.',
        superlativPredicativ: 'Ich bin {{am glücklichsten}}, wenn ich bei meiner Familie bin.',
        superlativAttributiv: 'Das war der {{glücklichste}} Tag meines Lebens.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Glück' (luck, happiness) + the adjective suffix '-lich' — literally 'luck-like', since happiness and good fortune were once seen as the same thing.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'froh',
            article: null,
            translation: 'glad',
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
              "'Glücklich' contains 'Glück' (luck/happiness) — being glücklich means being full of Glück.",
          },
          {
            id: 2,
            content:
              "Think of a four-leaf clover — a symbol of Glück, and thus of being glücklich.",
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
