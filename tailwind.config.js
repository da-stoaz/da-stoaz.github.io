/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Specify your HTML files
  theme: {
    screens: {
      'sm': {'max': '767px'},
      // => @media (min-width: 640px) { ... }
      /*
        Diese MediaQuery wird eigentlich nicht benötigt, weil nur 3 Viewport-Größen benötigt werden.
        Deshalb bedeutet das, statt sm:"Klassen" kann einfach nur  "Klassen" verwendet werden, denn 

      */

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: { 
        customBlue: "#1E40AF",
      },
    },
  },
  plugins: [],
};

