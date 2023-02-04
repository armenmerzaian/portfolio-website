/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3CCADD",
        secondary: "#C678DD",
        tertiary: "#E06C75",
        background: "#15181E",
        surface: "#2A303C",
      },

      fontFamily: {
        primary: ["Mulish", "sans-serif"],
        secondary: ["Indie Flower", "cursive"],
        tertiary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

