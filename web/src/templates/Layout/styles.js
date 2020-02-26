import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  footer {
    position: relative;
    bottom: 0;
    padding: 18px 0;
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

    div:first-of-type {
      margin-bottom: 5px;
      a {
        color: #3d3d3d;
      }
    }
  }
`;
