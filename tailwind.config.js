/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    './Components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'white': '#fff',
      'blue': '#6096B4',
      'purple': '#B2A4FF',
      'pink': '#DDC6C6',
      'orange': '#fec89a',
      'green': '#B5F1CC',
      'yellow': '#FFD966',
      'gray-dark': '#44566C',
      'gray': '#F3F6F6',
      'gray-light': '#E3E3E3',
      'black': '#000',
      'black-light': '#44566C',
      'blue-gray': '#0C2D48',
      'baby-blue': '#B1D4E0',
      'purple-light': '#DEB4FF',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Lora', 'serif'],
      body: ['Lora', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
