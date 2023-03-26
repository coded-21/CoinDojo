/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      colors : {
        'primary' : '#0d1117',
        'secondary' : '#ecf2f8',
        'teritiary' : '#161b22',
        'Mint' : '#3AB795',
        'Crayola' : '#EE4266',
      }
    },
  },
  plugins: [],
}
