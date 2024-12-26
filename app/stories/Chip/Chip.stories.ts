import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Chip from '~/components/Chip/Chip';

const meta = {
  title: 'Chip/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    isSelected: { control: 'boolean', defaultValue: true },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    onClick: fn(),
    children: '구글',
    isSelected: true,
  },
};

export const Unselected: Story = {
  args: {
    onClick: fn(),
    children: '네이버',
    isSelected: false,
  },
};
