/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1F44',
          royal: '#1A4DB0',
          gold: '#C9A84C',
          goldLight: '#F0D080',
          white: '#FFFFFF',
          offwhite: '#F7F8FC',
          grey: '#E8ECF4',
          greyText: '#6B7A99',
          dark: '#0D1B2A',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
