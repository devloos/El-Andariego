/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#1a532e',
        'main-dark': '#10321c',
        'main-light': '#487558',
        minor: '#76070a',
        'minor-dark': '#470406',
        'minor-light': '#91393b',
        accent: '#bdbbb0',
        'accent-dark': '#71706a',
        'accent-light': '#cac9c0',
        coal: '#333',
      },
    },
  },
  plugins: [],
};
