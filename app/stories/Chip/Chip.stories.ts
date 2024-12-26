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
    children: { control: 'text', description: '칩 내용' },
    onClick: { action: 'clicked', description: '칩 클릭 이벤트' },
    isSelected: {
      control: 'boolean',
      defaultValue: true,
      description: '선택 여부',
    },
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
