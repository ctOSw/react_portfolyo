/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libertinus: ["Libertinus Serif Display"],
        firaSans: ["Fira Sans", "sans-serif"],
        shareTech: ["Share Tech", "sans-serif"],
      },
    },
  },
  plugins: [],
};
