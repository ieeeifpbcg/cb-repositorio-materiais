import React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';

import { Container, AboutText, GitHubLink } from './styles';

export default function Footer() {
  return (
    <Container>
      <AboutText>
        <h4>
          Collab Branch © 2020. Projeto feito com{' '}
          <FaHeart color="#D2575B" size="16px" /> baseado pelo
        </h4>
        <a href="https://opendevufcg.org"> OpenDevUFCG </a>
      </AboutText>
      <GitHubLink>
        <a href="https://github.com/ieeeifpbcg/">
          <FaGithub size="30px" />
          GitHub
        </a>
      </GitHubLink>
    </Container>
  );
}
