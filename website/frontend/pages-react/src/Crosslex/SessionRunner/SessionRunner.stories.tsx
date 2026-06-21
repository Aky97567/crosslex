import { Meta, StoryObj } from '@storybook/react';
import { jest, expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import {
  CrosslexStorageProvider,
  createMemoryAdapter,
} from '@whitelotus/front-features';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordDetail } from '@whitelotus/front-widgets';
import { SessionFooter } from './SessionFooter/SessionFooter';

const emptyAdapter = createMemoryAdapter({
  exerciseLog: [],
  streak: null,
  activeLevel: 'b1',
});

const noMark = { shown: false, dismiss: jest.fn() };

export default {
  title: 'Pages/SessionRunner',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
  },
} as Meta;

type Story = StoryObj<{ onAdvance: (correct: boolean | null) => void }>;

export const NextButtonAboveOpenSectionCard: Story = {
  name: 'Mobile — footer button reachable above open section card',
  args: {
    onAdvance: jest.fn(),
  },
  render: ({ onAdvance }) => (
    <CrosslexStorageProvider adapter={emptyAdapter}>
      <WordDetail content={sampleLearnPageContentList.erfahrung.content} />
      <SessionFooter
        cardType="wordIntro"
        wordKey="erfahrung"
        answered={null}
        isReviewing={false}
        isWordIntroCard={true}
        isExerciseCard={false}
        onAdvance={onAdvance}
        onReviewWord={jest.fn()}
        onEndSession={jest.fn()}
        onAlreadyKnow={jest.fn()}
        wordIntroMark={noMark}
        exerciseMark={noMark}
        wrongMark={noMark}
      />
    </CrosslexStorageProvider>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Open the first section card — "Meaning" is the wordMeaning module heading,
    // present on every word. Opening it shows the z-30 overlay.
    await userEvent.click(canvas.getByText('Meaning'));
    // Footer is z-40; clicking "Got it →" must fire despite the open overlay.
    await userEvent.click(canvas.getByText('Got it →'));
    await expect(args.onAdvance).toHaveBeenCalledTimes(1);
    await expect(args.onAdvance).toHaveBeenCalledWith(null);
  },
};
