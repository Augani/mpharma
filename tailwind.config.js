module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '90vh': '90vh',
        '70': '70%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
