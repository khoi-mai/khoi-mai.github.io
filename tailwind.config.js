// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customDark: {
          "primary": "#ffffff",        // text / accent
          "secondary": "#999999",      // secondary text / accents
          "accent": "#ffffff",
          "neutral": "#1a1a1a",
          "base-100": "#000000",       // page background → pitch black
          "base-200": "#111111",       // slightly lighter backgrounds
          "base-300": "#222222",       // cards / panels
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
          "base-content": "#ffffff",   // text color
        },
      },
      "light",
    ],
  },
};