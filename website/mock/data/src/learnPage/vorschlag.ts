import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const vorschlag: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Vorschlag',
        article: 'der',
        translation: 'suggestion, proposal',
        partOfSpeech: 'noun',
        themes: ['daily_life', 'work'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'An idea or plan put forward for others to consider.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Vorschlag'?",
          options: [
            { text: 'a suggestion, proposal', isCorrect: true },
            { text: 'a decision', isCorrect: false },
            { text: 'a complaint', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das ist ein guter {{Vorschlag}}.',
          'Ich habe noch einen anderen {{Vorschlag}}.',
          'Wir haben ihren {{Vorschlag}} angenommen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'vorschlagen' (to suggest), built on 'vor' (forward) + 'schlagen' (to strike) — the noun form of putting an idea forward.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Idee',
            article: 'die',
            translation: 'idea',
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
              "'Vorschlag' relates to 'vorschlagen' (to suggest) — a Vorschlag is exactly that: an idea put forward.",
          },
          {
            id: 2,
            content:
              "Think of an idea placed 'forward' on the table — Vorschlag.",
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
