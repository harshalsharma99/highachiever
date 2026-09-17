/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#070B14',
          900: '#0B1220',
          800: '#101A2E',
        },
        gold: {
          400: '#F5B942',
          500: '#EFA92B',
        },
        teal: {
          400: '#2FC9B0',
          500: '#1FA98F',
        },
      },
    },
  },
  plugins: [],
};
