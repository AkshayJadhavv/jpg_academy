/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F0D060',
          dark: '#A8861A',
          glow: '#D4AF3780',
        },
        dark: {
          DEFAULT: '#050505',
          100: '#0A0A0A',
          200: '#111111',
          300: '#1A1A1A',
          400: '#222222',
          500: '#2A2A2A',
        }
      },
      fontFamily: {
        // CHANGED: Replaced with Bell MT
        display: ['Bell MT', 'Playfair Display', 'Baskerville', 'Georgia', 'serif'],
        body: ['Bell MT', 'Baskerville', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Bell MT', 'Baskerville', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'scroll-progress': 'scrollProgress linear',
        'particle': 'particle 15s linear infinite',
        'fadeInUp': 'fadeInUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(212, 175, 55, 0.7), 0 0 80px rgba(212, 175, 55, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scrollProgress: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(720deg)', opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}