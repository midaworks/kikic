import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Noto Sans KR',
          // 'Inter',
          // 'ui-sans-serif',
          // 'system-ui',
          // 'sans-serif',
          // 'Apple Color Emoji',
          // 'Segoe UI Emoji',
          // 'Segoe UI Symbol',
          // 'Noto Color Emoji',
        ],
      },
      colors: {
        primary: {
          20: '#FDDBD6',
          50: '#F9A699',
          100: '#F34D33',
        },
        black: '#333333',
        white: '#FFFFFF',
        naver: '#03C75A',
        google: '#4285F4',
        gray: {
          10: '#F9F9F9',
          20: '#F5F5F5',
          30: '#F1F1F1',
          40: '#EAEAEA',
          50: '#E3E5E8',
          60: '#E1E1E1',
          70: '#CCCCCC',
          80: '#999999',
          90: '#666666',
        },
      },
      fontSize: {
        'label-m': [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '500', // Medium
            letterSpacing: '-0.04px',
          },
        ],
        'label-b': [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '700', // Bold
            letterSpacing: '-0.04px',
          },
        ],
        'small-m': [
          '13px',
          {
            lineHeight: '20px',
            fontWeight: '500', // Medium
            letterSpacing: '-0.04px',
          },
        ],
        'small-b': [
          '13px',
          {
            lineHeight: '20px',
            fontWeight: '700', // Bold
            letterSpacing: '-0.04px',
          },
        ],
        'small-eb': [
          '13px',
          {
            lineHeight: '20px',
            fontWeight: '900', // Extra Bold
            letterSpacing: '0',
          },
        ],
        'content-m': [
          '14px',
          {
            lineHeight: '21px',
            fontWeight: '500', // Medium
            letterSpacing: '-0.04px',
          },
        ],
        'content-b': [
          '14px',
          {
            lineHeight: '21px',
            fontWeight: '700', // Bold
            letterSpacing: '-0.04px',
          },
        ],
        'content-eb': [
          '14px',
          {
            lineHeight: '21px',
            fontWeight: '900', // Extra Bold
            letterSpacing: '0',
          },
        ],
        'content-em': [
          '14px',
          {
            lineHeight: '21px',
            fontWeight: '500', // Medium
            letterSpacing: '-0.04px',
          },
        ],
        'stitle-b': [
          '15px',
          {
            lineHeight: '22px',
            fontWeight: '700', // Bold
            letterSpacing: '-0.04px',
          },
        ],
        'regular-m': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '500', // Medium
            letterSpacing: '-0.04px',
          },
        ],
        'regular-b': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '700', // Bold
            letterSpacing: '-0.04px',
          },
        ],
        'title-b': [
          '18px',
          {
            lineHeight: '27px',
            fontWeight: '700', // Bold
            letterSpacing: '-0.04px',
          },
        ],
        't-title-b': [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '700', // Bold
            letterSpacing: '-0.04px',
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
