/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'power': "url(./assets/background.jpg)",
        'banner1': "url(./assets/banner1.jpg)"
      }
    },
    fontFamily: {
      signature: ["Great Vibes"]
    }  
  },
  plugins: [],
}

