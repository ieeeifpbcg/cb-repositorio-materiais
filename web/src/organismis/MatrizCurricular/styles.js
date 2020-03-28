import styled from 'styled-components';

export const Container = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 30px;
  @media (max-width: 400px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const BoxSemestres = styled.div`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
