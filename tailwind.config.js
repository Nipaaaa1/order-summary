/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "pale-blue": "hsl(225, 100%, 94%)",
          "bright-blue": "hsl(245, 75%, 52%)",
        },
        neutral: {
          "very-pale-blue": "hsl(225, 100%, 98%)",
          "desaturated-blue": "hsl(224, 23%, 55%)",
          "dark-blue": "hsl(223, 47%, 23%)",
        },
      },
      fontFamily: {
        "red-hat-display": ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
