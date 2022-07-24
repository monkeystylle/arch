import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import { PROJECTS } from './portfolio.constants';

type Props = {};

const Details = ({ project }) => {
  return (
    <>
      <PortfolioPagesWrapper>
        <ProjectImage>
          <Image src={project.image} layout="fill" objectFit="cover" priority />
        </ProjectImage>
        <ProjectTextBox>
          <h1>Project {project.name}</h1>
          <h1>{project.id}</h1>
          <p>{project.details}</p>
        </ProjectTextBox>
      </PortfolioPagesWrapper>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = PROJECTS;

  const paths = data.map(project => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params.id;

  const data = PROJECTS.find(project => project.id.toString() === id);

  return {
    props: {
      project: data,
    },
  };
};

// ****STYLES***

const PortfolioPagesWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 400px;

  position: relative;
  background: tomato;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const ProjectTextBox = styled.div`
  margin-top: 32px;
`;

export default Details;
