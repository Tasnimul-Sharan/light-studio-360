/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E2A44", // Midnight Navy
        // secondary: "#D4AF37", // Royal Gold
        secondary: "#d3ab64", // Royal Gold
        accent: "#4A90E2", // Electric Blue
        dark: "#0B0F14", // Charcoal Black
        light: "#F5F7FA", // Soft Pearl
      },
      // colors: {
      //   primary: "#FF6A00", // Orange
      //   secondary: "#FFC107", // Gold
      //   accent: "#2B2B2B", // Dark text
      //   light: "#F5F5F5",
      //   dark: "#000000",
      // },
    },
    keyframes: {
      ripple: {
        "0%": { boxShadow: "0 0 0 0 rgba(249, 155, 36, 0.6)" },
        "70%": { boxShadow: "0 0 0 30px rgba(249, 155, 36, 0)" },
        "100%": { boxShadow: "0 0 0 0 rgba(249, 155, 36, 0)" },
      },
    },
    animation: {
      ripple: "ripple 2s infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
