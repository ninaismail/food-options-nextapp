/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        "my-teal": {
          "500": "#0b2421",
          "700": "#00100d",
        },  "my-beige": {
          "500": "#fecda5",
          "700": "#eab991",
        }
      },
      minHeight: {
        '700': '700px',
        '600': '600px',
        '75': '75px',
      },
      screens: {
        'xs': '480px'
      },
      opacity: ['hover', 'active', 'visited']
    },
  }, 
  plugins: [       
],
}
