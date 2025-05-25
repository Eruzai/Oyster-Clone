/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#3B82F6",
        primaryColor: "#3B82F6",
        textColor: "#3B82F6",
        dashboardBGColour: "#F9FAFB",
        LandingPagetextColor: "#334155",
      },
      screens: {
        xsm: "350px",
        xs: "476px",
        sm: "640px",
        md: "768px",
        bs: "900px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px",

        // "2xl-mx": { max: "1535px" },
        // "xl-mx": { max: "1279px" },
        // "lg-mx": { max: "1023px" },
        // "bs-mx": { max: "899px" },
        // "md-mx": { max: "767px" },
        // "sm-mx": { max: "639px" },
        // "xs-mx": { max: "475px" },
        // "xsm-mx": { max: "349px" },
      },
      fontFamily: {
        "general-sans": ["General Sans Variable", "sans-serif"],
      },
      backgroundImage: {
        "custom-bg": "url('/featureImage.jpg')",
        resumeImage: "url('public/resumeImage.png')",
        "custom-gradient":
          "linear-gradient(to bottom, rgba(249, 250, 251, 1) 29%, rgba(239, 242, 245, 0.75) 52%, rgba(217, 223, 232, 0.5) 68%, rgba(81, 107, 148, 0.25) 100%)",
      },
      boxShadow: {
        normal: "-4px 4px 8px rgba(0, 0, 0, 0.1)",
        hover: "2px 2px 8px rgba(0, 0, 0, 0.15)",
      },
    },
  },

  plugins: [],
};
