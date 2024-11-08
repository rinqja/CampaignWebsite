/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0056b3',
        'accent-red': '#e60000',
        'neutral-white': '#ffffff',
        'supportive-gold': '#ffcc00',
        'fresh-green': '#009933',
        'dark-charcoal': '#333333', 
      },
      fontFamily: {
        heading: ['Lato', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: ['36px', '44px'], // [font size, line height]
        h2: ['30px', '38px'],
        h3: ['24px', '32px'],
        body: ['16px', '24px'],
        caption: ['14px', '20px'],
      },
    },
  },
  plugins: [],
}
