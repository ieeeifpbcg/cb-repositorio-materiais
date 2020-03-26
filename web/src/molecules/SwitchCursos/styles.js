import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;

  & > button {
    margin: 0 12px;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 2.4rem;
  }

  @media (max-width: 441px) {
    & > button + button {
      margin-top: 12px;
    }

    flex-direction: column;
  }
`;
