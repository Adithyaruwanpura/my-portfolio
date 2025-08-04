/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: 'class', // ✅ Enable class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        bgNavy: "#0A0A23",
        primaryBlue: "#024CAA",
        secondaryBlue: "#1679F0",
        neon: "#00D8FF",
        textMain: "#EDEDED",
        titleText: "#FFFFFF",
        hoverBlue: "#036FE3",
        divider: "#2C2F40",
      },
      fontFamily: {
        sans: ["Poppins", "var(--font-geist-sans)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
