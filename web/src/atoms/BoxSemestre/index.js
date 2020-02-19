import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function BoxSemestre({ children }) {
  return <Container>{children}</Container>;
}

BoxSemestre.propTypes = {
  children: PropTypes.node.isRequired,
};
