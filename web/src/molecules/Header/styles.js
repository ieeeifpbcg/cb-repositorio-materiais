import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1020px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.header`
  background: #3fb59b;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const HeaderText = styled.div`
  h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
  }
`;

export const SearchBox = styled.div`
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
