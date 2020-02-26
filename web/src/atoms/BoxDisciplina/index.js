import React from 'react';

import PropTypes from 'prop-types';

import { parseName } from '~/util/DisciplinaParser';

import { Wrapper, Container } from './styles';

export default function BoxDisciplina({ disciplina, bg }) {
  return (
    <Wrapper>
      <Container type="button" style={{ background: bg }}>
        <p className="nomeDisc">{parseName(disciplina.nome)}</p>
        <p className="cargaHoraria">{disciplina.ch}</p>
        <p className="idDisc">{disciplina.id}</p>
        <p className="preReq">{disciplina.pr}</p>
      </Container>
    </Wrapper>
  );
}

BoxDisciplina.propTypes = {
  disciplina: PropTypes.shape({
    id: PropTypes.string,
    nome: PropTypes.string.isRequired,
    ch: PropTypes.string.isRequired,
    pr: PropTypes.string.isRequired,
  }).isRequired,

  bg: PropTypes.string.isRequired,
};
