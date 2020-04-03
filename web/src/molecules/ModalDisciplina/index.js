import React from 'react';
import { emojify } from 'react-emojione';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';

import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';

import Markdown from './readme.md';

import {
  CloseButton,
  Wrapper,
  ModalStyle,
  MarkdownItem,
  H1Markdown,
  H3Markdown,
  LinkList,
  H1StyleEmoji,
  H3StyleEmoji,
} from './styles';
import { theme } from '~/styles/theme';

// disciplina
export default function ModalDisciplina({ isOpen, onClose }) {
  return (
    <Modal style={ModalStyle} isOpen={isOpen} onRequestClose={onClose}>
      <CloseButton onClick={onClose}>
        <FiX size={16} color={theme.primary.text} />
      </CloseButton>
      <Wrapper>
        <MDXProvider
          components={{
            /* eslint-disable react/prop-types */

            ul: props => {
              const { children } = props;
              return <LinkList> {children} </LinkList>;
            },

            /* eslint-disable react/prop-types */

            li: props => {
              const { children } = props;
              return <MarkdownItem> {children} </MarkdownItem>;
            },
            /* eslint-disable react/prop-types */
            h1: props => {
              const { children } = props;
              return (
                <H1Markdown> {emojify(children, H1StyleEmoji)} </H1Markdown>
              );
            },

            h3: props => {
              const { children } = props;
              return (
                <H3Markdown> {emojify(children, H3StyleEmoji)} </H3Markdown>
              );
            },
          }}
        >
          <Markdown />
        </MDXProvider>
      </Wrapper>
    </Modal>
  );
}

ModalDisciplina.propTypes = {
  disciplina: PropTypes.shape({
    codigo: PropTypes.string,
    nome: PropTypes.string.isRequired,
    carga_horaria: PropTypes.string.isRequired,
    pre_requisito: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    ementa: PropTypes.string.isRequired,
  }).isRequired,

  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
