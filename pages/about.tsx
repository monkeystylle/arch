import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import type { NextPage } from 'next';
import Image from 'next/image';
import AboutTop from '../public/assets/about/image-about-top.jpg';
import AboutTopTablet from '../public/assets/about/image-about-top-tablet.jpg';
import AboutHeritage from '../public/assets/about/image-about-heritage.jpg';
import Spacer from '../components/Spacer';

import { LEADERS, QUERIES } from '../constants/constants';
import useWindowDimensions from '../hooks/use-window-dimension.hook';

const about: NextPage = (props: any) => {
  const { width } = useWindowDimensions();

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
            <Image
              src={width <= 1100 ? AboutTopTablet : AboutTop}
              layout="fill"
              objectFit="fill"
              priority
            />
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

        <Spacer size={width <= 1100 ? 40 : 128} />

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
        <Spacer size={width <= 600 ? 40 : width <= 1100 ? 80 : 160} />

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
        <Spacer size={width <= 600 ? 20 : width <= 1100 ? 64 : 128} />
      </AboutPageWrapper>
    </>
  );
};

const AboutPageWrapper = styled.div``;

// TOP SECTION
const TopSectionWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  position: relative;
  /* border: 5px solid gold; */
`;

const AboutImageWrapper = styled.div`
  width: 700px;
  height: 720px;
  position: relative;
  /* border: 5px solid gray; */

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    height: 350px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    height: 250px;
  }

  & > span {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0), 0 0px 20px 0 rgba(0, 0, 0, 0);

    @media ${QUERIES.tabletAndSmaller} {
      filter: brightness(70%);
    }
  }
`;

const AboutTextBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  width: 657px;
  height: 501px;

  @media ${QUERIES.tabletAndSmaller} {
    position: revert;
    height: revert;
    width: 100%;
  }

  h1 {
    color: #eeeff4;
    font-size: 15.3rem;
    line-height: 0.3;
    font-weight: 600;
    margin-left: -24px;

    @media ${QUERIES.tabletAndSmaller} {
      display: none;
    }
  }

  h2 {
    font-size: 4.5rem;
    line-height: 80%;
    margin: 150px 0px 0px 170px;
    font-weight: 600;
    color: #1b1d23;
    @media ${QUERIES.tabletAndSmaller} {
      margin: 0px 0px;
      font-size: 3.5rem;
      margin-top: 32px;
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.75rem;
    }
  }
  p {
    color: #60636d;
    font-size: 1.2rem;
    line-height: 140%;
    margin-left: 170px;
    margin-top: 40px;
    @media ${QUERIES.tabletAndSmaller} {
      margin: 0px 0px;
      margin-top: 16px;

      br {
        display: none;
      }
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.125rem;
    }
  }
`;

// HERITAGE

const HeritageSectionWrapper = styled.section`
  height: 650px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 54%;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
    height: revert;
  }
`;

const HeritageTextBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 60px;

  @media ${QUERIES.phoneAndSmaller} {
    padding-right: revert;
  }

  h2 {
    font-size: 4.5rem;
    line-height: 80%;
    color: #1b1d23;
    font-weight: 600;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 3.5rem;

      br {
        display: none;
      }
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.75rem;
      br {
        display: revert;
      }
    }
  }

  p {
    color: #60636d;
    font-size: 1.125rem;
    line-height: 140%;
    margin-top: 48px;

    @media ${QUERIES.tabletAndSmaller} {
      margin-top: 16px;
    }
    @media ${QUERIES.phoneAndSmaller} {
    }
  }
`;

const HeritageImageWrapper = styled.div`
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

// THE LEADERS

const TheLeadersSectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

const LeadersTextBox = styled.div`
  h2 {
    font-size: 4.5rem;
    line-height: 56px;
    font-weight: 600;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 3.5rem;
      padding-left: 32px;

      br {
        display: none;
      }
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.75rem;
    }
  }
`;

const LeadersImageBox = styled.div`
  display: grid;
  grid-template-columns: 325px 325px;
  gap: 32px;
  justify-content: end;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    justify-content: center;
    align-items: center;
    padding: 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-top: 0px;
  }
`;

const LeaderCard = styled.div`
  width: 100%;

  h3 {
    margin-top: 12px;
    font-size: 1.4rem;
    color: #1b1d23;
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: #1b1d23;
    opacity: 0.6;
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.125rem;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 325px;

  @media ${QUERIES.tabletAndSmaller} {
    height: auto;
    padding-top: 100%;
  }

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: brightness(90%);
    border-radius: 4px;
  }
`;

export default about;
