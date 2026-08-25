/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neu: {
          bg: '#F4F4F2',
          surface: '#FFFFFF',
          text: '#111111',
          textMuted: '#686868',
          accent: '#D32F2F', // Deep Crimson Accent
          accentMuted: '#FFEBEE', // Very light red
          border: '#E4E4E1',
          shadowDark: '#E0E0DE',
          shadowLight: '#FFFFFF',
        }
      },
      boxShadow: {
        'neu-flat': '6px 6px 12px #e0e0de, -6px -6px 12px #ffffff',
        'neu-flat-hover': '8px 8px 16px #d1d1cf, -8px -8px 16px #ffffff',
        'neu-flat-sm': '3px 3px 6px #e0e0de, -3px -3px 6px #ffffff',
        'neu-flat-sm-hover': '4px 4px 8px #d1d1cf, -4px -4px 8px #ffffff',
        'neu-pressed': 'inset 6px 6px 12px #e0e0de, inset -6px -6px 12px #ffffff',
        'neu-pressed-sm': 'inset 3px 3px 6px #e0e0de, inset -3px -3px 6px #ffffff',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
