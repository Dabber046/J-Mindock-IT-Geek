/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6EE7B7',
          DEFAULT: '#34D399',
          dark: '#059669'
        },
        secondary: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8'
        }
      }
    }
  },
  plugins: []
}
