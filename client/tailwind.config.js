/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/src/images/bg.jpg')",
        boardBg: "url('/src/images/boardBg.jpg')",
      },
    },
  },
  plugins: [],
};
