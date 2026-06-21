import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ausfuellen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'ausfüllen',
        article: null,
        translation: 'to fill out (a form)',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['bureaucracy', 'work', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To complete a form, questionnaire, or application by writing in the required fields. A key verb for bureaucratic life in Germany.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'ausfüllen'?",
          options: [
            { text: 'to print a document', isCorrect: false },
            { text: 'to fill out a form', isCorrect: true },
            { text: 'to sign a contract', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Sie müssen dieses Formular vollständig ausfüllen. Ich fülle den Antrag jetzt aus. Er hat das Anmeldeformular korrekt ausgefüllt.',
        alternateForms: ['ausgefüllt'],
        trennbarTokens: ['fülle', 'aus'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus-' (out, fully) + 'füllen' (to fill). To fill out completely — every blank gets filled.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'eintragen',
            article: null,
            translation: 'to enter, fill in',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'ergänzen',
            article: null,
            translation: 'to complete, supplement',
            similarityScore: 3,
            level: ['B1'],
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
              "'Aus' = out/fully, 'füllen' = to fill. Fill it out completely — ausfüllen.",
          },
          {
            id: 2,
            content:
              "'Bitte füllen Sie das Formular aus.' — every German office will say this. The 'aus' lands at the end of the sentence.",
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
