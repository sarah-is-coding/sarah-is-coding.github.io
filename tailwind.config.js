import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        // 400: '#cbbde5',
        // 500: '#5C546B',
        // 600: '#CDBCEB',
        400: '#FFA3A3',
        500: '#7B3F3F',
        600: '#F89F9F',
      },
      grayscale: {
        50: '#ffffff',
        100: '#efefef',
        200: '#FDFDFF',
        950: '#16161b',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
