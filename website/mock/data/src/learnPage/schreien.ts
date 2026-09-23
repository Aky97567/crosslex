import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schreien: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schreien',
        article: null,
        translation: 'to scream, shout',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To make a very loud sound with one's voice, often because of fear, pain, or strong emotion.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schreien'?",
          options: [
            { text: 'to scream, shout', isCorrect: true },
            { text: 'to whisper', isCorrect: false },
            { text: 'to hum a tune', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Baby {{schreit}}, weil es hungrig ist.',
          'Sie {{schrie}} vor Schreck laut auf.',
          'Er hat um Hilfe {{geschrien}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'scrīan', an imitative word for a loud, piercing sound — related to English 'shriek'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'brüllen',
            article: null,
            translation: 'to roar, bellow',
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
              "'Schreien' sounds like 'shriek' with a German accent — both describe a loud, piercing sound.",
          },
          {
            id: 2,
            content:
              "Picture a horror movie moment where someone schreit loudly.",
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
