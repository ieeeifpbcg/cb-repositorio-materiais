import styled from 'styled-components';

export const Container = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Bar = styled.div`
  background: #3fb59b;
  width: 5px;
  position: absolute;
  height: calc(100% - 24px);
  z-index: 0;
`;
