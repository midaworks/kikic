import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ImageButton from '~/components/ImageButton/ImageButton';

const meta = {
  title: 'Button/ImageButton',
  component: ImageButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked', description: '이미지 클릭 이벤트' },
    src: { control: 'text', description: '이미지 주소' },
    label: {
      control: 'text',
      description: 'img alt 속성 및 button title 속성',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: 'https://picsum.photos/100/100',
    label: '이미지 버튼',
    onClick: fn(),
  },
};
