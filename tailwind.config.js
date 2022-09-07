/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#A14807",
        grey: "#1D1B1B",
        light_grey: "#E5E5E5",
        white: "#FBFBFB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
