/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

   
    extend: {

      backgroundsize: {

        '100%': '100% 300px' 
      
      },
     
      

      backgroundImage: {
        'darkImg': "url('./images/bg-mobile-dark.jpg')",
        'lightImg': "url('./images/bg-mobile-light.jpg')",
        'darkDesk': "url('./images/bg-desktop-dark.jpg')",
        'lightDesk': "url('./images/bg-desktop-light.jpg')",


      },

      backgroundColor: {

        blackColor : "rgba(23, 24, 35, 1)",
        white : "rgba(250, 250, 250, 1)"
      }
    },
  },
  plugins: [],
}

