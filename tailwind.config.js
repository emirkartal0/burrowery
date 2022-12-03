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
    },
    extend: {
      backgroundImage: {
        'header': "url('../public/images/header.svg')",
        'hed': "url('../public/images/hed.png')",
      }
    },
  },
  plugins: [],
}
