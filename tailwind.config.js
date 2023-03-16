/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontSize: {
      'h1': '150px',
      'h2': '100px',
      'h3': '56px',
      'h4': '32px',
      'h5': '28px',
      'sh1': '14px',
      'nav-text': '16px'
    },
    fontFamily: {
      'main': ['Bellefair'],
      'second': ['BarlowCondensed']

    },
    extend: {
      animation: {
        'spin-slow': 'spin 70s linear infinite',
      },
      colors: {
        'dark': '#0B0D17',
        'violet': '#D0D6F9',
        'header': '#979797'
      },
      backgroundImage: {
        'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'destination': "url('./assets/destination/background-destination-desktop.jpg')",
        'crew': "url('./assets/crew/background-crew-desktop.jpg')",
        'technology': "url('./assets/technology/background-technology-desktop.jpg')"
      }
    },
  },
  plugins: [],
}
