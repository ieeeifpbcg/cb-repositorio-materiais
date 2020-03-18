import React from 'react';

import PropTypes from 'prop-types';

import SEO from '~/atoms/Seo';

import Footer from '~/molecules/Footer';
import Header from '~/molecules/Header';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

function Layout({ title, children }) {
  return (
    <Container>
      <GlobalStyle />
      <SEO title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
