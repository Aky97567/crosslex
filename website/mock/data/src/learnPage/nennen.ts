import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const nennen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'nennen',
        article: null,
        translation: 'to name, call',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To give a name to someone or something, or to refer to them by a particular name.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'nennen'?",
          options: [
            { text: 'to name, call', isCorrect: true },
            { text: "to forget someone's name", isCorrect: false },
            { text: 'to greet someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{nennen}} unseren Sohn Leon.',
          'Wie {{nennt}} man dieses Gemüse auf Deutsch?',
          'Sie hat ihre Katze Minka {{genannt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'nennen', related to English 'name' — both trace back to the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'benennen',
            article: null,
            translation: 'to name, designate (formal)',
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
              "'Nennen' sounds like 'name in' — you name something in words.",
          },
          {
            id: 2,
            content:
              "Picture pointing at a baby and saying its name — that's nennen.",
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
