/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1170px',
        xl: '1170px',
        '2xl': '1170px',
      }
    },
    fontSize: {
      sm: ['0.875rem', '1.375rem'], // 14px
      base: ['1rem', '1.5rem'], // 16px
      lg: ['1.125rem', '1.5rem'], // 18px
      xl: ['1.25rem', '1.625rem'], // 20px
      '2xl': ['1.5rem', '1.875rem'], // 24px
      '3xl': ['1.75rem', '2.1875rem'], // 28px
      '4xl': ['2.25rem', '2.8125rem'], // 36px
      '5xl': ['2.75rem', '3.4375rem'], // 44px
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'new-black': '#090E34',
        'new-primary': '#3056D3',
        'new-secondary': '#13C296',
        'new-gray': '#637381',
        'new-gray-light': '#F4F7FF',
        'new-gray-lighter': '#F8FAFC',
        'new-gray-stroke': '#E7E7E7',
        'new-yellow': '#FBB040',
        'new-light-blue': '#E9F9FF'
      },
      width: {
        '50': 'calc(50% - 15px)',
        '33': 'calc(33.3333% - 20px)',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '15': 'repeat(auto-fit,minmax(14rem,1fr));',
        '20': 'repeat(auto-fit,minmax(20rem,1fr));',
        '30': 'repeat(auto-fit,minmax(30rem,1fr));',
        '40': 'repeat(auto-fit,minmax(40rem,1fr));',
        'max-1': 'repeat(auto-fit,minmax(10rem,max-content));',
        'max-2': 'repeat(auto-fit,minmax(15rem,max-content));',
        'max-3': 'repeat(auto-fit,minmax(20rem,max-content));',
        'max-4': 'repeat(auto-fit,minmax(25rem,max-content));',
        'max-5': 'repeat(auto-fit,minmax(30rem,max-content));',
        'max-6': 'repeat(auto-fit,minmax(35rem,max-content));',
        'max-7': 'repeat(auto-fit,minmax(40rem,max-content));',
      }
    },
  },
  plugins: [
    //require('@tailwindcss/forms'),
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      //strategy: 'class', // only generate classes
    }),
  ],
}

