/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.indigo, // Yeh professional aur deep color hai
      secondary: colors.teal, // Yeh fresh aur friendly feel deta hai
      accent: colors.amber, // Yeh eye-catching aur warm color hai
      neutral: colors.gray, // Yeh neutral shades hain jo portfolio ko clean look dete hain
    },
  },
  plugins: [],
};