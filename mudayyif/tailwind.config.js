/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        azure: '#2D8B94',
        darkAzure: '#064F57',
        creamPistachio: '#D7DFD2',
        iceGreen: '#EFF6F2',
        yellowClay: '#E8E6DD',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}; 