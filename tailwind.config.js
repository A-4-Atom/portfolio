/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        dimgray: "#575757",
        darkslateblue: "#0955a3",
        white: "#fff",
        black: "#000",
        gray: "#121212",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs": "5px",
        mini: "15px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "17xl": "36px",
      lg: "18px",
      xl: "20px",
      "13xl": "32px",
      base: "16px",
      mini: "15px",
      "21xl": "40px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
