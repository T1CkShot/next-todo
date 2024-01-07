import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "hsl(205, 49%, 93%)",
        background: "hsl(210, 50%, 7%)",
        secondary: "hsl(261, 50%, 35%)",
        primary: "hsl(279, 50%, 54%)",
      },
      fontFamily: {
        header: "var(--font-poppins)",
        body: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
export default config;
