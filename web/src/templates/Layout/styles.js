import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100% - 200px);
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
      display: flex;
      align-items: center;

      svg {
        margin: 0 4px;
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
