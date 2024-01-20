/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "cream":"rgba(250,230,213,0.7)",
        "darkcream":"rgba(218, 174, 135, 0.7);"
      }
 
    },
  },
  plugins: [],
}

