/** @type {import('tailwindcss').Config} */
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
      colors: {
        "purple-gradiant-light": "rgba(78, 101, 253, 0.70)",
        "purple-gradiant-medium": "rgba(57, 72, 175, 0.70)",
        "purple-light": "#4E65FD",
        "purple-medium": "#3948AF",
        "blue-gradiant-light": "rgba(51, 154, 252, 0.70)",
        "blue-light": "#6FD4FF",
        "blue-medium": "#5AB0E3",
        "pink-gradiant-medium": "rgba(157, 91, 224, 0.70)",
        "pink-light": "#FF92F4",
        "gray-gradient-light": "rgba(255, 255, 255, 0.48)",
        "gray-gradient-base": "rgba(255, 255, 255, 0.30)",
        "gray-gradient-medium": "rgba(255, 255, 255, 0.20)",
        "gray-gradient-normal": "rgba(255, 255, 255, 0.10)",
        "gray-gradient-dark": "rgba(0, 0, 0, 0.10)",
        "gray-light": "#D2D1D9",
        "gray-dark": "#0D1219",
        "white-light": "#ECEEF1",
        "green-light": "#63EACF",
        "yellow-light": "#FEE148",
      },
    },
  },
  plugins: [],
};
