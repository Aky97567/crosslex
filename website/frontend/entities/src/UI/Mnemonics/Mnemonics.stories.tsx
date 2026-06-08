import { Meta, StoryObj } from '@storybook/react';
import { Mnemonics } from './Mnemonics';

export default {
  title: 'Entities/Mnemonics',
  component: Mnemonics,
  args: {
    heading: { level: 'h2', text: 'Mnemonics' },
    showContent: true,
  },
} as Meta<typeof Mnemonics>;

export const Default: StoryObj<typeof Mnemonics> = {
  args: {
    mnemonics: [
      { id: 1, content: "Think of 'Arbeit' (work). Think: you need to do the Arbeit-en (the work-ing)." },
      { id: 2, content: "Sounds like 'are-bite-en' — you bite into your work and get things done." },
    ],
  },
};

export const Single: StoryObj<typeof Mnemonics> = {
  args: {
    mnemonics: [
      { id: 1, content: "'Pünktlich' contains 'Punkt' (dot). To be pünktlich is to arrive exactly on the dot." },
    ],
  },
};

export const Empty: StoryObj<typeof Mnemonics> = {
  args: {
    mnemonics: [],
  },
};
