/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    daisyui: {
      themes: ["light", ],
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  // plugins: [require("tailwindcss-animate",'daisyui')],
}