module.exports = {
  content: ["./client/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      caroni: ["caroni", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#BBCEDF",
        secondary: "#B9F0D5",
        accent: "#E4D7F7",
        neutral: "#BBCEDF",
        "base-100": "#ffffff",
      },
    },
      "cupcake"],
  },
};
