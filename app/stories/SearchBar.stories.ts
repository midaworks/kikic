import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SearchBar, { SearchBarVariant } from '~/components/SearchBar/SearchBar';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '검색바 타입',
      control: 'select',
      options: ['primary', 'sub'],
      defaultValue: 'primary',
    },
    title: {
      description: '검색바 제목',
      control: 'text',
    },
    value: {
      description: '검색어 값',
      control: 'text',
    },
    placeholder: {
      description: '플레이스홀더 텍스트',
      control: 'text',
    },
    onChange: {
      description: '입력값 변경 핸들러',
      action: 'changed',
    },
    onSubmit: {
      description: '검색 제출 핸들러',
      action: 'submitted',
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: SearchBarVariant.PRIMARY,
    title: '키워드조회',
    value: '',
    onChange: fn(),
    onSubmit: fn(),
    placeholder: '혹시몰라서 넣어봤어요~',
  },
};

export const Sub: Story = {
  args: {
    variant: SearchBarVariant.SUB,
    title: '마케팅칼럼',
    value: '',
    onSubmit: fn(),
    onChange: fn(),
    placeholder: '검색어를 입력해주세요.',
  },
};
