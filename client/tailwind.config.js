/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: '#edf1ee',
          100: '#d1ddd5',
          200: '#a3baab',
          300: '#769882',
          400: '#487558',
          DEFAULT: '#1a532e',
          600: '#154225',
          700: '#10321c',
          800: '#0a2112',
          900: '#051109',
        },
        alternate: {
          100: '#e4cdce',
          200: '#c89c9d',
          300: '#ad6a6c',
          400: '#91393b',
          DEFAULT: '#76070a',
          600: '#5e0608',
          700: '#470406',
          800: '#2f0304',
          900: '#180102',
        },
        accent: {
          100: '#f2f1ef',
          200: '#e5e4df',
          300: '#d7d6d0',
          400: '#cac9c0',
          DEFAULT: '#bdbbb0',
          600: '#97968d',
          700: '#71706a',
          800: '#4c4b46',
          900: '#262523',
        },
        coal: {
          100: '#d6d6d6',
          200: '#adadad',
          300: '#858585',
          400: '#5c5c5c',
          DEFAULT: '#333333',
          600: '#292929',
          700: '#1f1f1f',
          800: '#141414',
          900: '#0a0a0a',
        },
        ash: {
          100: '#fefefd',
          200: '#fcfcfc',
          300: '#fbfbfa',
          400: '#f9f9f9',
          DEFAULT: '#f8f8f7',
          600: '#c6c6c6',
          700: '#959594',
          800: '#636363',
          900: '#323231',
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    base: false,
    logs: false,
    themes: [
      {
        mytheme: {
          primary: '#1a532e',
          secondary: '#76070a',
          accent: '#bdbbb0',
          neutral: '#f8f8f7',
          'base-100': '#edf1ee',
          info: '#3abff8',
          success: '#1a532e',
          warning: '#FFBF37',
          error: '#76070a',
        },
      },
    ],
  },
};
