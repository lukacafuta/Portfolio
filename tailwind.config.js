/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark-brown": "#1A0D01",
      },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

