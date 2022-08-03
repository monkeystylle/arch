import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import type { NextPage } from 'next';
import Image from 'next/image';

import seven from '../public/assets/portfolio/proj7.jpg';
import eight from '../public/assets/portfolio/proj8.jpg';
import nine from '../public/assets/portfolio/proj9.jpg';

type Props = {};

const services: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>JJCA | Services</title>
        <meta name="keywords" content="jjca" />
      </Head>
      <GridWrapper>
        <ImageWrapper>
          <Image src={seven} layout="fill" objectFit="fill" priority />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={eight} layout="fill" objectFit="fill" priority />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={nine} layout="fill" objectFit="fill" priority />
        </ImageWrapper>
      </GridWrapper>
    </>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 64px;
`;

const ImageWrapper = styled.div`
  border: 5px solid tomato;
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

export default services;
