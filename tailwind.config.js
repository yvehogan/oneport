/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3ab44a',
        secondary: '#f0fdf4',
        labelColor: '#B5B6B6',
        textColor: '#6b7280',
        inputBg: '#D1D5DB',
        borderColor: '#E5E7EB'
      }
    }
  },
  plugins: []
};
