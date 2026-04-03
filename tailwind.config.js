/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // your source files
  ],
  darkMode: "class", // use class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", // keep the default light theme
      {
        customDark: {
          "primary": "#ffffff",      // white text
          "secondary": "#a0a0a0",    // gray (unchanged)
          "accent": "#f0f0f0",       // same accent
          "neutral": "#1a1a1a",      // darker neutral
          "base-100": "#000000",     // main background: pitch black
          "base-200": "#111111",     // slightly lighter black if needed
          "base-300": "#222222",     // slightly lighter black if needed
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};