import React from 'react';

import SwitchCursos from '~/molecules/SwitchCursos';

import MatrizCurricular from '~/organismis/MatrizCurricular';

import Layout from '~/templates/Layout';

import { telematica } from '~/assets/matrizTelematica.json';

const IndexPage = () => (
  <Layout title="Home">
    <SwitchCursos />
    <MatrizCurricular matriz={telematica} />
  </Layout>
);
export default IndexPage;
