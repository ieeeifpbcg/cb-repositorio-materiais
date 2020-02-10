import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      background-color: ${theme.primary.active};
      color: ${theme.primary.text};
    }
  }

  html, body {
    font: 16px sans-serif;

    background-color: ${theme.primary.bg};
    color: ${theme.primary.text};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
  }

  a,
  button {
    color: ${theme.primary.text};
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;
