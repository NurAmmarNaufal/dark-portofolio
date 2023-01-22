/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Fira-code': 'Fira Code'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}