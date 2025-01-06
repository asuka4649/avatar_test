/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // If using traditional Expo (App.js and component files)
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    // If you have additional folders or use Expo Router:
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
