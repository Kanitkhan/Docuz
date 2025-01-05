import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'xsm':'300px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1370px'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        peach:'#f5cdb8',
        greytab:'#cfd2d4'
      },
      backgroundImage:{
        'search':"../../public/search.svg"
      }
    },
  },
  plugins: [],
} satisfies Config;
