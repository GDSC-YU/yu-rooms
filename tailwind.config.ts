import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* yu colors */
        "yu-orange-dark": "#f68939",
        /* google colors */
        "google-blue": "#5C9EFF",
        "google-red": "#F25C4E",
        "google-yellow": "#FFC247",
        "google-green": "#33C075",
      },
    },
  },
  plugins: [],
};
export default config;
