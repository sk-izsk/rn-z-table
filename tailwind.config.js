/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './features/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        chrome: '#ecf7fb',
        'chrome-dark': '#0e1820',
        ink: '#1f2937',
        'ink-dark': '#eff7fb',
        accent: '#187f9d',
        line: '#cfe0ea',
        'line-dark': '#254658',
        panel: '#fbfdfd',
        'panel-dark': '#132430',
        'panel-muted-dark': '#19303e',
      },
      boxShadow: {
        panel: '0 12px 34px rgba(24, 67, 89, 0.12)',
      },
    },
  },
  plugins: [],
}
