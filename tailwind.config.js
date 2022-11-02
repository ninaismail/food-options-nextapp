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
      opacity: ['hover', 'active', 'visited']
    },
  }, 
  plugins: [],
}
