/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "shadow": "rgba(0, 0, 0, 0.10)",
        "shadow-light": "rgba(255, 255, 255, 0.10)",
        "purple-gradiant-light": "rgba(78, 101, 253, 0.70)",
        "purple-gradiant-medium": "rgba(57, 72, 175, 0.70)",
        "pink-gradiant-light": "rgba(51, 154, 252, 0.70)",
        "pink-gradiant-medium": "rgba(157, 91, 224, 0.70)",
        "purple-light": "#4E65FD",
        "purple-medium": "#3948AF",
        "blue": "#5AB0E3",

      },
    },
  },
  plugins: [],
};
