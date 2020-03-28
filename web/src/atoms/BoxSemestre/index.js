import React from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import PropTypes from 'prop-types';

import { ButtonSemestre } from './styles';

export default function BoxSemestre({ number, value, onChange }) {
  return (
    <ButtonSemestre onClick={onChange}>
      {number + 1}° semestre
      {value ? <MdExpandLess size={30} /> : <MdExpandMore size={30} />}
    </ButtonSemestre>
  );
}

BoxSemestre.propTypes = {
  number: PropTypes.number.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
