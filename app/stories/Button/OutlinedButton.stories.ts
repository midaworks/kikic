import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import OutlinedButton from '~/components/OutlinedButton/OutlinedButton';

const meta = {
  title: 'Button/OutlinedButton',
  component: OutlinedButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OutlinedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    onClick: fn(),
    label: '정보수정',
    color: '#CCCCCC',
    fontWeight: 'medium',
  },
};

export const Bold: Story = {
  args: {
    onClick: fn(),
    label: '구글',
    color: '#f34d33',
    fontWeight: 'bold',
  },
};
