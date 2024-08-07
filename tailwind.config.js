/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        font1: ['DM Sans', 'Bricolage Grotesque', 'sans-serif'],
        font2: ['Bricolage Grotesque', 'DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
