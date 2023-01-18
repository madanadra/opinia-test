/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': 'Inter, sans-serif',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'one': '#FFFFFF',
      'two': '#000000',
      'three': '#05B1A1',
      'four': '#EA6C00',
      'five': '#FF0000',
      'six': '#F5F5F5',
      'seven': '#9E9E9E',
      'eight': '#616161',
      'nine': '#E0E0E0',
      'ten': '#ACE5E0'
    },
    extend: {},
  },
  plugins: [],
}
