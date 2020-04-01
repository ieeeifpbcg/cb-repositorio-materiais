import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const Wrapper = styled.div`
  color: ${theme.primary.active};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  border-radius: 18px;
  border: 1px solid ${theme.primary.active};
`;
