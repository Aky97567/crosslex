import { Meta, StoryObj } from '@storybook/react';
import { MnemonicsModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { Mnemonics } from './Mnemonics';

const getMnemonics = (key: keyof typeof sampleLearnPageContentList) =>
  (
    sampleLearnPageContentList[key].content.modules.find(
      (m) => m.moduleType === 'mnemonics',
    ) as MnemonicsModule
  ).mnemonics;

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
    mnemonics: getMnemonics('arbeiten'),
  },
};

export const Single: StoryObj<typeof Mnemonics> = {
  args: {
    mnemonics: getMnemonics('puenktlich').slice(0, 1),
  },
};

export const Empty: StoryObj<typeof Mnemonics> = {
  args: {
    mnemonics: [],
  },
};
