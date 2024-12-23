import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ScrollTopButton from '~/components/ScrollTopButton/ScrollTopButton';

const meta = {
  title: 'Components/ScrollTopButton',
  component: ScrollTopButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { onClick: fn(), label: 'TOP' },
};
