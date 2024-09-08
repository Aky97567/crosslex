// LearnPage.stories.tsx

import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { LearnPage } from './LearnPage';
import {
  ContentLayout,
  LearnPageContent,
} from '@whitelotus/common-crosslex-view';

export default {
  title: 'Pages/LearnPage',
  component: LearnPage,
} as Meta;

const Template: StoryFn<ContentLayout<LearnPageContent>> = args => (
  <LearnPage {...args} />
);

const sampleLearnPageContent: LearnPageContent = {
  type: 'learn',
  level: ['B1', 'B2'],
  word: 'Erfahrung',
  article: 'die',
  translation: 'experience',
  partOfSpeech: 'noun',
  meaning:
    'Knowledge or skill that one gets from doing, seeing, or feeling things.',
  meaningBestGuessQuestion: {
    question: "What is the best guess for the meaning of 'die Erfahrung'?",
    options: [
      { text: 'A place you visit', isCorrect: false },
      { text: 'An error or mistake', isCorrect: false },
      { text: 'Knowledge or skill gained from experience', isCorrect: true },
    ],
  },
  paragraphWithUsage:
    'Durch meine jahrelange Erfahrung habe ich gelernt, wie man effizient arbeitet. Erfahrung ist der beste Lehrer.',
  etymology:
    "From Middle High German 'ervarunge', from Old High German 'irfaran', meaning to travel or to undergo.",
  similarWords: [
    {
      word: 'das Erlebnis',
      translation: 'experience (event)',
      similarityScore: 4,
    },
    { word: 'die Kenntnis', translation: 'knowledge', similarityScore: 3 },
    { word: 'Test 1', translation: 'knowledge', similarityScore: 5 },
    { word: 'Test 2', translation: 'knowledge', similarityScore: 2 },
    { word: 'Test 3', translation: 'knowledge', similarityScore: 1 },
  ],
  // representativeImageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
  representativeImageUrl:
    'https://onecms-res.cloudinary.com/image/upload/s--kCDWxyX7--/c_fill,g_auto,h_676,w_1200/f_auto,q_auto/stella-modern-family-bulldog.jpg?itok=L4ZO6Xno',
  mnemonics: [
    {
      id: 1,
      content:
        "Think of 'Erfahrung' as gaining 'experience' from traveling far and wide.",
      // imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
      imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
    },
    {
      id: 2,
      content:
        "Erfahrung sounds like 'err' and 'far' – when you go far, you might make errors and learn from them.",
      imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
    },
    {
      id: 3,
      content:
        "Imagine an 'experienced' traveler collecting 'far' away 'rings' from different places.",
      imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
    },
  ],
  wordShowcaseUrl: 'https://example.com/word-theater-video.mp4',
};

export const Primary: StoryObj<ContentLayout<LearnPageContent>> = Template.bind(
  {},
);
Primary.args = {
  content: {
    ...sampleLearnPageContent,
  },
};
// Primary.argTypes = {
//   theme: {
//     control: { type: 'select' },
//     options: ['light', 'dark'],
//   },
// };
