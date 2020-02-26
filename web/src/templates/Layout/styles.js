import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100vw;
  height: 100vh; */
  display: flex;
  flex-direction: column;

  footer {
    position: relative;
    height: 100px;
    left: 0;
    right: 0;
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
  }

  .opendev {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    h4 {
      span {
        font-size: 18px;
      }
    }
    a {
      transition: all 0.2s;
      &:hover {
        color: #3d3d3d;
      }
    }
  }

  .gitlink {
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
        color: #3d3d3d;
        fill: #3d3d3d;
      }
    }
  }
`;
