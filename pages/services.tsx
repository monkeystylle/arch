import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import type { NextPage } from 'next';
import Image from 'next/image';
import ImageServices from '../public/assets/services/image-services.png';

type Props = {};

const services: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>JJCA | Services</title>
        <meta name="keywords" content="jjca" />
      </Head>
      <ServicesPageWrapper>
        <ImageWrapper>
          <Image src={ImageServices} layout="fill" objectFit="fill" priority />
        </ImageWrapper>
        <TextBox>
          <h5>&#8226; Architectural Design</h5>
          <h5>
            &#8226; Construction Fit-Outs, Residential, <br />
            Warehouses, Commercial
          </h5>
          <h5>&#8226; Plumbing Design</h5>
          <h5>
            &#8226; Steel, Stainless Steel, Aluminum Composite,
            <br /> Panel Fabrication
          </h5>
          <h5>&#8226; Interior Design</h5>
          <h5>&#8226; Landscaping</h5>
        </TextBox>
      </ServicesPageWrapper>
    </>
  );
};

const ServicesPageWrapper = styled.div`
  min-height: 80vh;
  display: flex;
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;

  filter: grayscale(90%);
`;

const TextBox = styled.div`
  /* margin-top: 100px; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 110%;
    opacity: 0.7;
    margin-bottom: 20px;
    margin-left: 64px;
    white-space: nowrap;
  }
`;

export default services;
