import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import PropTypes from 'prop-types';

export const wrapRootElement = ({ element }) => (
  <HelmetProvider>{element}</HelmetProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
