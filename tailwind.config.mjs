/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "light-green": "#C6EDDB",
        "light-red": "#F6D4D8",
        "sub-red": "#C7243A",
        "theme-emerald": "#5EC84E",
        "theme-green": "#009250",
        "theme-red": "#A00E0E",
        "theme-yellow": "#F0BA32",
      },
    },
  },
};

export default config;
