/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gray:{
        800:"#1f2937",
        900 :"#1f2937"
    }, 
    blue :{
      400 : "#2563eb" ,
      500 :"#3b82f6"
    } ,
  },
  plugins: [],
}

}