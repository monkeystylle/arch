import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants/constants';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;

  @media ${QUERIES.laptopAndSmaller} {
    width: 85%;
  }
  @media ${QUERIES.tabletAndSmaller} {
    width: 94%;
  }
`;

const Content = styled.div`
  flex: 1;
`;

export default Layout;
