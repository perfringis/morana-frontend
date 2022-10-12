/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        turquoise: {
          0: "#56F2C3",
          10: "#38f0b8",
          20: "#19edad",
          30: "#10d59a",
          40: "#0eb784",
          50: "#0c986e",
        },
        fiery_rose: {
          0: "#FF6370",
          10: "#ff4050",
          20: "#ff1c2f",
          30: "#f80015",
          40: "#d40012",
          50: "#b1000f",
        },
        dark_gunmetal: "#1E1D2B",
        roman_silver: "#8D8D9C",
        white_custom: "#FEFEFE",
        charleston_green: "#252736",
        onyx: "#353648",
      },
    },
  },
  plugins: [],
};
