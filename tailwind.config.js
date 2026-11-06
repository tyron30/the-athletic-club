/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000", // primary background
        charcoal: "#111111", // secondary background
        accent: "#FFD000", // Athletic Yellow
        muted: "#BDBDBD", // secondary text
      },
      fontFamily: {
        display: ['"Anton"', "Impact", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        athletic: "0.02em",
      },
    },
  },
  plugins: [],
};
