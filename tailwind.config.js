/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {},
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFFFF",
          200: "#E5E5E5",
          300: "#E3E3E3",
          350: "#CCCCCC",
          400: "#C6C6C6",
          500: "#848484",
          600: "#333333",
          700: "#1E1E1E",
        },
      },
      screens: {
        sm: "480px",
        md: "640px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
