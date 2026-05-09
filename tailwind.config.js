/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        chrome: '#ecf7fb',
        ink: '#1f2937',
        accent: '#187f9d',
        line: '#cfe0ea',
        panel: '#fbfdfd',
      },
      boxShadow: {
        panel: '0 12px 34px rgba(24, 67, 89, 0.12)',
      },
    },
  },
  plugins: [],
}
