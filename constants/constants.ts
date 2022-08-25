import Leader1 from '../public/assets/about/image-about-leader1.jpg';
import Leader2 from '../public/assets/about/image-about-leader2.jpg';
import Leader3 from '../public/assets/about/image-about-leader3.jpg';
import Leader4 from '../public/assets/about/image-about-leader4.jpg';

import Project1 from '../public/assets/portfolio/proj1.jpg';
import Project2 from '../public/assets/portfolio/proj2.jpg';
import Project3 from '../public/assets/portfolio/proj3.jpg';
import Project4 from '../public/assets/portfolio/proj4.jpg';
import Project5 from '../public/assets/portfolio/proj5.jpg';
import Project6 from '../public/assets/portfolio/proj6.jpg';
import Project7 from '../public/assets/portfolio/proj7.jpg';
import Project8 from '../public/assets/portfolio/proj8.jpg';
import Project9 from '../public/assets/portfolio/proj9.jpg';

//LEADERS

export const LEADERS = [
  {
    id: 1,
    name: 'Firstname Lastname',
    role: 'Chief Architect',
    image: Leader1,
  },
  {
    id: 2,
    name: 'Firstname Lastname',
    role: 'Operations Manager',
    image: Leader2,
  },
  {
    id: 3,
    name: 'Firstname Lastname',
    role: 'Chief Architect',
    image: Leader3,
  },
  {
    id: 4,
    name: 'Firstname Lastname',
    role: 'Operations Manager',
    image: Leader4,
  },
];

//FEATURED
export const FEATURED = [
  {
    id: 1,
    project: 1,
    image: Project1,
    projectName: 'Project One',
  },
  {
    id: 2,
    project: 2,
    image: Project2,
    projectName: 'Project Two',
  },
  {
    id: 3,
    project: 3,
    image: Project3,
    projectName: 'Project Three',
  },
];

// BREAKPOINT

export const BREAKPOINTS = {
  phone: 550,
  tablet: 1100,
  laptop: 1500,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

//PROJECTS
export const PROJECTS = [
  {
    id: 1,
    name: 'Project 1',
    image: Project1,
    details: ' put details Here',
  },
  {
    id: 2,
    name: 'Project 2',
    image: Project2,
    details: ' put details Here',
  },
  {
    id: 3,
    name: 'Project 3',
    image: Project3,
    details: ' put details Here',
  },
  {
    id: 4,
    name: 'Project 4',
    image: Project4,
    details: ' put details Here',
  },
  {
    id: 5,
    name: 'Project 5',
    image: Project5,
    details: ' put details Here',
  },
  {
    id: 6,
    name: 'Project 6',
    image: Project6,
    details: ' put details Here',
  },
  {
    id: 7,
    name: 'Project 7',
    image: Project7,
    details: ' put details Here',
  },
  {
    id: 8,
    name: 'Project 8',
    image: Project8,
    details: ' put details Here',
  },
  {
    id: 9,
    name: 'Project 9',
    image: Project9,
    details: ' put details Here',
  },
];
