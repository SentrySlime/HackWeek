/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes .tsx files
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "#FF5733",
        customBlue: "#33C1FF",
        customWhite: "#FFFFFF",
        customGrey: "#888888"
      },
    },
  },
  plugins: [],
}
