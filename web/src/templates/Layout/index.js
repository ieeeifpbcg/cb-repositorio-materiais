import React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';

import PropTypes from 'prop-types';

import SEO from '~/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

function Layout({ title, children }) {
  return (
    <Container>
      <GlobalStyle />
      <SEO title={title} />
      <main> {children} </main>
      <footer>
        <div className="opendev">
          <h4>
            Collab Branch © 2020. Projeto feito com{' '}
            <FaHeart color="#D2575B" size="16px" /> baseado pelo
          </h4>
          <a href="https://opendevufcg.org"> OpenDevUFCG </a>
        </div>
        <div className="gitlink">
          <a href="https://github.com/ieeeifpbcg/">
            <FaGithub size="30px" />
            GitHub
          </a>
        </div>
      </footer>
    </Container>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
