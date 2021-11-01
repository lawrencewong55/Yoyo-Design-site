module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      spacing: {
        '18': '4.5rem',
        '86': '22.5rem',
        '64.5': '16.25rem',
      }
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};