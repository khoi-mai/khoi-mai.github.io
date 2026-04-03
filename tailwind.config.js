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
          "accent": "#000000",         // black elements
          "neutral": "#111111",        // black background for cards
          "base-100": "#000000",       // black background for page
          "base-200": "#1c1c1c",       // slightly lighter for cards if needed
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "light",   // keep the default light theme as well
    ],
  },
};