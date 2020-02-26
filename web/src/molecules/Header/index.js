import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, Wrapper, HeaderText, SearchBox } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <HeaderText>
          <h2>Collab Branch</h2>
          <h2>Repositório de Materiais</h2>
        </HeaderText>

        <SearchBox>
          <input placeholder="Ex: Programação 1" />
          <FiSearch size="30px" color="#3FB59B" />
        </SearchBox>
      </Wrapper>
    </Container>
  );
}

export default Header;
