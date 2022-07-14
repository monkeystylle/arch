import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

type Props = {};

const about: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>JJCA | About</title>
        <meta name="keywords" content="jjca" />
      </Head>
      <div>about</div>
    </>
  );
};

export default about;
