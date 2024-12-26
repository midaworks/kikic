import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ImageButton from '~/components/ImageButton/ImageButton';

const meta = {
  title: 'Components/ImageButton',
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
    alt: 'imageButton',
    title: '이미지 버튼',
  },
};
