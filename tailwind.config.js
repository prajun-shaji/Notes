/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mcLaren: ["McLaren"],
        monstserrat: ["Montserrat"],
      },
      colors: {
        gray: { 1: "#ccc", 2: "#eee", 3: "#f5f5f5" },
        gold: "#f5ba13",
      },
    },
  },
  plugins: [],
};
