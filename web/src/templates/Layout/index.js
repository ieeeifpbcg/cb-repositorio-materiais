import React from 'react';
import { FaGithub } from 'react-icons/fa';

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
        <div>
          <h4>{'Collab Branch © 2020. Projeto feito com <3 baseado pelo '}</h4>
          <a className="ufcg" href="https://opendevufcg.org">
            OpenDevUFCG
          </a>
        </div>
        <div>
          <a href="https://github.com/ieeeifpbcg/">
            <FaGithub size="30px" />
            Github
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
