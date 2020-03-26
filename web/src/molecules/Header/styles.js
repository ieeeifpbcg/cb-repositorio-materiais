import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1020px;
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.header`
  background: #3fb59b;
  justify-content: center;
  height: 100px;
  align-items: center;
  display: flex;
`;

export const HeaderText = styled.h2`
  font-size: 2.4em;
  font-style: normal;
  font-weight: normal;

  @media (max-width: 800px) {
    font-size: 1.8rem;

    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  }
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 24px;

  background: #fff;
  width: 400px;
  height: 48px;
  border-radius: 8px;

  input {
    position: absolute;
    z-index: 1;
    width: calc(100% - 78px);

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    padding-left: 24px;
    outline: none;
    border: none;
    font-size: 2.4rem;
    background: none;
  }

  svg {
    position: absolute;
    color: #3fb59b;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    background: ${({ isOpen }) => (isOpen ? '#fff' : 'none')};
    width: ${({ isOpen }) => (isOpen ? '100%' : '48px')};

    input {
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    }

    svg {
      color: ${({ isOpen }) => (isOpen ? '#3fb59b' : '#fff')};
    }
  }
`;

// export const SearchBox = styled.div`
//   background: #fff;
//   display: flex;
//   width: 400px;
//   border-radius: 8px;
//   padding: 8px 12px;

//   input {
//     flex: 1;
//     outline: none;
//     border: none;
//     font-size: 2.4rem;
//     background: none;
//   }
// `;
