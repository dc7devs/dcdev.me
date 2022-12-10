/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        separator: '#3F3F3F',

        black: '#161616',
        white: '#FFFFFF',

        gray: '#AEAEAE'
      },
      backgroundImage: {
        'paper-pattern': "radial-gradient(50% 50% at 50% 50%, rgba(174, 174, 174, 0) 0%, rgba(174, 174, 174, 0.94) 100%), linear-gradient(rgba(23, 23, 23, 0.1) 1.6px, transparent 1.6px), linear-gradient(90deg, rgba(23, 23, 23, 0.1) 1.6px, transparent 1.6px), linear-gradient(rgba(23, 23, 23, 0.1) 0.8px, transparent 0.8px), linear-gradient(90deg, rgba(23, 23, 23, 0.1) 0.8px, rgba(173, 173, 173, 0) 0.8px)",
        'hero-img': "url('/images/hero_1.png')"
      },
      fontFamily: {
        'pontserrat': ['Montserrat', 'sans-serif']
      }
    },

    backgroundSize: {
      'paper-pattern-size': 'cover, 40px 40px, 40px 40px, 8px 8px, 8px 8px',
    },

    backgroundPosition: {
      'paper-pattern-position': 'center, -1.6px -1.6px, -1.6px -1.6px, -0.8px -0.8px, -0.8px -0.8px'
    }
  },
  plugins: [],
}
