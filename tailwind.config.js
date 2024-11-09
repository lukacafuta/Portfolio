/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enable class-based dark mode
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark-chocolate-brown": "#1F1104",
        "custom-milk-chocolate-brown": "#522D0C",
        "custom-light-chocolate-brown": "#F5E7DA",
      },
        fontFamily: {
            inter: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}

