module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-overlay": "rgba(0, 0, 0, 0.65)",
        tertiary: "#1ac0a2",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
        urban: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
