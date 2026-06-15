import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zeugnis: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Zeugnis',
        article: 'das',
        translation: 'certificate, reference letter, school report',
        partOfSpeech: 'noun',
        themes: ['work', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A formal document certifying performance or character. It can be a school report (Schulzeugnis), a work reference (Arbeitszeugnis) that employers must legally provide at the end of employment, or a general character reference. The Arbeitszeugnis must be honest yet diplomatically worded — a well-understood coded language exists in German HR.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Zeugnis'?",
          options: [
            { text: 'A formal certificate or reference letter evaluating performance', isCorrect: true },
            { text: 'A written complaint filed against an employee', isCorrect: false },
            { text: 'A document confirming an address registration', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Arbeitgeber hat mir ein gutes Zeugnis ausgestellt. Das Zeugnis beschreibt meine Leistungen und meinen Charakter sehr positiv. Ohne ein starkes Zeugnis ist es schwer, eine neue Stelle zu finden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'giziugni' (testimony, witness), related to 'Zeuge' (witness). A Zeugnis was originally a statement by a witness — testimony of what they observed about a person.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Zertifikat',
            article: 'das',
            translation: 'certificate of qualification',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Attest',
            article: 'das',
            translation: 'medical certificate, attestation',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Empfehlungsschreiben',
            article: 'das',
            translation: 'letter of recommendation',
            similarityScore: 4,
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
              "'Zeugnis' shares its root with 'Zeuge' (witness) — the document witnesses and testifies to your achievements.",
          },
          {
            id: 2,
            content:
              "'Zeug-nis' contains 'Zeug' (stuff, gear) — your Zeugnis is the written proof of your stuff, your accomplishments.",
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
