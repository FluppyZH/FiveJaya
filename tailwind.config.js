/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0D1117', 
        'surface': '#161B22',    
        'primary': '#38BDF8',   
        'text-primary': '#E6EDF3',
        'text-secondary': '#8D96A0',
        'border': '#30363D',      
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(56, 189, 248, 0.4)',
        'glow-primary-hover': '0 0 25px rgba(56, 189, 248, 0.6)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}