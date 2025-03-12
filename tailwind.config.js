/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem 2rem",
      },
      boxShadow: {
        retro: "5px 5px 0px  #cb5331",
      },
      colors: {
        retroBeige: "#f7e1c3",
        retroYellow: "#E1A95F",
        retroRed: "#cb5331",
      },
      fontFamily: {
        funky: ["Petrona", "cursive", "fantasy"],
      },
    },
  },
  plugins: [],
};
