import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "hsl(205, 49%, 93%)",
      background: "hsl(210, 50%, 7%)",
      primary: "hsl(211, 50%, 73%)",
      secondary: "hsl(261, 50%, 35%)",
      accent: "hsl(279, 50%, 54%)",
    },
    fontFamily: {
      header: "var(--font-poppins)",
      body: "var(--font-inter)",
    },
  },
  plugins: [],
};
export default config;
