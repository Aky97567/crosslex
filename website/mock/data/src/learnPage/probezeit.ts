import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const probezeit: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Probezeit',
        article: 'die',
        translation: 'probationary period, trial period',
        partOfSpeech: 'noun',
        theme: 'work',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A trial period at the start of employment, typically six months in Germany, during which either party can terminate the contract with just two weeks notice. Full employment protection kicks in after the Probezeit ends.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Probezeit'?",
          options: [
            { text: 'A probationary or trial period at the start of a job', isCorrect: true },
            { text: 'A period of unpaid leave for personal reasons', isCorrect: false },
            { text: 'The notice period required before leaving a job', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Meine Probezeit dauert sechs Monate. Während der Probezeit gilt eine Kündigungsfrist von zwei Wochen. Nach der Probezeit habe ich mehr Sicherheit im Job.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Probe' (trial, test, rehearsal) + 'Zeit' (time). Probe comes from Latin 'proba' (proof, test). A Probezeit is literally a time of testing.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Probe',
            article: 'die',
            translation: 'trial, test, rehearsal',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Erprobungszeit',
            article: 'die',
            translation: 'trial period',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Bewährungszeit',
            article: 'die',
            translation: 'probationary period',
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
              "'Probe' = probe/test, 'Zeit' = time. Your Probezeit is the time during which you are probed — tested by your employer.",
          },
          {
            id: 2,
            content:
              "Think of 'probe' as in a space probe — it's sent out to see if conditions are right. You're the probe in your new job.",
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
