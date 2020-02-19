import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  footer {
    bottom: 0;
    position: absolute;
    width: 100vw;
    padding-top: 24px;
    padding-bottom: 24px;
    background: #3fb59b;
    font-style: normal;

    div {
      display: flex;
      justify-content: center;
    }

    .content:first-of-type {
      padding-bottom: 10px;
    }

    a {
      margin-left: 5px;
      font-weight: bold;
      display: flex;
    }
    .ufcg {
      color: #3d3d3d;
    }
  }
`;
