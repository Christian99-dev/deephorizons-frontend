import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        open: {
          "0%": { gridTemplateRows: "0fr" },
          "100%": { gridTemplateRows: "1fr" },
        },
        fadeInLeft: {
          "0%": { transform: "translateX(-200px)", opacity: "0" },
          "100%": { transform: "translate3d(0px, 0px, 0px)", opacity: "1" },
        },
        fadeInLeftHard: {
          "0%": { transform: "translateX(-2000px)", opacity: "0" },
          "100%": { transform: "translate3d(0px, 0px, 0px)", opacity: "1" },
        },
        fadeInRight: {
          "0%": { transform: "translateX(200px)", opacity: "0" },
          "100%": { transform: "translate3d(0px, 0px, 0px)", opacity: "1" },
        },
        fadeInTop: {
          "0%": { transform: "translateY(-200px)", opacity: "0" },
          "100%": { transform: "translate3d(0px, 0px, 0px)", opacity: "1" },
        },
        fadeInBottom: {
          "0%": { transform: "translateX(200px)", opacity: "0" },
          "100%": { transform: "translate3d(0px, 0px, 0px)", opacity: "1" },
        },
      },
      animation: {
        open: "open 1.5s cubic-bezier(.25,.81,.52,1)",
        fadeInLeft: "fadeInLeft 1s cubic-bezier(.25,.81,.52,1)",
        fadeInLeftHard: "fadeInLeftHard 1s cubic-bezier(.25,.81,.52,1)",
        fadeInRight: "fadeInRight 1s cubic-bezier(.25,.81,.52,1)",
        fadeInTop: "fadeInTop 1s cubic-bezier(.25,.81,.52,1)",
        fadeInBottom: "fadeInBottom 1s cubic-bezier(.25,.81,.52,1)",
      },
    },
    screens: {
      "4xl": { min: "1921px" },
      "3xl": { max: "1921px" },
      "2xl": { max: "1536px" },
      xl: { max: "1380px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "410px" },
    },
  },
};
export default config;
