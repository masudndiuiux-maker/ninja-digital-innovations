import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-manrope)', 'sans-serif']
      },
      colors: {
        brand: {
          500: '#034354',
          400: '#26707F',
          dark: '#062B36'
        }
      },
      boxShadow: {
        soft: '0 12px 40px rgba(2, 52, 65, 0.08)'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #034354 0%, #26707F 100%)',
        'grid-noise': 'radial-gradient(circle at 1px 1px, rgba(71,85,105,0.12) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
