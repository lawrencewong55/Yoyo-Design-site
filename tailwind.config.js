module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    scale:{
      '-100': '-1'
    },

    rotate: {
      '-360': '-360deg'},

    backgroundColor: theme => ({
      ...theme('colors'),
      'blackGrey': '#1f1f1f',}),
    
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