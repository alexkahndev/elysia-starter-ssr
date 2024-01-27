/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'deep-sapphire': '#00296B',
          'congress-blue': '#003F88',
          'endeavour': '#00509D',
          'supernova': '#FDC500',
          'sunglow': '#FFD500',
        },
        fontFamily: {
          'primary': ['Figtree', 'sans-serif'],
        },
        backgroundImage: () => ({
          'hero-img': "url('/src/assets/hero.svg')",
        }),
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }