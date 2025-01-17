const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "5xl": "3.5rem",
      },
      lineHeight: {
        headlines: "1.2",
      },
      colors: {
        dark: "#000",
      },
      minHeight: {
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
};
