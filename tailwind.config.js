module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      transformOrigin: {
        center: 'center',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
