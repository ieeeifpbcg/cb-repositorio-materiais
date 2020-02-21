import React from 'react';

import PropTypes from 'prop-types';

import BoxDisciplina from '~/atoms/BoxSemestre';

import { Container } from './styles';

export default function ListaDisciplinas({ disciplinas }) {
  return (
    <Container>
      {disciplinas.map(element => {
        return <BoxDisciplina id={element.id} disciplina={element} bg="#000" />;
      })}
    </Container>
  );
}

ListaDisciplinas.propTypes = {
  disciplinas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      nome: PropTypes.string.isRequired,
      ch: PropTypes.string.isRequired,
      pr: PropTypes.string.isRequired,
    })
  ).isRequired,
};
