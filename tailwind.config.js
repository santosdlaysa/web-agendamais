/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1d4ed8', // blue-700
        secondary: '#4f46e5', // indigo-600
        accent: '#059669', // emerald-600
        darkbg: '#0f172a', // slate-900
      }
    },
  },
  plugins: [],
}
