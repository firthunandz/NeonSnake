/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose': '#f72585ff',
        'fandango': '#b5179eff',
        'grape': '#7209b7ff',
        'chrysler-blue': '#560badff',
        'dark-blue': '#480ca8ff',
        'zaffre': '#3a0ca3ff',
        'palatinate-blue': '#3f37c9ff',
        'neon-blue': '#4361eeff',
        'chefchaouen-blue': '#4895efff',
        'vivid-sky-blue': '#4cc9f0ff',
        'background': '#1f0232',
      }
    },
  },
  plugins: [],
}

