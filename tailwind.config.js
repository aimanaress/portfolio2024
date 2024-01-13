/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue"],
      },
      screens: {
        tall: { raw: "(min-height: 500px)" },
        short: { raw: "(min-height: 10px)" },
      },
    },
  },
  plugins: [],
};
