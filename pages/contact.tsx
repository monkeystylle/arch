import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import type { NextPage } from 'next';
import Spacer from '../components/Spacer';
import Image from 'next/image';
import ImageContact from '../public/assets/contact/image-contact.jpg';
import ImageContact2 from '../public/assets/contact/image-contact2.jpg';
import ImageMap from '../public/assets/contact/image-contact-map.png';
import { ArrowRight } from 'react-feather';
import useWindowDimensions from '../hooks/use-window-dimension.hook';

import { QUERIES } from '../constants/constants';

type Props = {};

const Contact: NextPage = (props: Props) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>JJCA | Conatact</title>
        <meta name="keywords" content="jjca" />
      </Head>
      <ContactPageWrapper>
        {/* TOP SECTION */}
        <TopSectionWrapper>
          <ContactImageWrapper>
            <Image
              src={width <= 550 ? ImageContact2 : ImageContact}
              alt=""
              layout="fill"
              objectFit="fill"
              priority
            />
          </ContactImageWrapper>
          <ContactTextBox>
            <h1>Contact</h1>
            <h2>
              Tell us about <br /> your project
            </h2>
            <p>
              We’d love to hear more about your project.
              <br />
              Please, leave a message below <br />
              or give us a call.
            </p>
          </ContactTextBox>
        </TopSectionWrapper>
        <Spacer size={width <= 550 ? 24 : width <= 1100 ? 96 : 192} />

        {/* CONTACT SECTION */}
        <ContactSectionWrapper>
          <OfficeTextBox>
            <h2>
              Contact
              <br /> Details
            </h2>
            <h3>Main Office</h3>
            <p>
              Adress: RM 202 AL Metal Building #504 J.P Rizal St <br />
              Lamuna Malanday, Marikina City{' '}
            </p>
            <p>Mail: email@mail.com</p>
            <p>Phone: 123-456-7890</p>
          </OfficeTextBox>
          <MapImageWrapper>
            <Image
              src={ImageMap}
              alt="map"
              layout="fill"
              objectFit={width <= 550 ? 'cover' : 'fill'}
              priority
            />
          </MapImageWrapper>
        </ContactSectionWrapper>
        <Spacer size={width <= 550 ? 128 : 160} />

        {/* FORM SECTION */}
        <FormSectionWrapper>
          <h2>
            Connect <br />
            with us
          </h2>
          <FormBox>
            <Input type="text" id="name" placeholder="Name" />
            <Input type="email" id="email" placeholder="Email Address" />
            <TextArea
              placeholder="Message"
              name="Message"
              id="message"
              rows={3}
            />
            <Button>
              Message
              <ArrowRight color="white" size={38} strokeWidth={1} />
            </Button>
          </FormBox>
        </FormSectionWrapper>
        <Spacer size={width <= 550 ? 64 : width <= 1100 ? 64 : 160} />
      </ContactPageWrapper>
    </>
  );
};

const ContactPageWrapper = styled.div``;

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
    padding: 8px 20px;
  }
`;

// TOP SECTION
const TopSectionWrapper = styled.div`
  /* height: 720px; */
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
  }
`;

const ContactImageWrapper = styled.div`
  width: 700px;
  height: 720px;
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    height: 350px;
    flex: 40%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    height: 250px;
  }

  & > span {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0), 0 0px 20px 0 rgba(0, 0, 0, 0);

    @media ${QUERIES.tabletAndSmaller} {
      filter: brightness(90%);
    }
  }
`;

const ContactTextBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  width: 657px;
  height: 501px;

  @media ${QUERIES.tabletAndSmaller} {
    position: revert;
    height: revert;
    background: revert;
    width: 100%;
    flex: 60%;
    margin: 16px 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin: 32px 0px 0px;

    br {
      display: none;
    }
  }

  h1 {
    color: gainsboro;
    font-size: 14.3rem;
    line-height: 0.3;
    font-weight: 600;
    margin-left: -124px;

    @media ${QUERIES.tabletAndSmaller} {
      display: none;
    }
  }

  h2 {
    font-size: 4.5rem;
    line-height: 80%;
    margin: 150px 0px 0px 170px;
    font-weight: 600;
    color: #1b1d23;
    @media ${QUERIES.tabletAndSmaller} {
      margin: 0px 0px;
      font-size: 3.5rem;
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.75rem;
      margin-top: 32px;
    }
  }
  p {
    color: #60636d;
    font-size: 1.2rem;
    line-height: 140%;
    margin-left: 170px;
    margin-top: 40px;
    @media ${QUERIES.tabletAndSmaller} {
      margin: 0px 0px;
      margin-top: 24px;

      br {
        display: none;
      }
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.125rem;
      margin-top: 8px;
      text-align: justify;
    }
  }
`;

// CONTACT DETAILS

const ContactSectionWrapper = styled.section`
  height: 650px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 54%;

  @media ${QUERIES.tabletAndSmaller} {
    height: 400px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const OfficeTextBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-right: 60px;

  h2 {
    font-size: 4.5rem;
    line-height: 80%;
    color: #1b1d23;
    font-weight: 600;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 3.5rem;
    }
    @media ${QUERIES.phoneAndSmaller} {
      display: none;
    }
  }

  h3 {
    font-size: 1.2rem;
    line-height: 140%;
    margin-top: 48px;
    @media ${QUERIES.phoneAndSmaller} {
      margin-top: 16px;
    }
  }

  p {
    color: #60636d;
    font-size: 1.125rem;
    line-height: 140%;
    margin-top: 8px;
  }
`;

const MapImageWrapper = styled.div`
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 3.5rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    height: 250px;
  }

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

//FORM
const FormSectionWrapper = styled.section`
  display: flex;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: row-reverse;
  }
  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
  }

  h2 {
    flex: 35%;
    font-size: 4.5rem;
    line-height: 80%;
    color: #1b1d23;
    font-weight: 600;

    @media ${QUERIES.tabletAndSmaller} {
      font-size: 2.5rem;
      flex: 40%;
      display: flex;
      justify-content: center;
      margin-top: 32px;
    }
    @media ${QUERIES.phoneAndSmaller} {
      font-size: 1.75rem;
      display: revert;

      br {
        display: none;
      }
    }
  }
`;

const FormBox = styled.div`
  flex: 65%;

  @media ${QUERIES.tabletAndSmaller} {
    flex: 60%;
  }
  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 16px;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  border: none;
  border-bottom: 1px solid #1b1d23;
  box-sizing: border-box;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 8px;

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.2rem;
  }
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  border: none;
  border-bottom: 1px solid #1b1d23;
  box-sizing: border-box;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 8px;

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.2rem;
  }
`;

export default Contact;
