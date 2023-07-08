/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
      colors: {
        "astro-purple": {
          DEFAULT: "#6C2BD9",
          50: "#A885F5",
          100: "#977AF2",
          200: "#815DF1",
          300: "#6C2BD9",
          400: "#581AC3",
          500: "#44109D",
          600: "#300577",
          700: "#1C0151",
          800: "#08002B",
          900: "#000004",
        },
        "astro-blue": {
          DEFAULT: "#23458F",
          50: "#90A9F4",
          100: "#7A9EF2",
          200: "#638DF2",
          300: "#4D7BF1",
          400: "#3564D1",
          500: "#23458F",
          600: "#10264C",
          700: "#000709",
          800: "#000000",
          900: "#000000",
        },
        "astro-red": {
          DEFAULT: "#9F1239",
          50: "#F48C8C",
          100: "#F47676",
          200: "#F35F5F",
          300: "#F14848",
          400: "#DE2231",
          500: "#B31C2B",
          600: "#881624",
          700: "#5C0F1D",
          800: "#310916",
          900: "#05020F",
        },
        "astro-yellow": {
          DEFAULT: "#B58900",
          50: "#FFE88D",
          100: "#FFDF70",
          200: "#FFD654",
          300: "#FFCD38",
          400: "#FBB61C",
          500: "#D99E00",
          600: "#B58300",
          700: "#916900",
          800: "#6D4E00",
          900: "#493300",
        },
        "astro-gray": {
          DEFAULT: "#333333",
          50: "#858585",
          100: "#787878",
          200: "#6B6B6B",
          300: "#5E5E5E",
          400: "#515151",
          500: "#444444",
          600: "#373737",
          700: "#2A2A2A",
          800: "#1D1D1D",
          900: "#101010",
        },
      },
      boxShadow: {
        "primary-shadow":
          "0 10px 15px -3px rgba(124, 58, 237, 0.1), 0 4px 6px -2px rgba(124, 58, 237, 0.05)",
        "accent-shadow":
          "0 10px 15px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -2px rgba(37, 99, 235, 0.05)",
        "warning-shadow":
          "0 10px 15px -3px rgba(242, 153, 74, 0.1), 0 4px 6px -2px rgba(242, 153, 74, 0.05)",
        "success-shadow":
          "0 10px 15px -3px rgba(5, 150, 105, 0.1), 0 4px 6px -2px rgba(5, 150, 105, 0.05)",
      },
    },
  },
  plugins: [],
};
