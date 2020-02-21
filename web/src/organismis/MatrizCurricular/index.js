import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import ListaDisciplinas from '~/molecules/ListaDisciplinas';

import { Container } from './styles';

export default function MatrizCurricular({ matriz, semestres }) {
  const semestresArray = [];
  useEffect(() => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < semestres + 1; i++) {
      semestresArray.push([]);
    }
    matriz.forEach(disc => {
      // eslint-disable-next-line radix
      semestresArray[Number.parseInt(disc.id.charAt(0))].push(disc);
    });
  }, [matriz, semestres, semestresArray]);

  const listasDisciplinas = semestresArray.map((element, index) => (
    <ListaDisciplinas key={element.id} disciplinas={element} numero={index} />
  ));
  return <Container>{listasDisciplinas}</Container>;
}

MatrizCurricular.propTypes = {
  matriz: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
      ch: PropTypes.string.isRequired,
      pr: PropTypes.string.isRequired,
    })
  ).isRequired,
  semestres: PropTypes.number.isRequired,
};
