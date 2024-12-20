/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the paths to your HTML and JS/TS files
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        blink: 'blink 3s infinite', // Add the blinking animation
      },
      keyframes: {
        blink: {
          '0%, 100%': { color: '#040273' }, // Start and end with blue color
          '5%': { color: 'orange' },    // Switch to orange in the middle
          '30%': { color: '#040273' }, // Start and end with blue color
          '55%': { color: 'orange' },    // Switch to orange in the middle
        },
      },
    },
  },
  plugins: [],
};
