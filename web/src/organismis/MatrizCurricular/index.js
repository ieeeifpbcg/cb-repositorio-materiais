import React from 'react';

import BoxDisciplina from '~/atoms/BoxDisciplina';
import BoxSemestre from '~/atoms/BoxSemestre';

import { Container, Semestre } from './styles';

// { matriz, semestres }
export default function MatrizCurricular() {
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
