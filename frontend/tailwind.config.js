/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: { 100: "#8c8c8c", 200: "hsl(0, 0%, 41%)" },
      },
    },
  },
  plugins: [],
};
