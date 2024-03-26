import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#253247",
        "background-hover": "#39537b",
        "background-dark": "#1c2a3f",
        "text": "#e4dbd8",
      },
      fontFamily: {
        roboto : ['var(--font-roboto)'],
      },
      keyframes: {
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeout: 'fadeout 2.2s forwards',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
