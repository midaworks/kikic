import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ImageButton from '~/components/ImageButton/ImageButton';

const meta = {
  title: 'Button/ImageButton',
  component: ImageButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: fn(),
    src: 'https://picsum.photos/100/100',
    label: '이미지 버튼',
  },
};
