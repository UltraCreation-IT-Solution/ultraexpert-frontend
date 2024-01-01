/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "rgba(0, 0, 0, 0.3)",
          "200": "rgba(0, 0, 0, 0.5)",
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
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
