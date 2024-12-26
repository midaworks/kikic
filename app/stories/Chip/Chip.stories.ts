import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Chip from '~/components/Chip/Chip';

const meta = {
  title: 'Chip/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    onClick: fn(),
    label: '구글',
    isActive: true,
  },
};

export const Inactive: Story = {
  args: {
    onClick: fn(),
    label: '네이버',
    isActive: false,
  },
};
