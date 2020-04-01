import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import ListaSemestre from '~/molecules/ListaSemestre';

import { Container, BoxSemestres } from './styles';

export default function MatrizCurricular({ matriz }) {
  const [semestresArray, setSemestresArray] = useState([]);

  useEffect(() => {
    // Cria uma matriz de arrays vazios para separar as diciplinas por semestre

    const semestres = matriz.reduce((array, disc) => {
      const index = Number.parseInt(disc.codigo.charAt(1), 10) - 1;

      if (index < 0) return array;

      array[index] = [...(array.length > index ? array[index] : []), disc];

      return array;
    }, []);

    const newMatriz = [];

    for (let index = 0; index < semestres.length; index += 2)
      newMatriz.push([
        semestres[index],
        semestres[index + 1],
        index,
        index + 1,
      ]);

    setSemestresArray(newMatriz);
  }, [matriz]);

  return (
    <Container>
      {semestresArray.map(([dist1, dist2, index1, index2]) => (
        <BoxSemestres>
          <ListaSemestre
            key={dist1.codigo}
            disciplinas={dist1}
            number={index1}
          />

          <ListaSemestre
            key={dist2.codigo}
            disciplinas={dist2}
            number={index2}
          />
        </BoxSemestres>
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
};
