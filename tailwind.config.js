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
      colors: {
        separator: '#3F3F3F',

        black: '#000',
        white: '#fff',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      backgroundImage: {
        'paper-pattern':
          'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.94) 100%), linear-gradient(rgba(170,170,170, 0.18) 1.3px, transparent 1.3px), linear-gradient(to right, rgba(170,170,170,0.18) 1.3px, #ffffff 1.3px)',
        'paper-pattern-dark':
          'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.94) 100%), linear-gradient(rgba(170,170,170, .15) 1.3px, transparent 1.3px), linear-gradient(to right, rgba(170, 170, 170, .15) 1.3px, #000000 1.3px)'
      },
      backgroundSize: {
        'paper-pattern-size': 'cover, 35px 35px, 35px 35px'
      },
      backgroundPosition: {
        'paper-pattern-position': 'center, center, center'
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        poppins: 'var(--font-poppins)',
        'roboto-condensed': 'var(--font-roboto-condensed)',
        righteous: 'var(--font-righteous)',
        montserrat: 'var(--font-montserrat)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
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
