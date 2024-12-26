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
    children: { control: 'text', description: '버튼 내용' },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    color: { control: 'color', description: '버튼 테두리 및 폰트 색상' },
    fontWeight: {
      control: 'select',
      options: ['medium', 'bold'],
      description: '버튼 폰트 굵기',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '버튼 비활성화 여부',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OutlinedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumFont: Story = {
  args: {
    children: '정보수정',
    color: '#CCCCCC',
    fontWeight: 'medium',
    onClick: fn(),
  },
};

export const BoldFont: Story = {
  args: {
    children: '구글',
    color: '#f34d33',
    fontWeight: 'bold',
    onClick: fn(),
  },
};
