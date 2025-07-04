/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src folder
    "./public/index.html",        // Include the main HTML file in public folder
  ],
  theme: {
    extend: {}, // Customize theme if needed
  },
  plugins: [], // Add plugins here if required
};
