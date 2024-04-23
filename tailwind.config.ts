import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0099ff",

          secondary: "#008300",

          accent: "#f07b00",

          neutral: "#030503",

          "base-100": "#ffffff",

          info: "#006ddd",

          success: "#009857",

          warning: "#fabf00",

          error: "#ff4966",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
