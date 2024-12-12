/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        quattrocentoSans: ["Quattrocento Sans", "sans-serif"],
      },
      screens: {
        lg: "1115px",
        xs: { 'max' :'320px'},
      },
    },
  },
  plugins: [],
};
