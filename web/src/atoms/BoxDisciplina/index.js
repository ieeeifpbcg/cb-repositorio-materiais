import React, { useState, useCallback } from 'react';

import PropTypes from 'prop-types';

import ModalDisciplina from '~/molecules/ModalDisciplina';

import {
  Wrapper,
  Container,
  Nome,
  CargaHoraria,
  IdDisciplina,
  PreReq,
} from './styles';

export default function BoxDisciplina({ disciplina, bg }) {
  const [modalOpen, setModalOpen] = useState(false);

  const onClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleButton = useCallback(() => {
    setModalOpen(true);
  }, []);

  return (
    <Wrapper>
      <ModalDisciplina
        disciplina={disciplina}
        isOpen={modalOpen}
        onClose={onClose}
      />

      <Container
        type="button"
        style={{ background: bg }}
        onClick={handleButton}
      >
        <Nome>{disciplina.nome}</Nome>
        <CargaHoraria>{disciplina.carga_horaria}</CargaHoraria>
        <IdDisciplina>{disciplina.codigo}</IdDisciplina>
        <PreReq>{disciplina.pre_requisito}</PreReq>
      </Container>
    </Wrapper>
  );
}

BoxDisciplina.propTypes = {
  disciplina: PropTypes.shape({
    codigo: PropTypes.string,
    nome: PropTypes.string.isRequired,
    carga_horaria: PropTypes.string.isRequired,
    pre_requisito: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    ementa: PropTypes.string.isRequired,
  }).isRequired,

  bg: PropTypes.string.isRequired,
};
