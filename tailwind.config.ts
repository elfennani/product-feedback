import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "#AD1FEA",
      blue: "#4661E6",
      lightblue: "#62BCFA",
      darkblue: "#4661E6",
      orange: "#F49F85",
      lightgrey: "#F7F8FD",
      grey: "#F2F4FF",
      darkgrey: "#647196",
      white: "#FFF"
    },
    fontSize: {
      "heading-1": ["1.5rem", {
        lineHeight: "2.18rem",
        fontWeight: 700,
        letterSpacing: "-0.020625rem"
      }],
      "heading-2": ["1.25rem", {
        lineHeight: "1.8125rem",
        fontWeight: 700,
        letterSpacing: "-0.015625rem"
      }],
      "heading-3": ["1.125rem", {
        lineHeight: "1.625rem",
        fontWeight: 700,
        letterSpacing: "-0.015625rem"
      }],
      "heading-4": ["0.875rem", {
        lineHeight: "1.25rem",
        fontWeight: 700,
        letterSpacing: "-0.0125rem"
      }],
      "body-1": ["1rem", "1.4375rem"],
      "body-2": ["0.9375rem", "1.375rem"],
      "body-3": ["0.8125rem", {
        lineHeight: "1.1875rem",
        fontWeight: 600
      }],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
