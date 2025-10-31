/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tema Claro
        light: {
          bg: '#f8fafc',
          text: '#0f172a',
          accent: '#0369a1',
          border: '#cbd5e1',
        },
        // Tema Oscuro
        dark: {
          bg: '#0f172a',
          text: '#f1f5f9',
          accent: '#38bdf8',
          border: '#334155',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
