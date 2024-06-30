/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: { 100: "#8c8c8c", 200: "hsl(0, 0%, 41%)" },
      },
    },
    screens: {
      xsm: "300px",
      sm: "600px",
      md: "800px",
      lg: "1000px",
    },
  },
  plugins: [],
};
