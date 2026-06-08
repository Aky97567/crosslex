import { Meta, StoryObj } from '@storybook/react';
import { SettingsPanel } from './SettingsPanel';

export default {
  title: 'Widgets/SettingsPanel',
  component: SettingsPanel,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof SettingsPanel>;

export const Open: StoryObj<typeof SettingsPanel> = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};

export const Closed: StoryObj<typeof SettingsPanel> = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
};
