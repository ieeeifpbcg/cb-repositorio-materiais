import React from 'react';

import PropTypes from 'prop-types';

import BoxDisciplina from '~/atoms/BoxDisciplina';
import BoxSemestre from '~/atoms/BoxSemestre';

import { Container, Semestre } from './styles';

export default function MatrizCurricular({matriz, semestres}) {
  return (
    <Container>
      <Semestre>
        <BoxSemestre> Semestre I </BoxSemestre>
        <li>
          <BoxDisciplina
            disciplina={{
              id: '11',
              nome: 'introdução-à-telemática',
              ch: '33',
              pr: '0',
            }}
          />
        </li>
      </Semestre>

      <Semestre>
        <BoxSemestre> Semestre I </BoxSemestre>
        <li>
          <BoxDisciplina
            bg="#95C085"
            disciplina={{
              id: '11',
              nome: 'introdução-à-telemática',
              ch: '33',
              pr: '0',
            }}
          />
        </li>
      </Semestre>
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
