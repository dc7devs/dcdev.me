/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      keyframes: {
        effect: {
          '0%, 100%': { transform: 'rotate(-180deg)' },
          '25%': { transform: 'rotate(90deg) scale(0.5)' },
          '50%': { transform: 'translate(-20%, -20%) rotate(-90deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        'effect-2': {
          '0%, 100%': {
            transform: 'scale(0.7) translate(100%, -100%) rotate(-50deg)'
          },
          '50%': {
            transform: 'translate(50%, -50%) scale(1.2) rotate(-20deg)'
          },
          '100%': { transform: 'translate(0) scale(1) rotate(0deg)' }
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        effect: 'effect 1s ease-in-out',
        'effect-2': 'effect-2 1.5s ease-in-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
};
