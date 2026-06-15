import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const unterschrift: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Unterschrift',
        article: 'die',
        translation: 'signature',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A person\'s handwritten name written at the bottom of a document to show agreement, authorisation, or identity. In Germany, many official forms and contracts still require a handwritten Unterschrift — digital signatures are not universally accepted for legal documents.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Unterschrift'?",
          options: [
            { text: 'A handwritten signature placed at the bottom of a document', isCorrect: true },
            { text: 'An official stamp issued by a government authority', isCorrect: false },
            { text: 'A printed note added below the main text of a form', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Der Vertrag braucht Ihre Unterschrift auf jeder Seite. Ich habe meine Unterschrift unter den Mietvertrag gesetzt. Ohne eine gültige Unterschrift ist das Dokument rechtlich nicht bindend.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'unter' (under, beneath) + 'Schrift' (writing). A signature is literally the writing placed underneath the document text — the mark beneath the written content.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Signatur',
            article: 'die',
            translation: 'signature (also digital)',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Namenszeichen',
            article: 'das',
            translation: 'initials, monogram',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Paraphe',
            article: 'die',
            translation: 'initials, brief signature mark',
            similarityScore: 3,
            level: ['B2'],
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
              "'Unter-SCHRIFT' means 'under-writing' — your Unterschrift is your writing placed physically under the document.",
          },
          {
            id: 2,
            content:
              "English 'undersigned' means exactly the same thing — the person who signed their name under the text.",
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
