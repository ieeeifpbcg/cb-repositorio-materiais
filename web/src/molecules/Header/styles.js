import styled from 'styled-components';

export const Container = styled.header`
  background: #3fb59b;
  display: flex;
  height: 15vh;
`;

export const HeaderText = styled.div`
  margin: auto auto auto 20vh;
  h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
  }
`;

export const SearchBox = styled.div`
  margin: auto 20vh auto auto;
  float: right;

  background: #fff;
  height: 40px;

  display: flex;
  border-radius: 8px;

  input {
    width: 300px;
    outline: none;
    padding-left: 10px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
  }

  button {
    background: #fff;
    border: none;
    border-radius: 8px;
  }
`;
