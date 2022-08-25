import React from 'react';
import styled from 'styled-components';

type Props = {};
const today = new Date();

const Footer = (props: Props) => {
  return <FooterWrapper>Copyright© {today.getFullYear()} ARCH</FooterWrapper>;
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  border-top: 1px solid #eaeaea;
  font-size: 1.4rem;
`;

export default Footer;
