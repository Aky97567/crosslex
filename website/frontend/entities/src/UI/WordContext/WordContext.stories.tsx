import { Meta, StoryObj } from '@storybook/react';
import { WordContext } from './WordContext';

export default {
  title: 'Entities/WordContext',
  component: WordContext,
  args: {
    heading: { level: 'h2', text: 'Context' },
    showContent: true,
  },
} as Meta<typeof WordContext>;

export const Default: StoryObj<typeof WordContext> = {
  args: {
    paragraphWithUsage:
      'Ich muss eine E-Mail schreiben. Kannst du mir bitte schreiben? Er hat einen Brief geschrieben.',
  },
};

export const LongerParagraph: StoryObj<typeof WordContext> = {
  args: {
    paragraphWithUsage:
      'Die Anerkennung meines ausländischen Abschlusses dauerte sechs Monate. Ohne Anerkennung darf ich meinen Beruf in Deutschland nicht ausüben. Die Anerkennung wird von der zuständigen Stelle geprüft.',
  },
};
