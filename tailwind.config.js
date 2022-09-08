const ANIMATION = {
  "--animation-btn": "0.25s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-text-case": "uppercase", // set default text transform for buttons
  "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ["'Roboto Mono', monospace"]
      }
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
          // primary: '#006e8f',
          secondary: '#5998aa',
          // accent: '#006e8f',
          ...ANIMATION,
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: '#cfe0c3',
          secondary: '#40798c',
          accent: '#70a9a1',
          "base-100": '#00272b',
          ...ANIMATION,
        },
      },
      {
        sardegna: {
          ...require("daisyui/src/colors/themes")["[data-theme=bumblebee]"],
          primary: '#f7c407',
          secondary: '#ea7070',
          accent: '#9ee2c7',
          'base-100': '#25a9b2', // '#578897',
          ...ANIMATION,
        },
      },
    ],
  },
}