/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryWhite: '#D7BC58',
        primary: '#181818',
        secondary: '#ff5722',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3em',
        },
      },
    },
  },
  plugins: [],
};
