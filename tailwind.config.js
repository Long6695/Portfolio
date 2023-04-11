/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        transition: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(15px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        scale: "scale 2s linear infinite",
        transition: "transition 2s linear infinite",
      },
    },
  },
  plugins: [],
};
