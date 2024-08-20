/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        merienda: ['Merienda', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'blusish':"#0f172b",
         'trans' :'#f9fafa'
      },
      screens: {
        'xs': '345px', // Custom breakpoint
        
      },
    },
  },
  plugins: [],
}
