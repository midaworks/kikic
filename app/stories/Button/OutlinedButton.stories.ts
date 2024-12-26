import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import OutlinedButton from '~/components/OutlinedButton/OutlinedButton';

const meta = {
  title: 'Button/OutlinedButton',
  component: OutlinedButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    color: { control: 'color' },
    fontWeight: { control: 'select', options: ['medium', 'bold'] },
    disabled: { control: 'boolean', defaultValue: false },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OutlinedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumFont: Story = {
  args: {
    onClick: fn(),
    children: '정보수정',
    color: '#CCCCCC',
    fontWeight: 'medium',
  },
};

export const BoldFont: Story = {
  args: {
    onClick: fn(),
    children: '구글',
    color: '#f34d33',
    fontWeight: 'bold',
  },
};
