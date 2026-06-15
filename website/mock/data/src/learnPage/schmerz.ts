import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schmerz: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Schmerz',
        article: 'der',
        translation: 'pain, ache',
        partOfSpeech: 'noun',
        themes: ['health'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An unpleasant physical feeling caused by injury or illness. Used in many compound words: Kopfschmerzen (headache), Bauchschmerzen (stomachache), Rückenschmerzen (back pain).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Schmerz'?",
          options: [
            { text: 'pain or an ache in the body', isCorrect: true },
            { text: 'an illness that lasts a long time', isCorrect: false },
            { text: 'a medicine that helps you feel better', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe Schmerzen im Rücken. Der Schmerz ist sehr stark. Gegen den Schmerz nehme ich eine Tablette.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'smerzo', related to the verb 'schmerzen' (to hurt). Distantly related to English 'smart' — as in a wound that smarts.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Weh',
            article: 'das',
            translation: 'ache, pain (informal)',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Beschwerden',
            article: 'die',
            translation: 'complaints, discomfort, ailments',
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
              "Think of 'smart' — a wound that smarts is painful. Schmerz and 'smart' share the same ancient root.",
          },
          {
            id: 2,
            content:
              "'Schmerz' sounds like 'smears' — pain smears your whole day when it's bad enough.",
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
