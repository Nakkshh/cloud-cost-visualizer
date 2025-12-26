/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      colors: {
        dark: "#0a0a0a",
        neonBlue: "#00bfff",
        neonPurple: "#8000ff",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // ✅ keep forms
    // removed container-queries for now
  ],
};
