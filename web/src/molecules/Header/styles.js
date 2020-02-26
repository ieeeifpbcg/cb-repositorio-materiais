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
  display: flex;
  border-radius: 8px;
  padding: 8px 12px;
  input {
    flex: 1;
    outline: none;
    border: none;
    font-size: 15px;
    background: none;
  }
`;
