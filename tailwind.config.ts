import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: { DEFAULT: '#1A1210', profond: '#0A0806', card: '#221510' },
        rouge: { DEFAULT: '#B22333', fonce: '#9B1E2A' },
        creme: '#FBF7F2',
        or: '#C4862A',
        chair: '#E8D4C4',
      },
      fontFamily: {
        garamond: ['var(--font-garamond)', 'Georgia', 'serif'],
        outfit: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ember: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        ember: 'ember 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
