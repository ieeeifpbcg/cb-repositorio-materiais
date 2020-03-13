import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const Container = styled.div`
  user-select: none;
  z-index: 1;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  width: 150px;
  height: 50px;

  color: ${theme.primary.active};
  font-weight: bold;
  font-size: 15px;
  line-height: 27px;

  margin-bottom: 8px;
`;
