import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap');
    font-family: 'Poppins', sans-serif !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      background-color: ${theme.primary.active};
      color: ${theme.primary.text};
    }
  }

  html, body, #root {
    height: 100%;
  }

  html, body {
    background-color: ${theme.primary.bg};
    color: ${theme.primary.text};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  a,
  button {
    cursor: pointer;
    color: ${theme.primary.text};
    text-decoration: none;
    border: none;
    outline: none;
  }

  li {
    list-style-type: none;
  }
`;
