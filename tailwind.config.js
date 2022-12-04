/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'koyu': '#002521',
      'acik': '#BB8741',
      'about': '#f9f3ebd9',
      'white': '#FFFFFF'
    },
    extend: {
      backgroundImage: {
        'header': "url('../public/images/header.svg')",
        'hed': "url('../public/images/hed.png')",
      }
    },
    screens: {
      '2xl': {'max': '1490px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1160px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '780px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '530px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
