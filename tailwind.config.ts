import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aco: {
          DEFAULT: '#2A7EA4',
          dark: '#1C5F7E',
          gelo: '#D0E8F2',
        },
        neutro: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          500: '#5C5C5C',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        marca: '0.18em',
        wider2: '0.24em',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
