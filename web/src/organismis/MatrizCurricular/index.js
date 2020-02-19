import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

import BoxDisciplina from '~/atoms/BoxDisciplina';
import BoxSemestre from '~/atoms/BoxSemestre';

import { Container, Semestre, Disciplinas } from './styles';

export default function MatrizCurricular({matriz, semestres}) {
  const [semestresArray, setSemestresArray] = useState([]);
  for (let i = 0; i < semestres; i++) {
    setSemestresArray(oldSemestre => [...oldSemestre, []]);
  };

  useEffect(() => {
    matriz.forEach( disc => {
      setSemestresArray(oldSemestre => {
        oldSemestre[Number.parseInt(disc.id.charAt(0))].push(disc);
      });
    });
  }, []);
  return (
    <Container>
      {semestres.map((elementSemestre, index) =>
        (<Semestre> 
          <BoxSemestre> Semestre {index} </BoxSemestre>
          <Disciplinas {}>
            {
              elementSemestre.map(elementDisciplina => 
                return (
                  <li>
                    <BoxDisciplina disciplina={elementDisciplina}/>
                  </li>)
            }
          </Disciplinas>
        </Semestre>)
      }
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
