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
        'black-10': 'rgba(22, 22, 22, .1)',
        'black-25': 'rgba(22, 22, 22, .25)',
        'black-35': 'rgba(22, 22, 22, .35)',
        'black-50': 'rgba(22, 22, 22, .5)',
        'black-70': 'rgba(22, 22, 22, .7)',
        'black-80': 'rgba(22, 22, 22, .8)',
        'black-90': 'rgba(22, 22, 22, .9)',

        white: '#FFFFFF',
        'white-25': 'rgba(255, 255, 255, .25)',
        'white-35': 'rgba(255, 255, 255, .35)',
        'white-70': 'rgba(255, 255, 255, .7)',
        'white-80': 'rgba(255, 255, 255, .8)',
        'white-90': 'rgba(255, 255, 255, .9)',

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
