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
    font-family: 'Roboto Mono', monospace;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: #40798c;
    &:hover {
      color: white;
    }
  }

`;

export default GlobalStyle;
