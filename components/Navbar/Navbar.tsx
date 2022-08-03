import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Spacer from '../Spacer';
import Logo from '../../public/assets/nav/logo.svg';
import { QUERIES } from '../../constants/constants';
import { Menu } from 'react-feather';

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();

  return (
    <NavbarWrapper>
      <Nav>
        <LogoWrapper>
          <Image
            onClick={() => router.push('/')}
            src={Logo}
            width={97}
            height={40}
            priority
          />
        </LogoWrapper>

        <Link href="/about">
          <a>ABOUT US</a>
        </Link>
        <Link href="/portfolio">
          <a>PORTFOLIO</a>
        </Link>

        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </Nav>
      <Mobile>
        <Image
          onClick={() => router.push('/')}
          src={Logo}
          width={97}
          height={40}
          priority
        />
        <MenuButton>
          <Menu size={38} strokeWidth={1} />
        </MenuButton>
      </Mobile>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  margin: 18px auto 0px;
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
  color: #60636c;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.4rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  font-size: 2rem;
  height: 100%;
`;

//MENU BUTTON

const Mobile = styled.div`
  display: none;
  justify-content: space-between;
  padding-bottom: 4px;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
  }
`;

const MenuButton = styled.button`
  &:focus {
    outline-offset: 2px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default Navbar;
