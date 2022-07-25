import styled from 'styled-components';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Paramour from '../public/assets/home/paramour.jpg';
import ImageWelcome from '../public/assets/home/image-welcome.jpg';
import ImageSmallTeam from '../public/assets/home/image-small-team.jpg';
import ImageFeaturedProject1 from '../public/assets/portfolio/proj1.jpg';
import ImageFeaturedProject2 from '../public/assets/portfolio/proj2.jpg';
import ImageFeaturedProject3 from '../public/assets/portfolio/proj3.jpg';

import Head from 'next/head';
import Spacer from '../components/Spacer';
import { ArrowRight } from 'react-feather';
import { QUERIES } from '../constants/constants';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <>
        <Head>
          <title>JJCA | Home</title>
          <meta name="keywords" content="jjca" />
        </Head>
        <PageWrapper>
          {/* Top Content */}
          <TopSectionWrapper>
            <Image src={Paramour} layout="fill" objectFit="cover" priority />
            <TextboxWrapper>
              <h2>
                Seraph <br /> Station{' '}
              </h2>
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
          <Spacer size={128} />

          {/* Welcome */}
          <WelcomeSectionWrapper>
            <WelcomeTextBox>
              <h1>Welcome</h1>
              <h2>
                Welcome to <br /> JJCA{' '}
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
              <Image src={ImageWelcome} layout="fill" objectFit="cover" />
            </WelcomeImageBox>
          </WelcomeSectionWrapper>
          <Spacer size={80} />

          {/* Small Team Big Ideas */}
          <BigIdeasSectionWrapper>
            <Image src={ImageSmallTeam} layout="fill" objectFit="cover" />
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
          <Spacer size={128} />

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
              <FeaturedCard>
                <Image
                  src={ImageFeaturedProject1}
                  layout="fill"
                  objectFit="cover"
                />
                <FeaturedTextBox>
                  <h2>1</h2>
                  <ProjectText>
                    <h3>Project One</h3>
                    <button>View Project</button>
                  </ProjectText>
                </FeaturedTextBox>
              </FeaturedCard>
              <FeaturedCard>
                <Image
                  src={ImageFeaturedProject2}
                  layout="fill"
                  objectFit="cover"
                />
                <FeaturedTextBox>
                  <h2>2</h2>
                  <ProjectText>
                    <h3>Project Two</h3>
                    <button>View Project</button>
                  </ProjectText>
                </FeaturedTextBox>
              </FeaturedCard>
              <FeaturedCard>
                <Image
                  src={ImageFeaturedProject3}
                  layout="fill"
                  objectFit="cover"
                />
                <FeaturedTextBox>
                  <h2>3</h2>
                  <ProjectText>
                    <h3>Project Three</h3>
                    <button>View Project</button>
                  </ProjectText>
                </FeaturedTextBox>
              </FeaturedCard>
            </FeaturedFlexWrapper>
          </FeaturedSectionWrapper>
          <Spacer size={128} />
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
  }

  p {
    margin-top: 16px;
    color: white;
    font-size: 1.2rem;
    line-height: 1.4;
    text-align: left;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 1.1rem;
    }
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0 80px;
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
    color: #f0f0f5;
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
      font-size: 3rem;
    }
  }

  p {
    width: 446px;
    margin-left: 250px;
    color: #1b1d23;
    font-size: 1.2rem;
    line-height: 1.4;
    text-align: left;

    @media ${QUERIES.tabletAndSmaller} {
      margin-left: 16px;
      width: 85%;
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
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0 80px;
  }
`;

//FEATURED

const FeaturedSectionWrapper = styled.section``;

const FeaturedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;

  h2 {
    font-size: 4.2rem;
    font-weight: 600;
    @media ${QUERIES.tabletAndSmaller} {
      font-size: 3.5rem;
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
`;

const FeaturedFlexWrapper = styled.div`
  display: flex;
  gap: 0px 32px;
`;

const FeaturedCard = styled.div`
  position: relative;
  height: 560px;
  background: tomato;
  flex: 1;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: brightness(85%);
  }

  @media ${QUERIES.tabletAndSmaller} {
    height: 400px;
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
