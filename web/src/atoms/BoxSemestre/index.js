import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function BoxSemestre({ number }) {
  return <Container>{number + 1}° semestre</Container>;
}

BoxSemestre.propTypes = {
  number: PropTypes.number.isRequired,
};
