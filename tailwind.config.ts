import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-bg': '#F8F7F4',
        'fuchsia-600': '#D946EF',
        'fuchsia-800': '#A21CAF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        'F8F7F4': '#F8F7F4',
      },
    },
  },
  plugins: [],
}

export default config