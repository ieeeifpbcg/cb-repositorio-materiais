import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const ButtonSemestre = styled.button`
  user-select: none;
  z-index: 1;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  width: 170px;
  height: 50px;

  color: ${theme.primary.active};

  font-size: 1.6rem;
  font-style: normal;
  font-weight: bold;
  line-height: 2.7rem;

  margin-bottom: 8px;

  svg {
    display: none;
  }

  cursor: default;
  @media (max-width: 400px) {
    padding: 0 24px;
    width: calc(100% - 24px);
    align-items: center;
    justify-content: space-between;

    svg {
      display: block;
    }
  }
`;
