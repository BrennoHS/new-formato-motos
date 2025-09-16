/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
    colors: {
        "soft-green": "#A3D068",
        "dark-green": "#6F9E3C",
        "off-white": "#FAFAFA",
    },
    dropShadow: {
        'green-glow': '0 0 6px rgba(142, 197, 77, 0.7)', // #8ec54d com 70% de opacidade
        'green-glow-lg': '0 0 6px rgba(142, 197, 77, 0.8)',
    },
    boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.1)",
    }, 
    spacing: {
        18: "4.5rem",
        28: "7rem",
    },
    fontSize: {
        "5xl": "3rem",
    },
    borderRadius: {
        xl: "1rem",
    },
   },
  },
  plugins: [],
};