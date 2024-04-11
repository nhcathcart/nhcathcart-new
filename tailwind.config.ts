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
        "accent": "#FFB3D9"
      },
      fontFamily: {
        oswald : ['var(--font-oswald)'],
      },
      keyframes: {
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeout: 'fadeout 1.5s forwards ease-in',
        fadein: 'fadein 1.5s forwards ease-in',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
