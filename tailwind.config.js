/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customDark: {
          "primary": "#ffffff",        // white text / main elements
          "secondary": "#a0a0a0",      // grey stays the same
          "accent": "#000000",         // black elements/buttons
          "neutral": "#111111",        // background for cards
          "base-100": "#000000",       // main page background
          "base-200": "#1c1c1c",       // card backgrounds / subtle contrast
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "light",   // keep your default light theme
    ],
  },
};