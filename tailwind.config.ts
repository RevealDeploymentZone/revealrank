import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rr-green": "#16BC4E",
        "rr-pink": "#BF249A",
        "rr-blue": "#4361ee",
        "rr-orange": "#ff531a",
        "rr-purple": "#933ceb",
        "rr-yellow": "#ff9f1c",
        "rr-white": "#ffffff",
        "rr-black": "#101010",
        "rr-black-medium": "#181A1B",
        "rr-black-light": "#1F2122",
        "rr-light": "#f5f6f9",
        "rr-border": "#2a2a2a",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      maxWidth: {
        container: "1680px",
        narrow: "1000px",
      },
    },
  },
  plugins: [],
};

export default config;
