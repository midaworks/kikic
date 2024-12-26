import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans'],
        notoKr: ['Noto Sans CJK KR'],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        primary: {
          100: '#fef6f4',
          200: '#f34d33',
        },
        black: '#333333',
        white: '#FFFFFF',
        naver: '#03C75A',
        google: '#4285F4',
        gray: {
          100: '#F9F9F9',
          200: '#F5F5F5',
          300: '#F1F1F1',
          400: '#EAEAEA',
          500: '#E3E5E8',
          600: '#E1E1E1',
          700: '#CCCCCC',
          800: '#999999',
          900: '#666666',
        },
      },
      fontSize: {
        'label-m': [
          '0.8571rem',
          {
            lineHeight: '1.2857rem',
            fontWeight: '500', // Medium
            letterSpacing: '-0.02857rem',
          },
        ],
        'label-b': [
          '0.8571rem',
          {
            lineHeight: '1.2857rem',
            fontWeight: '700', // Bold
            letterSpacing: '-0.02857rem',
          },
        ],
        'small-m': [
          '0.9286rem',
          {
            lineHeight: '1.4286rem',
            fontWeight: '500', // Medium
            letterSpacing: '-0.02857rem',
          },
        ],
        'small-b': [
          '0.9286rem',
          {
            lineHeight: '1.4286rem',
            fontWeight: '700', // Bold
            letterSpacing: '-0.02857rem',
          },
        ],
        'small-eb': [
          '0.9286rem',
          {
            lineHeight: '1.4286rem',
            fontWeight: '700', // Bold
            letterSpacing: '0',
          },
        ],
        'content-m': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '500', // Medium
            letterSpacing: '-0.02857rem',
          },
        ],
        'content-b': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700', // Bold
            letterSpacing: '-0.02857rem',
          },
        ],
        'content-eb': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '900', // Bold
            letterSpacing: '0',
          },
        ],
        'content-em': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '500', // Medium
            letterSpacing: '-0.02857rem',
          },
        ],
        'stitle-b': [
          '1.0714rem',
          {
            lineHeight: '1.5714rem',
            fontWeight: '700', // Bold
            letterSpacing: '-0.02857rem',
          },
        ],
        'regular-m': [
          '1.1429rem',
          {
            lineHeight: '1.7143rem',
            fontWeight: '500', // Medium
            letterSpacing: '-0.02857rem',
          },
        ],
        'regular-b': [
          '1.1429rem',
          {
            lineHeight: '1.7143rem',
            fontWeight: '700', // Bold
            letterSpacing: '-0.02857rem',
          },
        ],
        'title-b': [
          '1.2857rem',
          {
            lineHeight: '1.9286rem',
            fontWeight: '700', // Bold
            letterSpacing: '-0.02857rem',
          },
        ],
        't-title-b': [
          '1.4286rem',
          {
            lineHeight: '2.1429rem',
            fontWeight: '700', // Bold
            letterSpacing: '-0.02857rem',
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
