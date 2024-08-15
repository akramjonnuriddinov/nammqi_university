/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#07294d',
        orange: '#EF6838'
      },
      fontFamily: {
        font1: ['DM Sans', 'Bricolage Grotesque', 'sans-serif'],
        font2: ['Bricolage Grotesque', 'DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
