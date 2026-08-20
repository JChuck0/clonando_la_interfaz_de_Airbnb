import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    screens: {
      md: "745px",
      lg: "1024px",
    },
    extend: {
      colors: {
        brand: "#FF385C",
      },
    },
  },
};

export default config;
