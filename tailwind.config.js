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
        light: {
          "astro-purple": {
            DEFAULT: "#D6BCFA",
            100: "#E0C5FD",
            200: "#EACEFE",
            300: "#F4D7FF",
            400: "#FEE0FF",
            500: "#FFE9FF",
            600: "#FFF2FF",
            700: "#FFFBFF",
            800: "#FFFFFF",
            900: "#FFFFFF",
          },
          "astro-blue": {
            DEFAULT: "#A4BDFC",
            100: "#AFC8FD",
            200: "#BAD3FE",
            300: "#C5DEFF",
            400: "#D0E9FF",
            500: "#DBF4FF",
            600: "#E6FFFF",
            700: "#F1FFFF",
            800: "#FCFFFF",
            900: "#FFFFFF",
          },
          "astro-red": {
            DEFAULT: "#FF5A5F",
            100: "#FF6469",
            200: "#FF6E73",
            300: "#FF787D",
            400: "#FF8287",
            500: "#FF8C91",
            600: "#FF969B",
            700: "#FFA0A5",
            800: "#FFAAAA",
            900: "#FFB4B4",
          },
          "astro-yellow": {
            DEFAULT: "#FFAA5C",
            100: "#FFB466",
            200: "#FFBE70",
            300: "#FFC87A",
            400: "#FFD284",
            500: "#FFDC8E",
            600: "#FFE698",
            700: "#FFF0A2",
            800: "#FFF9AC",
            900: "#FFFFFF",
          },
          "astro-gray": {
            DEFAULT: "#D3D3D3",
            100: "#DDDDDD",
            200: "#E7E7E7",
            300: "#F1F1F1",
            400: "#FBFBFB",
            500: "#FFFFFF",
            600: "#FFFFFF",
            700: "#FFFFFF",
            800: "#FFFFFF",
            900: "#FFFFFF",
          },
        },
        dark: {
          "astro-purple": {
            DEFAULT: "#7C3AED",
            100: "#8F48F0",
            200: "#A256F3",
            300: "#B464F5",
            400: "#C672F8",
            500: "#D980FA",
            600: "#EC8EFD",
            700: "#FF9CFF",
            800: "#FFA6FF",
            900: "#FFB0FF",
          },
          "astro-blue": {
            DEFAULT: "#2563EB",
            100: "#377BFA",
            200: "#4893F9",
            300: "#59ABF8",
            400: "#6AC3F7",
            500: "#7BDBF6",
            600: "#8CF3F5",
            700: "#9DFBF4",
            800: "#AEE3F3",
            900: "#BFEAF2",
          },
          "astro-red": {
            DEFAULT: "#EB5757",
            100: "#F16363",
            200: "#F77070",
            300: "#FD7D7D",
            400: "#FF8A8A",
            500: "#FF9797",
            600: "#FFA4A4",
            700: "#FFB1B1",
            800: "#FFBEBE",
            900: "#FFCBCB",
          },
          "astro-yellow": {
            DEFAULT: "#F2994A",
            100: "#F3A155",
            200: "#F4A960",
            300: "#F5B16B",
            400: "#F6B976",
            500: "#F8C081",
            600: "#F9C78C",
            700: "#FACD97",
            800: "#FBD4A2",
            900: "#FCDAAE",
          },
          "astro-gray": {
            DEFAULT: "#828282",
            100: "#8C8C8C",
            200: "#969696",
            300: "#A0A0A0",
            400: "#ABABAB",
            500: "#B5B5B5",
            600: "#BFBFBF",
            700: "#C9C9C9",
            800: "#D3D3D3",
            900: "#DEDEDE",
          },
        },
      },
    },
  },
  plugins: [],
};
