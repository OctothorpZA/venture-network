import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extend the color palette with the brand's defined colors.
      colors: {
        // Primary Palette (Trust & Stability)
        oxfordBlue: '#0D1B2A',      // For dark backgrounds and primary text
        'brand-platinum': '#E0E1DD', // For light backgrounds
        shadowBlue: '#415A77',      // For secondary elements and subheadings

        // Accent Palette (Innovation & Action)
        'brand-tangerine': '#FCA311', // For primary calls-to-action (buttons) and links
      },
      // Extend the font families with the brand's defined typography.
      fontFamily: {
        // Font for headings
        sans: ['Inter', 'sans-serif'],
        // Font for body text
        serif: ['"Source Sans Pro"', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
