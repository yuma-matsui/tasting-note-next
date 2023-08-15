import { withTV } from "tailwind-variants/transformer";

/** @type {import('tailwindcss').Config} */
const config = withTV({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          error: "#A00E0E",
          primary: "#3b82f6",
          success: "#009250",
          warning: "#F0BA32",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      colors: {
        "light-green": "#C6EDDB",
        "light-red": "#F6D4D8",
        "theme-emerald": "#5EC84E",
        "theme-green": "#009250",
        "theme-red": "#A00E0E",
        "theme-yellow": "#F0BA32",
      },
      spacing: {
        162: "648px",
      },
    },
  },
});

export default config;
