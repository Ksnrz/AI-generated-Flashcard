/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notosans: ["Noto Serif Thai", "serif"], // Define 'parisienne' as a custom font class
      },
      backgroundColor: {
        myblack: "#1A1A1A",
        heavyGray: "#212121",
        lightGray: "#2f2f2f",
      },
      colors: {
        mywhite: "#FAFAFA",
      },
      borderColor: {
        mybordercolor: "#2c2d30",
      },
    },
  },
  plugins: [],
};
