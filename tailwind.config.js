/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        "color-primary":"#f1effa",
        "color-white":"#ffff",
        "color-black":"#1b2030",
        "color-violet-dark":"#724ce3",
        "color-violet-light":"#bfb8f4",
        "color-violet-little-dark":"#9884fc",
        "color-violet-bleu":"#753ffe",
        "color-violet-pure":"#7938ad",
        "color-violet-move":"#a33b8e",
        "color-voiler-degree-move":"#957ad6",
        "color-pinky":"#c14482",
        "color-green-littelDark":"#7e7e7f",
        "color-section-collaborat":"#bc74fa",

      },

      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },

      animation:{
        blob:"blob 7s infinite",
      },

      keyframes:{
        blob:{
          "0%":{transform:" translate(0px,0px) scale(1)"},
          "33%":{transform:" translate(30px,-50px) scale(1.1)"},
          "66%":{transform:" translate(-20px,20px) scale(0.9)"},
          "100%":{transform:" translate(0px,0px)scale(1)"},

        },
    },
    container: {
      center: true,
    },

  },
  plugins: [ require('@tailwindcss/forms'),],
}}

// content: ["./*.html"],