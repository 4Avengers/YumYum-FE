/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        config: {
          btn: "#F0F0F0",
          blue: "#5192EE",
          hoverBlue: "#126ded",
          red: "#E74E42",
          hoverRed: "#e52012",
        },
        star: {
          200: "#F4CD24",
        },
      },
      screens: {
        sm: "480px",
        md: "640px",
        nm: "1070px",
        lg: "1440px",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
