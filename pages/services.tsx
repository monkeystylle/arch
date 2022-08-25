import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import type { NextPage } from 'next';

import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';

type Props = {};

const Services: NextPage = (props: Props) => {
  const [showDialog, setShowDialog] = React.useState(false);
  const handleOpen = () => setShowDialog(true);
  const handleDismiss = () => setShowDialog(false);

  return (
    <>
      <Head>
        <title>JJCA | Services</title>
        <meta name="keywords" content="jjca" />
      </Head>
      <Wrapper>
        <Button onClick={handleOpen}>Show Dialog</Button>
        <Overlay isOpen={showDialog} onDismiss={handleDismiss}>
          <Content>
            <p>
              The overlay styles are a white fade instead of the default black
              fade.
            </p>
            <Button onClick={handleDismiss}>Very nice.</Button>
          </Content>
        </Overlay>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% /0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  border-radius: 8px;
  width: 65%;

  padding: 32px;
`;

const Button = styled.button`
  background-color: lightgray;
  padding: 8px 16px;
  font-size: 1.125rem;
`;

export default Services;
