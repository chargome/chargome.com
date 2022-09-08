import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    --primary: #00272b;
    --secondary: #70a9a1;
    --teaGreen: #cfe0c3;
    --tealBlue: #40798c;
    --greyLight: #F5F5F5;
    --greyMedium: #B8B8B8;
    --greyDark: #787878;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: #40798c;
    &:hover {
      color: white;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Mono", monospace;
  }

`;

export default GlobalStyle;
