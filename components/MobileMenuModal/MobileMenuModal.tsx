import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from 'styled-components';
import { X } from 'react-feather';
import { keyframes } from 'styled-components';
import Link from 'next/link';
import Logo from '../../public/assets/nav/logo.svg';
import Image from 'next/image';

type Props = {};

const today = new Date();

interface ImobileMenuModal {
  isOpen: boolean;
  onDismiss: () => void;
}

const MobileMenuModal = ({ isOpen, onDismiss }: ImobileMenuModal) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content>
        <InnerWrapper>
          <CloseButton onClick={onDismiss}>
            <X size={38} strokeWidth={1} />
          </CloseButton>
          <Nav>
            <NavLink onClick={onDismiss}>
              <Link href="/">Home</Link>
            </NavLink>
            <NavLink onClick={onDismiss}>
              <Link href="/about">About</Link>
            </NavLink>
            <NavLink onClick={onDismiss}>
              <Link href="/portfolio">Portfolio</Link>
            </NavLink>
            <NavLink onClick={onDismiss}>
              <Link href="/contact">Contact</Link>
            </NavLink>
          </Nav>
          <Footer>
            <div />
            <Image src={Logo} width={97} height={40} priority />
            <h6>Copyright© {today.getFullYear()}</h6>
          </Footer>
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  animation: ${fadeIn} 500ms ease;
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
     transform: translateX(0%);
  }
`;

const Content = styled(DialogContent)`
  --overfill: 16px;
  background: white;
  //added 16px for the sliding gap on overlay
  width: calc(85% + var(--overfill));
  height: 100%;
  //added margin 16px for the sliding gap on overlay
  margin-right: calc(var(--overfill) * -1);

  animation: ${slideInRight} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
  animation-delay: 200ms;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 32px;
  padding-top: 25%;
  justify-content: space-between;

  animation: ${fadeIn} 600ms both ease-out;
  animation-delay: 500ms;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  //added 16px on 10px = 26px for the sliding gap on overlay
  right: calc(10px + var(--overfill));
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: 'hsl(220deg 3% 20%)';
  font-weight: 500;
  text-decoration: none;
  font-size: 2rem;
  text-transform: uppercase;
  &:first-of-type {
    color: #5c5c5c;
  }
`;

const Footer = styled.footer`
  text-align: center;
  opacity: 0.8;

  div {
    border-bottom: 2px solid gray;
    margin-bottom: 16px;
  }
`;

export default MobileMenuModal;
