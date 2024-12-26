import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import SearchBar from '~/components/SearchBar/SearchBar';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    title: '키워드조회',
    onPressSearch: () => {},
    placeholder: '혹시몰라서 넣어봤어요~',
  },
};

export const Sub: Story = {
  args: {
    type: 'sub',
    title: '마케팅칼럼',
    onPressSearch: () => {},
    placeholder: '검색어를 입력해주세요.',
  },
};
