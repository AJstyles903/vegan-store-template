/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       scale: {
        '135': '1.35',
      },
      colors: {
        'light-pink': "#f69dad",
        'light-gray': "#e5e6ec",
      },
      zIndex: {
        '1': '1',
      }
    },
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      caveat: 'Caveat Rg',
    }
  },
  plugins: [],
}

