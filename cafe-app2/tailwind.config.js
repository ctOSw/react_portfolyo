/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
        firaSans: ["Fira Sans", "sans-serif"],
        libreFranklin: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
