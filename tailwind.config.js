/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        flame: '#FF5500',
        cream: '#FAF3EB',
        ink: '#0A0A0A',
        pine: '#123524',
        gold: '#D4A853',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        body: ['Archivo', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
