// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // ✅ important
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customDark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"], // start from dark
          "base-100": "#000000", // pitch black background
          "base-content": "#ffffff", // white text
        },
      },
    ],
  },
};