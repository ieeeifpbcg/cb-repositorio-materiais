import React, { useState, useCallback } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

import { Container, Wrapper, HeaderText, SearchBox } from './styles';

function Header() {
  const [inputOpen, setInputOpen] = useState(false);

  const toggleInput = useCallback(() => {
    setInputOpen(oldInput => !oldInput);
  }, []);

  return (
    <Container>
      <Wrapper>
        <HeaderText isVisible={!inputOpen}>
          Collab Branch
          <br />
          Repositório de Materiais
        </HeaderText>

        <SearchBox isOpen={inputOpen}>
          <input placeholder="Pesquise..." size={1} />
          {inputOpen ? (
            <FiX size={30} onClick={toggleInput} />
          ) : (
            <FiSearch size={30} onClick={toggleInput} />
          )}
        </SearchBox>
      </Wrapper>
    </Container>
  );
}

export default Header;
