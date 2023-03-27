/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        a4: '600px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-purple': {
          DEFAULT: '#5842F8',
          '50': '#F4F3FF',
          '100': '#E3DFFE',
          '200': '#C0B8FC',
          '300': '#8270FF',
          '400': '#7B69F9',
          '500': '#5842F8',
          '600': '#280CF6',
          '700': '#3D28D7',
          '800': '#16058C',
          '900': '#0D0356'
        },
        'brand-sky-blue': {
          DEFAULT: '#61DCFF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#DBF7FF',
          '300': '#B3EEFF',
          '400': '#8AE5FF',
          '500': '#61DCFF',
          '600': '#29D0FF',
          '700': '#00BBF0',
          '800': '#008FB8',
          '900': '#006380'
        },
        'brand-dark-blue': {
          DEFAULT: '#02022B',
          '50': '#0A0ADA',
          '100': '#0909C7',
          '200': '#0707A0',
          '300': '#060679',
          '400': '#040452',
          '500': '#1D1C3F',
          '600': '#02022B',
          '700': '#010118',
          '800': '#01010F',
          '900': '#00000A'
        },
        'brand-green': {
          DEFAULT: '#37FF8B',
          '50': '#EFFFF5',
          '100': '#DAFFEA',
          '200': '#B1FFD2',
          '300': '#7EFFB4',
          '400': '#60FFA3',
          '500': '#37FF8B',
          '600': '#00FE6B',
          '700': '#0BDB63',
          '800': '#008E3C',
          '900': '#005624'
        },
        'brand-orange': {
          DEFAULT: '#FFA93F',
          '50': '#FFFBF7',
          '100': '#FFF2E2',
          '200': '#FFE0B9',
          '300': '#FFC175',
          '400': '#FFBB68',
          '500': '#FFA93F',
          '600': '#FF9007',
          '700': '#EF921F',
          '800': '#965300',
          '900': '#5E3400'
        },
        'black': {
          ...colors.black,
          '400': '#3f4c5d',
        }
      }
    },
  },
  plugins: [],
}