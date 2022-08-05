import Leader1 from '../public/assets/about/image-about-leader1.jpeg';
import Leader2 from '../public/assets/about/image-about-leader2.jpg';

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
    image: Leader1,
  },
  {
    id: 4,
    name: 'Firstname Lastname',
    role: 'Operations Manager',
    image: Leader2,
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
