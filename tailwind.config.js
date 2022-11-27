/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'custom': '0px 0px 5px 5px #e4e4e4',
        'nav-shadow':'0px 3px 5px 0px rgba(0, 0, 0, 0.49)'
      },
      colors:{
        'custombrown':'#555b61',
        'customgreen':'#146046'
      },
      backgroundImage:{
        'login-image':'linear-gradient(rgba(0,1,0, 0.5),rgba(0,4,0, 0.5)), url("../src/assets/images/pexels-monstera-6281709.jpg")'
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
