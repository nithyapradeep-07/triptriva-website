/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F7A63',
          50: '#E8F5F2',
          100: '#D1EBE5',
          200: '#A3D7CB',
          300: '#75C3B1',
          400: '#47AF97',
          500: '#1F7A63',
          600: '#19624E',
          700: '#13493A',
          800: '#0D3127',
          900: '#071914',
        },
        secondary: {
          DEFAULT: '#2D9CDB',
          50: '#EAF6FD',
          100: '#D5EEFB',
          200: '#ABDDF7',
          300: '#81CCF3',
          400: '#57BBEF',
          500: '#2D9CDB',
          600: '#247CAF',
          700: '#1B5C83',
          800: '#123D57',
          900: '#091E2B',
        },
        accent: {
          DEFAULT: '#F2994A',
          50: '#FDF0E5',
          100: '#FBE0CC',
          200: '#F6C199',
          300: '#F2A266',
          400: '#F2994A',
          500: '#E08530',
          600: '#B36A26',
          700: '#864F1C',
          800: '#5A3513',
          900: '#2D1A09',
        },
        'bg-alt': '#F5F7FA',
        'text-dark': '#2C2C2C',
        'text-muted': '#7A7A7A',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1F7A63 0%, #0B72DC 100%)',
        'gradient-brand-deep': 'linear-gradient(160deg, #1F7A63 0%, #0B72DC 60%, #0057B8 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 30%, rgba(31,122,99,0.08) 0%, transparent 50%), radial-gradient(at 80% 70%, rgba(45,156,219,0.08) 0%, transparent 50%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(31, 122, 99, 0.08)',
        'card': '0 8px 30px -6px rgba(31, 122, 99, 0.12)',
        'card-hover': '0 30px 60px -15px rgba(31, 122, 99, 0.3)',
        'glow-primary': '0 0 40px rgba(31, 122, 99, 0.15)',
        'glow-accent': '0 0 40px rgba(242, 153, 74, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'float': 'float 7s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
