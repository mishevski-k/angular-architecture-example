/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/*.{html,scss,ts}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eff6ff',
          100:'#dbeaf2',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#4c73db',
          700: '#2852c8',
          800: '#2144a6',
          900: '#1d3c91',
        }
      }
    },
  },
  plugins: [],
}

