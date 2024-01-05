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
        purple: "#5D74F1",
      },
      borderWidth: {
        "10": "10px",
        "5": "5px",
      },
      padding: {
        "40px": "40px 48px",
        membership: "24px 16px 24px 32px",
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
        "purple-gray": "#3F3655",
        "custom-green": "#349264",
      },
      borderColor: {
        "custom-green": "#349264",
      },
      gridTemplateColumns: {
        "custom-2": "repeat(2, minmax(450px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
