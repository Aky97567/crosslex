import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const formular: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Formular',
        article: 'das',
        translation: 'form',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl:
          'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A printed or digital document with blank spaces designed to be filled in with specific information.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Formular'?",
          options: [
            { text: 'A mathematical formula on a blackboard', isCorrect: false },
            { text: 'A document with blanks to be filled in', isCorrect: true },
            { text: 'A formal greeting', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Bitte füllen Sie das Formular vollständig aus. Das Formular ist auf der Website der Behörde verfügbar. Nach dem Ausfüllen müssen Sie das Formular unterschreiben.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'formulare' (to express in a set form), derived from 'formula' (a set form or rule). Entered German via Medieval Latin administrative usage.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Vordruck',
            article: 'der',
            translation: 'printed form',
            similarityScore: 5,
            level: ['B2'],
            cefrRelevant: false,
          },
          {
            word: 'Antrag',
            article: 'der',
            translation: 'application',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Fragebogen',
            article: 'der',
            translation: 'questionnaire',
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
              "'Formular' looks just like 'formula' – a form is a fixed formula of blank fields to fill in.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
          {
            id: 2,
            content:
              "Think of a 'formal' document – 'Formular' is the formal paper you fill out at any office.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
        ],
      },
      {
        moduleType: 'wordShowcase',
        heading: { text: 'Word Showcase' },
        wordShowcaseUrl: 'https://example.com/word-theater-video.mp4',
      },
    ],
  },
};
