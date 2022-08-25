import styled from 'styled-components';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Paramour from '../public/assets/home/paramour.jpg';
import ImageWelcome from '../public/assets/home/image-welcome.jpg';
import ImageSmallTeam from '../public/assets/home/image-small-team.jpg';

import Head from 'next/head';
import Spacer from '../components/Spacer';
import { ArrowRight } from 'react-feather';
import { QUERIES, FEATURED } from '../constants/constants';
import useWindowDimensions from '../hooks/use-window-dimension.hook';

const Home: NextPage = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <>
      <>
        <Head>
          <title>ARCH | Home</title>
          <meta name="keywords" content="jjca" />
        </Head>
        <PageWrapper>
          {/* Top Content */}
          <TopSectionWrapper>
            <Image
              src={Paramour}
              alt=""
              layout="fill"
              objectFit="cover"
              priority
            />
            <TextboxWrapper>
              <h2>ARCH</h2>
              <h3>Architectural+Build</h3>
              <p>
                The Seraph Station project challenged us to design a <br />
                unique station that would transport people through
                <br /> time. The result is a fresh and futuristic model inspired
                <br /> by space stations.
              </p>
              <Button onClick={() => router.push('/portfolio')}>
                See our Portfolio
                <ArrowRight color="white" size={38} strokeWidth={1} />
              </Button>
            </TextboxWrapper>
          </TopSectionWrapper>
          <Spacer size={width <= 1100 ? 80 : 128} />

          {/* Welcome */}
          <WelcomeSectionWrapper>
            <WelcomeTextBox>
              <h1>Welcome</h1>
              <h2>
                Welcome to <br /> ARCH{' '}
              </h2>
              <p>
                We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
                <br />
                <br />
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
                <br />
                <br />
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </p>
            </WelcomeTextBox>
            <WelcomeImageBox>
              <Image
                src={ImageWelcome}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </WelcomeImageBox>
          </WelcomeSectionWrapper>
          <Spacer size={80} />

          {/* Small Team Big Ideas */}
          <BigIdeasSectionWrapper>
            <Image
              src={ImageSmallTeam}
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <BigIdeasTextBox>
              <h2>
                Small Team, <br /> Big Ideas{' '}
              </h2>
              <Button onClick={() => router.push('/about')}>
                About Us
                <ArrowRight color="white" size={38} strokeWidth={1} />
              </Button>
            </BigIdeasTextBox>
          </BigIdeasSectionWrapper>
          <Spacer size={width <= 1100 ? 90 : 128} />

          {/* Featured */}
          <FeaturedSectionWrapper>
            <FeaturedHeader>
              <h2>Featured</h2>
              <FeaturedButton onClick={() => router.push('/portfolio')}>
                See All
                <ArrowRight color="white" size={38} strokeWidth={1} />
              </FeaturedButton>
            </FeaturedHeader>
            <FeaturedFlexWrapper>
              {FEATURED.map(feature => (
                <FeaturedCard
                  key={feature.id}
                  onClick={() => router.push(`/portfolio/${feature.id}`)}
                >
                  <Image
                    src={feature.image}
                    alt={feature.projectName}
                    layout="fill"
                    objectFit="cover"
                  />
                  <FeaturedTextBox>
                    <h2>{feature.project}</h2>
                    <ProjectText>
                      <h3>{feature.projectName}</h3>
                      <button>View Project</button>
                    </ProjectText>
                  </FeaturedTextBox>
                </FeaturedCard>
              ))}
            </FeaturedFlexWrapper>
          </FeaturedSectionWrapper>
          <Spacer size={width <= 1100 ? 60 : 128} />
        </PageWrapper>
      </>
    </>
  );
};

const PageWrapper = styled.div`
  /* border: 4px solid tomato; */
`;

// TOP PAGE
const TopSectionWrapper = styled.div`
  height: 680px;
  width: 100%;
  margin: 0 auto;
  background-color: tomato;

  position: relative;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: brightness(50%);
  }

  @media ${QUERIES.tabletAndSmaller} {
    height: 520px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    height: 500px;
  }
`;

const TextboxWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 190px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 5.4rem;
    color: white;
    font-weight: 600;
    line-height: 0.85;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 4.8rem;
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 3rem;
    }
  }

  h3 {
    font-size: 4rem;
    color: white;
    font-weight: 600;
    line-height: 0.85;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 3.5rem;
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.6rem;
    }
  }

  p {
    margin-top: 16px;
    color: white;
    font-size: 1.2rem;
    line-height: 1.4;
    text-align: left;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 1.125rem;
    }
    @media ${QUERIES.phoneAndSmaller} {
      br {
        display: none;
      }
    }
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0 80px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 0 20px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 32px;
  background: #1b1d22;
  color: white;
  padding: 16px 32px;
  width: max-content;
  font-size: 1.4rem;

  &:hover {
    background: #404a69;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.2rem;
    padding: 12px 28px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1.1rem;
    padding: 8px 24px;
    margin-top: 54px;
  }
