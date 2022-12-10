/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        effect: {
          "0%, 100%": { transform: "rotate(50deg)" },
          "25%": { transform: "rotate(-50deg) scale(0.5)"},
          "50%": { transform: "translate(-30%, -20%)"},
          "80%": {transform: "translate(-40%, 10%) rotate(0deg)"},
          "100%": {transform: "rotate(0deg)"},
        },
        'effect-2': {
          "0%, 100%": { transform: "translate(100%) rotate(20deg)" },
          "50%": { transform: "translate(50%) rotate(-20deg)" },
          "100%": { transform: "translate(0) rotate(0deg)" },
        }
      },
      animation: {
        effect: "effect 1s ease-in-out",
        'effect-2': "effect-2 1s ease-in"
      },
      colors: {
        primary: '#1E1E1E',
        separator: '#3F3F3F',

        black: '#161616',
        white: '#FFFFFF',

        gray: '#AEAEAE',
      },
      backgroundImage: {
        'paper-pattern': "radial-gradient(50% 50% at 50% 50%, rgba(174, 174, 174, 0) 0%, rgba(174, 174, 174, 0.94) 100%), linear-gradient(rgba(22, 22, 22, 0.1) 1.6px, transparent 1.6px), linear-gradient(90deg, rgba(22, 22, 22, 0.1) 1.6px, transparent 1.6px), linear-gradient(rgba(22, 22, 22, 0.1) 0.8px, transparent 0.8px), linear-gradient(90deg, rgba(22, 22, 22, 0.1) 0.8px, rgba(173, 173, 173, 0) 0.8px)",
        'paper-pattern-dark': "radial-gradient(50% 50% at 50% 50%, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.94) 100%), linear-gradient(rgba(174, 174, 174, 0.1) 1.6px, transparent 1.6px), linear-gradient(90deg, rgba(174, 174, 174, 0.1) 1.6px, transparent 1.6px), linear-gradient(rgba(174, 174, 174, 0.1) 0.8px, transparent 0.8px), linear-gradient(90deg, rgba(174, 174, 174, 0.1) 0.8px, rgba(22, 22, 22, 0) 0.8px)",
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
    },
  },
  plugins: [],
}
