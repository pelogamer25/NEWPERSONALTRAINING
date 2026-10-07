/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './constants.ts',
    './blogs.ts',
  ],
  theme: {
    extend: {
      colors: {
        'npt-red': '#D00000',
        'npt-red-dark': '#8B0000',
        'npt-black': '#050505',
        'npt-dark': '#0F0F0F',
        'npt-gray': '#1F1F1F',
        'npt-text': '#A3A3A3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
