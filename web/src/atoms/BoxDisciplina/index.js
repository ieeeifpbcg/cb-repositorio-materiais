import React from 'react';

import PropTypes from 'prop-types';

import { parseName } from '~/util/DisciplinaParser';

import { Container } from './styles';

export default function BoxDisciplina({ disciplina, bg }) {
  return (
    <Container style={{ background: bg }}>
      {parseName(disciplina.nome)}
    </Container>
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
