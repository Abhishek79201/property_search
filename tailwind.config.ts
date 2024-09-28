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
        primary: "#33443C",   
        secondary: "#ABC0B6", 
        background: "#fafafa", 
        accent: "#F87A53",    
        dark: "#31393D",      
        muted: "#D8DDE0",
        text:"#0D0D0D"     
      },
    },
  },
  plugins: [],
};

export default config;
