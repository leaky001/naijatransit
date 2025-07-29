// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009FE3',      // Rich Sky Blue
        success: '#00B96F',      // Transport Green
        warning: '#FF8C42',      // Orange
        danger: '#D72638',       // Deep Red
        textDark: '#1F1F1F',     // Eerie Black
        background: '#FAFAFA',   // Light Background
      },
    },
  },
  plugins: [],
}
