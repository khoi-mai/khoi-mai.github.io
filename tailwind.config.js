// tailwind.config.js
module.exports = {
  darkMode: ["class", '[data-theme="customDark"]'], // <-- this is critical
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customDark: {
          "primary": "#fff",        // text
          "secondary": "#999",      // gray stays same
          "base-100": "#000",       // background pitch black
          "base-200": "#111",       // slightly lighter bg for cards
          "base-content": "#fff",   // default text
          "neutral": "#222",
          "accent": "#f0f",         // example accent
          // ... add other tokens if needed
        },
      },
    ],
  },
};