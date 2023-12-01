/** @type {import('tailwindcss').Config} */
const { colors } = require('./src/colors.js');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [...Object.keys(colors).map((color) => `bg-${color}`)],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
      //hand: ['Permanent Marker', 'cursive'],
      hand: ['Rock Salt', 'cursive'],
      serif: ['serif'],
    },
    colors: {
      transparent: 'transparent', // Transparent
      white: '#ffffff', // White
      ...colors, // Custom colors
    },
  },
  plugins: [],
};
