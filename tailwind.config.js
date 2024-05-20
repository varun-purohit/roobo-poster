/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%, 25%": { transform: "translateX(0)" },
          "30%, 50%": { transform: "translateX(-100%)" },
          "55%, 75%": { transform: "translateX(-200%)" },
          "80%, 100%": { transform: "translateX(-300%)" },
        },
      },
    },
  },
  plugins: [],
};
