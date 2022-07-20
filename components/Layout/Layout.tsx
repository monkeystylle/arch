import React, { ReactNode } from 'react';
import styled from 'styled-components';
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
`;

const Content = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: auto;
  width: 90%;
`;

export default Layout;
