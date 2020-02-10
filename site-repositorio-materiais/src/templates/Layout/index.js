import React from 'react';

import PropTypes from 'prop-types';

import SEO from '~/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

function Layout({ children, title }) {
  return (
    <Container>
      <GlobalStyle />
      <SEO title={title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://github.com/ieeeifpbcg">IEEE IFPB-CG</a>
      </footer>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
