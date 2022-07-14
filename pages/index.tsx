import styled from 'styled-components';
import type { NextPage } from 'next';

import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <>
        <Head>
          <title>JJCA | Home</title>
          <meta name="keywords" content="jjca" />
        </Head>
        <PageWrapper>
          <h1>HOMEPAGE</h1>
        </PageWrapper>
      </>
    </>
  );
};

const PageWrapper = styled.div``;

export default Home;
