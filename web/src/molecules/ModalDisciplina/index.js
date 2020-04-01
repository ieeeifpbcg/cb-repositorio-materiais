import React from 'react';
import { FiX } from 'react-icons/fi';
import Popup from 'reactjs-popup';

import PropTypes from 'prop-types';

import { CloseButton, Wrapper } from './styles';
import { theme } from '~/styles/theme';

export default function ModalDisciplina({ children, disciplina }) {
  return (
    <Popup trigger={children} lockScroll modal contentStyle={{ width: '90%' }}>
      {close => (
        <Wrapper>
          <CloseButton onClick={close}>
            <FiX size={16} color={theme.primary.active} />
          </CloseButton>

          <h1>{disciplina.nome}</h1>

          <p>{disciplina.ementa}</p>
        </Wrapper>
      )}
    </Popup>
  );
}

ModalDisciplina.propTypes = {
  children: PropTypes.node.isRequired,
  disciplina: PropTypes.shape({
    codigo: PropTypes.string,
    nome: PropTypes.string.isRequired,
    carga_horaria: PropTypes.string.isRequired,
    pre_requisito: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    ementa: PropTypes.string.isRequired,
  }).isRequired,
};
