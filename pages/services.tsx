import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

type Props = {};

const services: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>JJCA | Services</title>
        <meta name="keywords" content="jjca" />
      </Head>
      <div>SERVICES</div>
    </>
  );
};

export default services;
