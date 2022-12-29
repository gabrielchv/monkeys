/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        font: '#1A0000',
        mainbg: '#F5EDCE',
        pgbColor: '#58287F',
        mnkButton: '#89C4E1',
        mnkButtonHover: '#5c9cbd',
        mnkButtonClick: '#356278',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
