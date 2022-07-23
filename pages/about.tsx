import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import type { NextPage } from 'next';
import Image from 'next/image';
import AboutTop from '../public/assets/about/image-about-top.jpg';
import AboutHeritage from '../public/assets/about/image-about-heritage.jpg';
import Spacer from '../components/Spacer';

import { LEADERS } from '../constants/constants';

const about: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>JJCA | About</title>
        <meta name="keywords" content="jjca" />
      </Head>
      <AboutPageWrapper>
        {/* TOP SECTION */}
        <TopSectionWrapper>
          <AboutImageWrapper>
            <Image src={AboutTop} layout="fill" objectFit="fill" priority />
          </AboutImageWrapper>
          <AboutTextBox>
            <h1>About</h1>
            <h2>
              Your team of <br /> professionals
            </h2>
            <p>
              Our small team of world-class professionals will work
              <br /> with you every step of the way.Strong relationships are
              <br />
              at the core of everything we do. This extends to the
              <br /> relationship our projects have with their surroundings.
            </p>
          </AboutTextBox>
        </TopSectionWrapper>
        <Spacer size={192} />

        {/* HERITAGE */}
        <HeritageSectionWrapper>
          <HeritageTextBox>
            <h2>
              Our
              <br /> Heritage
            </h2>
            <p>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
              <br />
              <br />
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
              <br />
              <br />
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </HeritageTextBox>
          <HeritageImageWrapper>
            <Image
              src={AboutHeritage}
              layout="fill"
              objectFit="cover"
              priority
            />
          </HeritageImageWrapper>
        </HeritageSectionWrapper>
        <Spacer size={160} />

        {/* THE LEADERS */}
        <TheLeadersSectionWrapper>
          <LeadersTextBox>
            <h2>
              The <br />
              Leaders
            </h2>
          </LeadersTextBox>
          <LeadersImageBox>
            {LEADERS.map(leader => (
              <LeaderCard key={leader.id}>
                <ImageWrapper>
                  <Image src={leader.image} layout="fill" objectFit="fill" />
                </ImageWrapper>
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </LeaderCard>
            ))}
          </LeadersImageBox>
        </TheLeadersSectionWrapper>
        <Spacer size={128} />
      </AboutPageWrapper>
    </>
  );
};

const AboutPageWrapper = styled.div``;

// TOP SECTION
const TopSectionWrapper = styled.section`
  height: 720px;
  width: 100%;
  margin: 0 auto;
  /* background-color: tomato; */

  position: relative;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: brightness(50%);
  }
`;

const AboutImageWrapper = styled.div`
  width: 700px;
  height: 100%;
  background-color: lightsalmon;
  position: relative;
`;

const AboutTextBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  width: 657px;
  height: 501px;

  h1 {
    color: #eeeff4;
    font-size: 15.3rem;
    line-height: 0.3;
    font-weight: 600;
    margin-left: -24px;
    /* filter: brightness(98%); */
  }

  h2 {
    font-size: 4.5rem;
    line-height: 80%;
    margin: 150px 0px 0px 170px;
    font-weight: 600;
    color: #1b1d23;
  }

  p {
    color: #60636d;
    font-size: 1.2rem;
    line-height: 140%;
    margin-left: 170px;
    margin-top: 40px;
  }
`;

// HERITAGE

const HeritageSectionWrapper = styled.section`
  height: 650px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 54%;
`;

const HeritageTextBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 60px;

  h2 {
    font-size: 4.5rem;
    line-height: 80%;
    color: #1b1d23;
    font-weight: 600;
  }

  p {
    color: #60636d;
    font-size: 1.2rem;
    line-height: 140%;
    margin-top: 48px;
  }
`;

const HeritageImageWrapper = styled.div`
  position: relative;
`;

// THE LEADERS

const TheLeadersSectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeadersTextBox = styled.div`
  h2 {
    font-size: 4.5rem;
    line-height: 56px;

    font-weight: 600;
  }
`;

const LeadersImageBox = styled.div`
  display: grid;
  grid-template-columns: 325px 325px;
  gap: 32px;
  justify-content: end;
`;

const LeaderCard = styled.div`
  width: 100%;

  h3 {
    margin-top: 12px;
    font-size: 1.4rem;
    color: #1b1d23;
  }

  p {
    font-size: 1.4rem;
    color: #1b1d23;
    opacity: 0.6;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 325px;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: brightness(90%);
    border-radius: 4px;
  }
`;

export default about;
