import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
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
