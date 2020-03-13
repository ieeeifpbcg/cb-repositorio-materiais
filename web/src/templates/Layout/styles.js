import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const Container = styled.div`
  min-height: calc(100% - 200px);
  display: flex;
  flex-direction: column;

  footer {
    position: relative;
    height: 100px;

    padding-top: 18px;
    background: #3fb59b;
    font-style: normal;
    div {
      display: flex;
      justify-content: center;
      a {
        margin-left: 5px;
        font-weight: bold;
        display: flex;
      }
    }
  }

  .opendev {
  }

  .gitlink {
  }
`;

export const AboutText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  h4 {
    display: flex;
    align-items: center;

    svg {
      margin: 0 4px;
    }
  }
  a {
    transition: all 0.2s;
    &:hover {
      color: ${theme.primary.active};
    }
  }
`;

export const GitHubLink = styled.div`
  margin-top: 8px;
  a {
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    svg {
      margin-right: 8px;
    }
    &:hover {
      color: ${theme.primary.active};
      fill: ${theme.primary.active};
    }
  }
`;
