import React from 'react';

import SwitchCursos from '~/molecules/SwitchCursos';

import MatrizCurricular from '~/organismis/MatrizCurricular';

import Layout from '~/templates/Layout';

import matriz from '~/assets/matriz_acentuada.json';

const IndexPage = () => (
  <Layout title="Home">
    <SwitchCursos />
    <MatrizCurricular matriz={matriz} />
  </Layout>
);

export default IndexPage;
