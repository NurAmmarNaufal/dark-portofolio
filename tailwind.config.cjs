/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Fira-code": "Fira Code",
      },
      animation: {
        jalan: "jalan 3s linear",
        wave: "wave 2s ease-in-out infinite",
      },
      keyframes: {
        jalan: {
          "0%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(150px)" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
