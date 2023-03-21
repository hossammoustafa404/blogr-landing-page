/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "767px",
      },
      colors: {
        lightWhite: "#ffd4d0",
        heavyWhite: "#ffffff",
      },
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
        Overpass: "'Overpass', sans-serif;",
      },
      fontSize: {
        h1: "2.2rem",
        h2: "1.6em",
        h3: "1.2rem",
        h4: "0.9rem",
        h5: "0.8rem",
      },
      backgroundImage: {
        heroDesk: "url('../public/imgs/bg-pattern-intro-desktop.svg')",
        heroMob: "url('../public/imgs/bg-pattern-intro-mobile.svg')",
      },
    },
  },
  plugins: [],
};
