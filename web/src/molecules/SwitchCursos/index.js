import React from 'react';

import { Container } from './styles';
import { theme } from '~/styles/theme';

const SwitchCursos = () => (
  <Container>
    <button
      type="button"
      style={{ background: theme.primary.active, opacity: 0.5 }}
    >
      Eng. da Comp.
    </button>
    <button type="button" style={{ background: '#3FB59B', opacity: 1 }}>
      Telemática
    </button>
  </Container>
);

export default SwitchCursos;
