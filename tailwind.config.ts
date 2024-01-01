import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      text: "hsl(205, 49%, 93%)",
      background: "hsl(210, 50%, 7%)",
      primary: "hsl(211, 50%, 73%)",
      secondary: "hsl(261, 50%, 35%)",
      accent: "hsl(279, 50%, 54%)",
    },
  },
  plugins: [],
};
export default config;
