import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import type { NextPage } from 'next';
import Image from 'next/image';
import ImageServices from '../public/assets/services/image-services.png';
import AboutHeritage from '../public/assets/about/image-about-heritage.jpg';

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
          <Image src={AboutHeritage} layout="fill" objectFit="fill" priority />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={AboutHeritage} layout="fill" objectFit="fill" priority />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={AboutHeritage} layout="fill" objectFit="fill" priority />
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
