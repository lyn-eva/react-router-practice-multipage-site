module.exports = {
  content: ["./src/**/*.js", "./src/**/**/*.js", "./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["bellefair", "san-serif"],
        barlow: ["barlow", "san-serif"],
        "barlow-condensed": ["barlow condensed", "san-serif"],
      },
      colors: {
        dark: "#0C0E18",
        fog: "#d2d8f9",
        "half-transparent": "rgba(255, 255, 255, 0.5)",
      },
      screens: {
        tablet: "(min-height: 435px)",
      },
      screens: {
        tablet: {
          min: "435px",
        },
        laptop: {
          min: "755px",
        },
        desktop: {
          min: "1080px",
        },
      },
      backgroundImage: {
        "home-sm":
          'url("/src/components/assets/home/background-home-mobile.jpg")',
        "home-md":
          'url("/src/components/assets/home/background-home-tablet.jpg")',
        "home-lg":
          'url("/src/components/assets/home/background-home-desktop.jpg")',
        "destination-sm":
          'url("/src/components/assets/destination/background-destination-mobile.jpg")',
        "destination-md":
          'url("/src/components/assets/destination/background-destination-tablet.jpg")',
        "destination-lg":
          'url("/src/components/assets/destination/background-destination-desktop.jpg")',
        "crew-sm":
          'url("/src/components/assets/crew/background-crew-mobile.jpg")',
        "crew-md":
          'url("/src/components/assets/crew/background-crew-tablet.jpg")',
        "crew-lg":
          'url("/src/components/assets/crew/background-crew-desktop.jpg")',
        "technology-sm":
          'url("/src/components/assets/technology/background-technology-mobile.jpg")',
        "technology-md":
          'url("/src/components/assets/technology/background-technology-tablet.jpg")',
        "technology-lg":
          'url("/src/components/assets/technology/background-technology-desktop.jpg")',
      },
    },
  },
  plugins: [],
};
