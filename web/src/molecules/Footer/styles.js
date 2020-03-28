import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const Wrapper = styled.footer`
  position: relative;
  padding: 24px 0;
  background: #3fb59b;
  font-style: normal;
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.span`
  text-align: center;

  color: #fff;
  h4 {
    display: flex;
    align-items: center;

    svg {
      margin: 0 4px;
    }
  }

  a {
    font-weight: bold;

    transition: all 0.2s;
    &:hover {
      color: ${theme.primary.active};
    }
  }

  & > svg {
    margin-bottom: -3px;
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
