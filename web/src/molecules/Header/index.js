import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, HeaderText, SearchBox } from './styles';
import GlobalStyle from '~/styles/global';

function Header() {
  return (
    <Container>
      <GlobalStyle />
      <HeaderText>
        <h2>Collab Branch</h2>
        <h2>Repositório de Materiais</h2>
      </HeaderText>

      <SearchBox>
        <input placeholder="Ex: Programação 1" />
        <button type="button">
          <FiSearch size="30px" color="#3FB59B" />
        </button>
      </SearchBox>
    </Container>
  );
}

export default Header;
