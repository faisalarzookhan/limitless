/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#dbeafe',
          100: '#bfdbfe',
          200: '#93c5fd',
          300: '#60a5fa',
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
          950: '#0c1a3d',
        },
        secondary: {
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe799',
          300: '#ffd766',
          400: '#ffcc4d',
          500: '#ffc957',
          600: '#ffbd3a',
          700: '#ffad1c',
          800: '#f29e0d',
          900: '#d98507',
          950: '#a66305',
        },
        accent: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#f0f0f0',
          300: '#e0e0e0',
          400: '#d0d0d0',
          500: '#0a0b0d',
          600: '#1a1a1a',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#0f0f0f',
          950: '#050505',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.25rem' }],  // 12px, 16px line height
        'sm': ['0.875rem', { lineHeight: '1.5rem' }],  // 14px, 20px line height
        'base': ['1rem', { lineHeight: '1.75rem' }],   // 16px, 24px line height
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px, 24px line height
        'xl': ['1.25rem', { lineHeight: '1.875rem' }], // 20px, 28px line height
        '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px, 28px line height
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px, 36px line height
        '4xl': ['2.375rem', { lineHeight: '2.5rem' }],  // 38px, 40px line height (Major Third from 1.25rem)
        '5xl': ['3rem', { lineHeight: '1.2' }],       // 48px, 52px line height (Major Third from 1.875rem)
        '6xl': ['3.75rem', { lineHeight: '1.2' }],    // 60px, 64px line height (Major Third from 2.375rem)
        '7xl': ['4.5rem', { lineHeight: '1.1' }],     // 72px, 72px line height (Major Third from 3rem)
        '8xl': ['6rem', { lineHeight: '1' }],         // 96px, 96px line height
        '9xl': ['8rem', { lineHeight: '1' }],         // 128px, 128px line height
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-dark': '0 2px 15px -3px rgba(0, 0, 0, 0.15), 0 10px 20px -2px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-lg': '0 0 30px rgba(14, 165, 233, 0.4)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-soft-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #ffc957 0%, #ffbd3a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0a0b0d 0%, #1a1a1a 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
}
