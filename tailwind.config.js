// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors: {
//         "astro-purple": {
//           DEFAULT: "#6C2BD9",
//           50: "#A885F5",
//           100: "#977AF2",
//           200: "#815DF1",
//           300: "#6C2BD9",
//           400: "#581AC3",
//           500: "#44109D",
//           600: "#300577",
//           700: "#1C0151",
//           800: "#08002B",
//           900: "#000004",
//         },
//         "astro-blue": {
//           DEFAULT: "#23458F",
//           50: "#90A9F4",
//           100: "#7A9EF2",
//           200: "#638DF2",
//           300: "#4D7BF1",
//           400: "#3564D1",
//           500: "#23458F",
//           600: "#10264C",
//           700: "#000709",
//           800: "#000000",
//           900: "#000000",
//         },
//         "astro-red": {
//           DEFAULT: "#9F1239",
//           50: "#F48C8C",
//           100: "#F47676",
//           200: "#F35F5F",
//           300: "#F14848",
//           400: "#DE2231",
//           500: "#B31C2B",
//           600: "#881624",
//           700: "#5C0F1D",
//           800: "#310916",
//           900: "#05020F",
//         },
//         "astro-yellow": {
//           DEFAULT: "#B58900",
//           50: "#FFE88D",
//           100: "#FFDF70",
//           200: "#FFD654",
//           300: "#FFCD38",
//           400: "#FBB61C",
//           500: "#D99E00",
//           600: "#B58300",
//           700: "#916900",
//           800: "#6D4E00",
//           900: "#493300",
//         },
//         "astro-gray": {
//           DEFAULT: "#333333",
//           50: "#858585",
//           100: "#787878",
//           200: "#6B6B6B",
//           300: "#5E5E5E",
//           400: "#515151",
//           500: "#444444",
//           600: "#373737",
//           700: "#2A2A2A",
//           800: "#1D1D1D",
//           900: "#101010",
//         },
//       },
//       boxShadow: {
//         "primary-shadow":
//           "0 10px 15px -3px rgba(124, 58, 237, 0.1), 0 4px 6px -2px rgba(124, 58, 237, 0.05)",
//         "accent-shadow":
//           "0 10px 15px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -2px rgba(37, 99, 235, 0.05)",
//         "warning-shadow":
//           "0 10px 15px -3px rgba(242, 153, 74, 0.1), 0 4px 6px -2px rgba(242, 153, 74, 0.05)",
//         "success-shadow":
//           "0 10px 15px -3px rgba(5, 150, 105, 0.1), 0 4px 6px -2px rgba(5, 150, 105, 0.05)",
//       },
//     },
//   },
//   plugins: [],
// };

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
        space: {
          darkest: "#080819", // almost black, for your main background
          dark: "#151a30", // deep blue, for secondary elements or components
          medium: "#242c45", // slightly lighter blue, for tertiary elements
          light: "#384670", // even lighter blue, for outlines or less important elements
          bright: "#6c72cf", // bright blue, for highlights or call to action elements
          neon: "#c3c8ff", // neon color for very important elements, call to action, or notifications
          purple: "#6c4579", // for small accents, as a contrasting color
        },
        white: {
          pure: "#ffffff", // for important text
          alpha50: "rgba(255, 255, 255, 0.5)", // for secondary text or overlays
          alpha30: "rgba(255, 255, 255, 0.3)", // for tertiary text or overlays
        },
      },
      "astro-purple": {
        DEFAULT: "#E640E0",
        50: "#F49EF4",
        100: "#F18CF1",
        200: "#ED7AED",
        300: "#E640E0",
        400: "#D51FD5",
        500: "#BA0DBA",
        600: "#9C009C",
        700: "#7D007D",
        800: "#5F005F",
        900: "#400040",
      },
      "astro-blue": {
        DEFAULT: "#030338",
        50: "#4C4CA5",
        100: "#4545A0",
        200: "#3D3D9B",
        300: "#343496",
        400: "#2C2C91",
        500: "#23238C",
        600: "#1B1B87",
        700: "#121282",
        800: "#0A0A7D",
        900: "#010178",
      },
      "astro-red": {
        DEFAULT: "#FF3366",
        50: "#FF99B3",
        100: "#FF8FAE",
        200: "#FF84A8",
        300: "#FF7AA3",
        400: "#FF6F9D",
        500: "#FF6598",
        600: "#FF5B93",
        700: "#FF509D",
        800: "#FF4698",
        900: "#FF3B92",
      },
      "astro-yellow": {
        DEFAULT: "#FFB800",
        50: "#FFED99",
        100: "#FFE78F",
        200: "#FFE285",
        300: "#FFDD7A",
        400: "#FFD870",
        500: "#FFD266",
        600: "#FFCC5C",
        700: "#FFC652",
        800: "#FFC048",
        900: "#FFBB3E",
      },
      "astro-pink": {
        DEFAULT: "#FF0080",
        50: "#FF80BF",
        100: "#FF77B7",
        200: "#FF6DAE",
        300: "#FF63A6",
        400: "#FF599D",
        500: "#FF4F94",
        600: "#FF458C",
        700: "#FF3B83",
        800: "#FF317B",
        900: "#FF2772",
      },
      "astro-gray": {
        DEFAULT: "#F9F9F9",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#F9F9F9",
        600: "#ECECEC",
        700: "#DFDFDF",
        800: "#D2D2D2",
        900: "#C5C5C5",
      },
      "astro-white": {
        DEFAULT: "#FFFFFF",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#FFFFFF",
        600: "#F9F9F9",
        700: "#ECECEC",
        800: "#DFDFDF",
        900: "#D2D2D2",
      },
    },
    boxShadow: {
      "primary-shadow":
        "0 10px 15px -3px rgba(230, 64, 224, 0.1), 0 4px 6px -2px rgba(230, 64, 224, 0.05)",
      "accent-shadow":
        "0 10px 15px -3px rgba(3, 3, 56, 0.1), 0 4px 6px -2px rgba(3, 3, 56, 0.05)",
      "warning-shadow":
        "0 10px 15px -3px rgba(255, 51, 102, 0.1), 0 4px 6px -2px rgba(255, 51, 102, 0.05)",
      "success-shadow":
        "0 10px 15px -3px rgba(255, 184, 0, 0.1), 0 4px 6px -2px rgba(255, 184, 0, 0.05)",
    },
  },

  plugins: [],
};
