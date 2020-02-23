import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import ListaSemestre from '~/molecules/ListaSemestre';

import { Container } from './styles';

export default function MatrizCurricular({ matriz, semestres }) {
  const [semestresArray, setSemestresArray] = useState([]);

  useEffect(() => {
    // Cria uma matriz de arrays vazios para separar as diciplinas por semestre
    const newMatriz = Array.from(new Array(semestres), () => []);
    // Iterar sobre a matriz colocando cada disciplina em seu respectivo array
    matriz.forEach(disciplina => {
      const index = Number.parseInt(disciplina.id.charAt(0), 10) - 1;
      if (newMatriz[index]) newMatriz[index].push(disciplina);
    });
    setSemestresArray(newMatriz);
  }, [matriz, semestres]);

  return (
    <Container>
      {semestresArray.map((element, index) => (
        <ListaSemestre key={element.id} disciplinas={element} number={index} />
      ))}
    </Container>
  );
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
