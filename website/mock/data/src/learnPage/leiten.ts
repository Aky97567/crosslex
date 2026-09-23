import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const leiten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'leiten',
        article: null,
        translation: 'to lead, direct',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To be in charge of a group, project, or organization, guiding its direction.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'leiten'?",
          options: [
            { text: 'to lead, direct', isCorrect: true },
            { text: 'to join a team as a new member', isCorrect: false },
            { text: 'to quit a job', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie {{leitet}} die Abteilung seit zwei Jahren.',
          'Er {{leitet}} das Meeting heute.',
          'Wer hat das Projekt {{geleitet}}?',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'leiten', related to English 'lead' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'führen',
            article: null,
            translation: 'to lead, guide',
            similarityScore: 4,
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
              "'Leiten' sounds and looks like English 'lead-en' — you lead (leiten) a team.",
          },
          {
            id: 2,
            content:
              "Picture standing at the front of a meeting room — that's leiten.",
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
