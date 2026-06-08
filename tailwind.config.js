/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f3',
          100: '#d8ede2',
          200: '#b4dbc8',
          300: '#82c1a5',
          400: '#4ea07f',
          500: '#2d7f61',
          600: '#1f644d',
          700: '#1a503f',
          800: '#174032',
          DEFAULT: '#234236',
          900: '#234236',
          950: '#0e2119',
        },
        cream: '#FAF6EE',
        sand: '#E8DDC7',
        orange: {
          DEFAULT: '#C96A2B',
          light: '#E07C38',
          dark: '#A85520',
        },
        charcoal: '#2A2A2A',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
