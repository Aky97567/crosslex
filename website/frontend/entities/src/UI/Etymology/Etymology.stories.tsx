import { Meta, StoryObj } from '@storybook/react';
import { EtymologyModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { Etymology } from './Etymology';

const getEtymology = (key: keyof typeof sampleLearnPageContentList) =>
  (
    sampleLearnPageContentList[key].content.modules.find(
      (m) => m.moduleType === 'etymology',
    ) as EtymologyModule
  ).etymology;

export default {
  title: 'Entities/Etymology',
  component: Etymology,
  args: {
    heading: { level: 'h2', text: 'Etymology' },
    showContent: true,
  },
} as Meta<typeof Etymology>;

export const Default: StoryObj<typeof Etymology> = {
  args: {
    etymology: getEtymology('arbeiten'),
  },
};

export const LatinRoot: StoryObj<typeof Etymology> = {
  args: {
    etymology: getEtymology('familie'),
  },
};
