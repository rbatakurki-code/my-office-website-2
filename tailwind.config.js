/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            50: '#EEF1F9',
            100: '#DCE3F3',
            200: '#B9C7E7',
            300: '#96ABDB',
            400: '#738FCF',
            500: '#1E3A8A', // Deep Blue - Main brand color
            600: '#182E6E',
            700: '#122353',
            800: '#0C1737',
            900: '#060C1C',
          },
          secondary: {
            50: '#E7F9F7',
            100: '#CFF3EF',
            200: '#9FE7DF',
            300: '#6FDBD0',
            400: '#3FCFC0',
            500: '#14B8A6', // Teal/Aqua - Accent color
            600: '#109385',
            700: '#0C6E64',
            800: '#084A42',
            900: '#042521',
          },
          neutral: {
            50: '#F3F4F6', // Warm Gray - Support color
            100: '#E5E7EB',
            200: '#D1D5DB',
            300: '#9CA3AF',
            400: '#6B7280',
            500: '#4B5563',
            600: '#374151',
            700: '#1F2937',
            800: '#111827',
            900: '#030712',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
