import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "underline-color": "#738FFF",
      "btn": "#2C9CF0",

      "dark-card-text" : "#DFDFDF",
      "light-card-text" : "#3B3E47",

      "dark-text" : "white",
      "light-text": "#000000",

      "dark-bg": "#292B32",
      "light-bg" : "#F7F7F8",


      "dark-card-bg" : "#3b3e47",
      "light-card-bg": "#FFFFFF",

      "dark-btn" : "#000000",
      "light-btn" : "#1d1d1f",

      "dark-card-detail": "#292B32",
      "light-card-detail": "#F7F7F8",
  
      "linear-color": "#18282A",
      "light-linear-color" :"#F9F8FF",

      "linear-color-2": "#221A2C",
      "light-linear-color-2" :"#F3F9FF",

      "light-green" :"#006555",
    },
    extend: {
      backgroundImage: {
        "dark-radial": "radial-gradient(circle, #221a2c 72%, transparent 72%),linear-gradient(#3b3e47, #3b3e47),radial-gradient(circle, #221a2c 72%, transparent 72%)",
        "light-radial": "radial-gradient(circle, #e4e6ed 72%, transparent 72%),linear-gradient(#FFFFFF, #FFFFFF),radial-gradient(circle, #e4e6ed 72%, transparent 72%)",
        "dark-dashed": `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='white' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        "light-dashed": `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
      },
    },
  },
  plugins: [],
};
export default config;
