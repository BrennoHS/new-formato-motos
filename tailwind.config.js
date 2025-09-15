/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    dropShadow: {
        'green-glow': '0 0 6px rgba(142, 197, 77, 0.7)', // #8ec54d com 70% de opacidade
        'green-glow-lg': '0 0 6px rgba(142, 197, 77, 0.8)',
  } 
   }
    },
  plugins: [],
}