`;

//WELCOME SECTION

const WelcomeSectionWrapper = styled.section`
  /* height: 85vh; */
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const WelcomeTextBox = styled.div`
  height: 100%;
  width: 100%;

  h1 {
    color: gainsboro;
    position: absolute;
    left: 20px;
    font-size: 16rem;

    font-weight: 700;
    line-height: 200px;
    z-index: 1;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 10rem;
      left: 0px;
      line-height: 0.9;
    }
    @media ${QUERIES.phoneAndSmaller} {
      display: none;
    }
  }

  h2 {
    padding-top: 167px;
    padding-left: 250px;
    margin-bottom: 24px;
    font-size: 4.2rem;
    line-height: 0.85;
    font-weight: 600;
    color: #60636c;

    @media ${QUERIES.tabletAndSmaller} {
      padding-left: 16px;
      /* font-size: 3rem; */
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 16px;
      padding-top: 130px;
    }
    @media ${QUERIES.phoneAndSmaller} {
      padding-top: revert;
      font-size: 2.6rem;

      margin-bottom: 12px;
    }
  }

  p {
    width: 446px;
    margin-left: 250px;
    color: #1b1d23;
    font-size: 1.125rem;
    line-height: 1.4;
    text-align: left;

    @media ${QUERIES.tabletAndSmaller} {
      margin-left: 16px;
      width: 80%;
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.125rem;
    }
  }
`;

const WelcomeImageBox = styled.div`
  height: 538px;
  width: 355px;
  top: 88px;
  right: 0px;
  z-index: -1;
  background-color: tomato;
  position: absolute;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

//BIG IDEAS
const BigIdeasSectionWrapper = styled.section`
  height: 520px;
  width: 100%;
  margin: 0 auto;
  background-color: tomato;

  position: relative;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: brightness(50%);
  }

  @media ${QUERIES.tabletAndSmaller} {
    height: 400px;
  }
`;

const BigIdeasTextBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 190px;

  h2 {
    font-size: 4.2rem;
    color: white;
    font-weight: 600;
    line-height: 0.85;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 3.5rem;
    }
    @media ${QUERIES.tabletAndSmaller} {
      font-size: 2.6rem;
    }
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0 80px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 0 20px;
  }
`;

//FEATURED

const FeaturedSectionWrapper = styled.section``;

const FeaturedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  color: #60636c;

  h2 {
    font-size: 4.2rem;
    font-weight: 600;
    @media ${QUERIES.tabletAndSmaller} {
      font-size: 3.5rem;
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 2.8rem;
      line-height: 0.1;
    }
  }
`;

const FeaturedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  background: #1b1d22;
  color: white;
  padding: 16px 32px;
  width: max-content;
  font-size: 1.4rem;

  &:hover {
    background: #404a69;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.2rem;
    padding: 12px 28px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const FeaturedFlexWrapper = styled.div`
  display: flex;
  gap: 0px 32px;

  @media ${QUERIES.phoneAndSmaller} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px 0px;
  }
`;

const FeaturedCard = styled.div`
  position: relative;
  height: 560px;
  flex: 1;
  cursor: pointer;

  transition: transform 500ms ease;

  &:hover {
    transform: scale(0.95);
    filter: brightness(130%);

    h3,
    button {
      opacity: 0;
    }
  }

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: brightness(85%);

    @media ${QUERIES.phoneAndSmaller} {
      border-radius: 4px;
    }
  }

  @media ${QUERIES.tabletAndSmaller} {
    height: 350px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    height: 200px;
  }
`;

const FeaturedTextBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  h2 {
    position: absolute;
    top: 40px;
    right: 0;
    color: white;
    opacity: 0.5;
    font-size: 14rem;
    line-height: normal;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 7rem;
    }
    @media ${QUERIES.phoneAndSmaller} {
      top: 10px;
      font-size: 6rem;
    }
  }
`;

const ProjectText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 32px;
  color: white;
  font-size: 1.4rem;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.2rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px;
    line-height: 1.2;
  }

  button {
    font-weight: 400;
    font-size: 1.3rem;
    opacity: 0.8;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 1.1rem;
    }
  }
`;

export default Home;
