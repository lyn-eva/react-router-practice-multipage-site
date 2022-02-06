module.exports = {
  mode: "jit",
  content: ["./src/**/*.js", "./src/**/**/*.js", "./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'bellefair': ["bellefair", "san-serif"],
        'barlow': ["barlow", "san-serif"],
        "barlow-condensed": ["barlow condensed", "san-serif"],
      },
      colors: {
        'dark': "#0C0E18",
        'fog': "#d2d8f9",
        "half-transparent": "rgba(255, 255, 255, 0.5)",
      },
      screens: {
        
      }
    },
  },
  plugins: [],
};
