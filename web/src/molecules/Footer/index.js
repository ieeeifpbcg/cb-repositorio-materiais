import React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';

import { Wrapper, Container, GitHubLink } from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <strong>Collab Branch © 2020. Projeto feito com </strong>
        <FaHeart color="#D2575B" size="16px" />
        <strong> baseado pelo</strong>
        <a href="https://opendevufcg.org"> OpenDevUFCG </a>
        <GitHubLink>
          <a href="https://github.com/ieeeifpbcg/">
            <FaGithub size="30px" />
            GitHub
          </a>
        </GitHubLink>
      </Container>
    </Wrapper>
  );
}
