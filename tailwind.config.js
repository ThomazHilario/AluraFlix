/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        banner:'inset 0px 0px 200px #001270'
      }
    },
  },
  plugins: [],
}

