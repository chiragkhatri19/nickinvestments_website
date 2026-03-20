/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#002147',
          deep: '#000a1e',
          light: '#003366',
        },
        orange: {
          DEFAULT: '#E67E22',
          dark: '#944a00',
          light: '#fc8f34',
        },
        surface: {
          low: '#f3f4f5',
          lowest: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
