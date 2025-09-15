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
        notoSans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        color1: "#37353E",
        color2: "#44444E",
        color3: "#EBCB90",
        color4: "#EEEEEE",
        "bgcolor-1": "#D3DAD9",
      },
    },
  },
  plugins: [],
};
