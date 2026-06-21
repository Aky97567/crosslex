import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ausstellen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'ausstellen',
        article: null,
        translation: 'to issue (a document); to exhibit',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['bureaucracy', 'work', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To officially issue a document such as a certificate, passport, or receipt. Also means to exhibit or display objects in a gallery or exhibition.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'ausstellen'?",
          options: [
            { text: 'to apply for a document', isCorrect: false },
            { text: 'to issue or exhibit', isCorrect: true },
            { text: 'to destroy a document', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Behörde muss Ihnen eine Bescheinigung ausstellen. Das Amt stellt den Ausweis innerhalb von zwei Wochen aus. Die Gemeinde hat die Genehmigung ohne Probleme ausgestellt.',
        alternateForms: ['ausgestellt'],
        trennbarTokens: ['stellt', 'aus'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus-' (out) + 'stellen' (to place, put). To put out — making a document available by placing it out officially.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'ausdrucken',
            article: null,
            translation: 'to print out',
            similarityScore: 3,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'erteilen',
            article: null,
            translation: 'to grant, issue',
            similarityScore: 4,
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
              "'Aus' = out, 'stellen' = to place. Place it out — put the official document out into your hands. Ausstellen.",
          },
          {
            id: 2,
            content:
              "'Das Amt stellt den Ausweis aus.' The 'aus' moves to the end. An authority puts out (stellt … aus) the document officially.",
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
