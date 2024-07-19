/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5C64B0",
        dark: "#353437",
        light: "#5D5D5F",
        darkLight: "#ffffff99",
        darkBorder: "#EBEBEB",
        darkContent: "#020105",
      },
    },
  },
  plugins: [],
};
