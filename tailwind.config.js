/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-hedvig)', 'serif'],
        sans: ['var(--font-nunito-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 