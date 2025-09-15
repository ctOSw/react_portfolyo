/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        libertinus: ["Libertinus Serif Display"],
        firaSans: ["Fira Sans", "sans-serif"],
        shareTech: ["Share Tech", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
};
