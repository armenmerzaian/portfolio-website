/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1120px',
      // => @media (min-width: 1024px) { ... }
    },
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
        tertiary: ["Inter", "sans-serif"],
        other: ["Karma", "serif"],
      },
    },
  },
  plugins: [],
};

