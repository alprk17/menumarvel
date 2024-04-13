/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1865e4",
        stableLight: "#ffffff",
      },
      backgroundColor: {
        primary: "#1865e4",
        secondary: "#1b1b1b",
        stableLight: "#ffffff",
      },
      borderColor: {
        primary: "#1865e4",
        secondary: "#1b1b1b",
      },
      boxShadow: {
        primaryShadow: "0 4px 4px rgba(0, 0, 0, .25)",
      },
    },
  },
  plugins: [],
};
