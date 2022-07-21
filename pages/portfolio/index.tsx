import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Spacer from '../../components/Spacer';
import { PROJECTS } from './portfolio.constants';

type Props = {};

interface PortfolioProps {
  projects: Iprojects[];
}

interface Iprojects {
  id: number;
  name: number;
  image: StaticImageData;
  details: string;
}

const portfolio: NextPage<PortfolioProps> = ({ projects }) => {
  console.log('hereeeeeeee', projects);

  return (
    <>
      <Head>
        <title>JJCA | Portfolio</title>
        <meta name="keywords" content="jjca" />
      </Head>
      <PortfolioPageWrapper>
        {projects.map(project => (
          <Link href={`/portfolio/${project.id}`} key={project.name}>
            <ProjectsCard>
              <Image
                src={project.image}
                layout="fill"
                objectFit="cover"
                priority
              />
              <ProjectsTextBox>
                <ProjectText>
                  <h3>Project {project.name}</h3>
                  <button>View Project</button>
                </ProjectText>
              </ProjectsTextBox>
            </ProjectsCard>
          </Link>
        ))}
      </PortfolioPageWrapper>
      <Spacer size={128} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = PROJECTS;

  return {
    props: {
      projects: data,
    },
  };
};

// *** STYLES ***

const PortfolioPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 560px;
  gap: 32px;
`;

const ProjectsCard = styled.div`
  position: relative;
  background: tomato;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: brightness(80%);
  }
`;

const ProjectsTextBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ProjectText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 32px;
  color: white;
  font-size: 1.4rem;
  width: max-content;

  button {
    font-weight: 400;
    font-size: 1.3rem;
    opacity: 0.8;
  }
`;

export default portfolio;
