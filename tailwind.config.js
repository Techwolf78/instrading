/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#1A8A75',
          light: '#2BB89A',
          dark: '#0F5C4E',
          pale: '#E6F5F2',
        },
        navy: {
          DEFAULT: '#0D2137',
          mid: '#163047',
          light: '#1E3F5A',
        },
        green: {
          up: '#3DB88A',
        },
        cream: {
          DEFAULT: '#F5FAF9',
          dark: '#DFF0EC',
        },
        text: {
          dark: '#0D2137',
          mid: '#2E4A5C',
          light: '#6B8EA0',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'logoFloat 4s ease-in-out infinite',
      },
      keyframes: {
        logoFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
