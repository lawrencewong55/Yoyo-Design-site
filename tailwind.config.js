module.exports = {
  purge: ["./dist/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {

      screens: {
        'mobile': '375px',
      },

      backgroundColor: {
        blackGrey: "#1f1f1f",
      },

      spacing: {
        18: "4.5rem",
        86: "22.5rem",
        64.5: "16.25rem",
      },

      scale: {
        "-100": "-1",
      },

      rotate: {
        "-360": "-360deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '900px',
          },
        }
      })
    }
  ],
};
