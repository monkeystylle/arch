import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

type Props = {};

const portfolio: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>JJCA | Portfolio</title>
        <meta name="keywords" content="jjca" />
      </Head>
      <div>Portfolio</div>
    </>
  );
};

export default portfolio;
