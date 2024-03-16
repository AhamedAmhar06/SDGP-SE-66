/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
   fontFamily:{
     display:["Helvetica"],
   },

   extend: {
     colors:{
       NavBlue: "#052565",
       background:"#EEEEEE",
       brightBackground: "#FDF8EE",
       brightGreen: "#539165",
       lightText: "#959595",
      customColor: '#dde6ed',
       

     },
   },
 },
 plugins: [],
}

