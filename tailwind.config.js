/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sofia Sans", 'sans-serif']
      },
      colors: {
        bgMain: '#1e1e1e',
        primary: '#BAC1CC',
        secondary: '#2B2C36',
        hover: '#34C4F61A',
        border: '#47C2E92E',
        divider: '#BAC1CC1A'
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      }
    }
  },
  plugins: [],
}