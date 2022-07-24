import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Spacer from '../Spacer';

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();

  return (
    <NavbarWrapper>
      <Nav>
        <LogoWrapper>
          <Image
            onClick={() => router.push('/')}
            src="/jjca2.png"
            width={128}
            height={77}
          />
        </LogoWrapper>

        <Link href="/about">
          <a>ABOUT US</a>
        </Link>
        <Link href="/portfolio">
          <a>PORTFOLIO</a>
        </Link>
        <Link href="/services">
          <a>SERVICES</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </Nav>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  margin: 10px auto 0px;
  padding: 12px 0;
  width: 100%;
  /* border-bottom: 1px solid #ddd; */
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
  height: 100%;
  align-items: center;
  font-size: 1.5rem;
  justify-content: start;
`;

const LogoWrapper = styled.div`
  font-size: 2rem;
  height: 100%;
`;

export default Navbar;
