/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        tada: "tada 1s ease-in-out",
      },
      tada: {
        "0%": {
          transform: "scale(1)",
        },
        "10%": {
          transform: "scale(0.9) rotate(-3deg)",
        },
        "20%": {
          transform: "scale(0.9) rotate(-3deg)",
        },
        "30%": {
          transform: "scale(1.1) rotate(3deg)",
        },
        "40%": {
          transform: "scale(1.1) rotate(-3deg)",
        },
        "50%": {
          transform: "scale(1.1) rotate(3deg)",
        },
        "60%": {
          transform: "scale(1.1) rotate(-3deg)",
        },
        "70%": {
          transform: "scale(1.1) rotate(3deg)",
        },
        "80%": {
          transform: "scale(1.1) rotate(-3deg)",
        },
        "90%": {
          transform: "scale(1.1) rotate(3deg)",
        },
        "100%": {
          transform: "scale(1) rotate(0)",
        },
      },
    },
  },
  plugins: [],
};
