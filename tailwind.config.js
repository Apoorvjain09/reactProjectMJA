/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "text-darker": "#0f2f64",
        "text-dark": "#536288",
        "text-lighter": "#e1e3e8",
        "brand-tertiary": "#f5f9fe",
        "brand-primary": "#1e5dbc",
        mediumslateblue: {
          "100": "#a27fff",
          "200": "rgba(60, 80, 224, 0.03)",
        },
        "neutral-color-900": "#000",
        "secondary-color-500": "#2f3a3e",
        burlywood: "#ecbc81",
        gray: {
          "100": "#7d7878",
          "200": "rgba(0, 0, 0, 0.7)",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "work-sans": "'Work Sans'",
        overpass: "Overpass",
        "baloo-bhai-2": "'Baloo Bhai 2'",
        "baloo-2": "'Baloo 2'",
        "baloo-bhaijaan": "'Baloo Bhaijaan'",
        "inria-sans": "'Inria Sans'",
        "text-lg-bold": "'Shopify Sans Web'",
      },
      borderRadius: {
        "11xl": "30px",
        "31xl": "50px",
        lgi: "19px",
      },
    },
    fontSize: {
      base: "16px",
      "21xl": "40px",
      xl: "20px",
      "235xl": "254px",
      lg: "18px",
      "3xl": "22px",
      "37xl": "56px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
