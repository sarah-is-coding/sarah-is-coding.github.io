/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.js'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['Josefin Slab', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      }
    }
  },
  plugins: [],
}

