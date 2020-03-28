import React, { useState, useCallback } from 'react';

import PropTypes from 'prop-types';

import BoxDisciplina from '~/atoms/BoxDisciplina';
import BoxSemestre from '~/atoms/BoxSemestre';

import { Container, Bar } from './styles';

export default function ListaSemestre({ disciplinas, number }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setExpanded(oldState => !oldState);
  }, []);

  return (
    <Container isExpanded={isExpanded}>
      <Bar />

      <BoxSemestre
        number={number}
        value={isExpanded}
        onChange={toggleExpanded}
      />

      {disciplinas.map(element => {
        return (
          <BoxDisciplina id={element.id} disciplina={element} bg="#95C085" />
        );
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
