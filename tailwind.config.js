/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      screens: {
        xs: "450px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          100: "rgba(0, 0, 0, 0.3)",
          200: "rgba(0, 0, 0, 0.5)",
        },
        silver: "#d2c0c8",
        lightslategray: "#5e90a7",
        darkslategray: "#3e506d",
        slategray: "#3e5676",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
