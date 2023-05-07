/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Fira-code': 'Fira Code'
      },
      animation: {
        'jalan': 'jalan 3s linear',
      },
      keyframes: {
        jalan: {
          '0%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(150px)' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}