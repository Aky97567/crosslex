import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { KnownWordsSection } from './KnownWordsSection';

const KNOWN_WORDS = ['ueberweisung', 'kuendigung', 'gehalt', 'steuer'];

const withKnownWords = (words: string[]) => (Story: React.FC) => {
  localStorage.setItem('crosslex:level', 'b1');
  localStorage.setItem('crosslex:known_words:b1', JSON.stringify(words));
  return <Story />;
};

export default {
  title: 'Widgets/SettingsPanel/KnownWordsSection',
  component: KnownWordsSection,
  parameters: { layout: 'padded' },
} as Meta<typeof KnownWordsSection>;

type Story = StoryObj<typeof KnownWordsSection>;

export const Empty: Story = {
  decorators: [withKnownWords([])],
};

export const WithWords: Story = {
  name: 'With known words',
  decorators: [withKnownWords(KNOWN_WORDS)],
};
