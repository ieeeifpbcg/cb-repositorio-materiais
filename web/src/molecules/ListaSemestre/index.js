import React from 'react';

import PropTypes from 'prop-types';

import BoxDisciplina from '~/atoms/BoxDisciplina';
import BoxSemestre from '~/atoms/BoxSemestre';

import { Container } from './styles';

export default function ListaSemestre({ disciplinas, number }) {
  return (
    <Container>
      <BoxSemestre number={number} />
      {disciplinas.map(element => {
        return <BoxDisciplina id={element.id} disciplina={element} />;
      })}
    </Container>
  );
}

ListaSemestre.propTypes = {
  disciplinas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      nome: PropTypes.string.isRequired,
      ch: PropTypes.string.isRequired,
      pr: PropTypes.string.isRequired,
    })
  ).isRequired,
  number: PropTypes.number.isRequired,
};
