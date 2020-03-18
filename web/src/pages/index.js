import React from 'react';

import Footer from '~/molecules/Footer';
import Header from '~/molecules/Header';
import SwitchCursos from '~/molecules/SwitchCursos';

import MatrizCurricular from '~/organismis/MatrizCurricular';

import Layout from '~/templates/Layout';

import matriz from '~/assets/matriz_acentuada.json';

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <SwitchCursos />
    <MatrizCurricular matriz={matriz} semestres={6} />
    <Footer />
  </Layout>
);

export default IndexPage;
