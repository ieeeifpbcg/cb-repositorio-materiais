import React from 'react';

import PropTypes from 'prop-types';

import { parseName } from '~/util/DisciplinaParser';

import {
  Wrapper,
  Container,
  Nome,
  CargaHoraria,
  IdDisciplina,
  PreReq,
} from './styles';

export default function BoxDisciplina({ disciplina, bg }) {
  return (
    <Wrapper>
      <Container type="button" style={{ background: bg }}>
        <Nome>{parseName(disciplina.nome)}</Nome>
        <CargaHoraria>{disciplina.ch}</CargaHoraria>
        <IdDisciplina>{disciplina.id}</IdDisciplina>
        <PreReq>{disciplina.pr}</PreReq>
      </Container>
    </Wrapper>
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
