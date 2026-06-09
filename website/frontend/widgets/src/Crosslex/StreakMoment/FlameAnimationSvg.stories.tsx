import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FlameAnimationSvg, SVG_FLAME_FILES } from './FlameAnimationSvg';

export default {
  title: 'Widgets/FlameAnimationSvg',
  component: FlameAnimationSvg,
  parameters: { layout: 'centered' },
  args: { className: 'w-[160px] h-[160px]' },
} as Meta<typeof FlameAnimationSvg>;

type Story = StoryObj<typeof FlameAnimationSvg>;

export const Flame1: Story = {
  args: { file: SVG_FLAME_FILES[0] },
  name: 'Flame variant 1',
};

export const Flame2: Story = {
  args: { file: SVG_FLAME_FILES[1] },
  name: 'Flame variant 2',
};

export const Flame3: Story = {
  args: { file: SVG_FLAME_FILES[2] },
  name: 'Flame variant 3',
};

export const Flame4: Story = {
  args: { file: SVG_FLAME_FILES[3] },
  name: 'Flame variant 4',
};

export const Flame5: Story = {
  args: { file: SVG_FLAME_FILES[4] },
  name: 'Flame variant 5',
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div className="flex gap-40 flex-wrap justify-center">
      {SVG_FLAME_FILES.map((file) => (
        <FlameAnimationSvg key={file} file={file} className="w-[160px] h-[160px]" />
      ))}
    </div>
  ),
};
