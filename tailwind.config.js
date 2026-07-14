/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#245F61", // primary brand
          deep: "#1A4547",
        },
        gold: {
          DEFAULT: "#A99A78", // muted gold/bronze accent
          soft: "rgba(169,154,120,0.35)",
        },
        parchment: "#EBE6DC", // warm alabaster background
        ink: "#1C2B2B",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        authority: "0 10px 26px rgba(36,95,97,0.28)",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 42s linear infinite",
      },
    },
  },
  plugins: [],
};
