/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        "custom-gray": "rgba(159, 159, 159, 1)",
        "custom-yellow": "rgba(227, 191, 63, 1)",
      },
      backgroundImage: {
        "custom-gradient":
            "linear-gradient(to bottom right, rgba(112, 0, 140, 1) 46%, rgba(112, 0, 140, 0.7) 74%)",
      },
      opacity: {
        10: "0.05",
      },
    },
  },
  plugins: [],
};
