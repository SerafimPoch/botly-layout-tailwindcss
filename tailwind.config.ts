import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "purple-light": "#382D52",
      },
      padding: {
        "40px": "40px 48px",
      },
      fontSize: {
        "2.5xl": "28px",
        xsLarge: "16px",
      },
      fontFamily: {
        lilita: ['"Lilita One"', "sans-serif"],
        monts: ["Montserrat", "sans-serif"],
      },
      width: {
        "147px": "147px",
      },
      height: {
        "48px": "48px",
      },
      colors: {
        creamy: "#ECEAF0",
      },
    },
  },
  plugins: [],
};
export default config;
