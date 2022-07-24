import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import type { NextPage } from 'next';
import Spacer from '../components/Spacer';
import Image from 'next/image';
import ImageContact from '../public/assets/contact/image-contact.jpg';
import ImageMap from '../public/assets/contact/image-contact-map.png';
import { ArrowRight } from 'react-feather';

type Props = {};

const contact: NextPage = (props: Props) => {
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
            <Image src={ImageContact} layout="fill" objectFit="fill" priority />
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
        <Spacer size={192} />

        {/* CONTACT SECTION */}
        <ContactSectionWrapper>
          <OfficeTextBox>
            <h2>
              Contact
              <br /> Details
            </h2>
            <h3>Main Office</h3>
            <p>Mail: email@mail.com</p>
            <p>
              Adress: RM 202 AL Metal Building #504 J.P Rizal St <br />
              Lamuna Malanday, Marikina City{' '}
            </p>
            <p>Phone: 123-456-7890</p>
          </OfficeTextBox>
          <MapImageWrapper>
            <Image src={ImageMap} layout="fill" objectFit="cover" priority />
          </MapImageWrapper>
        </ContactSectionWrapper>
        <Spacer size={160} />

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
        <Spacer size={128} />
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
`;

// TOP SECTION
const TopSectionWrapper = styled.div`
  height: 720px;
  width: 100%;
  margin: 0 auto;
  /* background-color: tomato; */

  position: relative;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: brightness(50%);
  }
`;

const ContactImageWrapper = styled.div`
  width: 700px;
  height: 100%;
  background-color: lightsalmon;
  position: relative;
`;

const ContactTextBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  width: 657px;
  height: 501px;

  h1 {
    color: #eeeff4;
    font-size: 15.3rem;
    line-height: 0.3;
    font-weight: 600;
    margin-left: -190px;
    /* filter: brightness(98%); */
  }

  h2 {
    font-size: 4.5rem;
    line-height: 80%;
    margin: 150px 0px 0px 170px;
    font-weight: 600;
    color: #1b1d23;
  }

  p {
    color: #60636d;
    font-size: 1.4rem;
    line-height: 140%;
    margin-left: 170px;
    margin-top: 40px;
  }
`;

// CONTACT DETAILS

const ContactSectionWrapper = styled.section`
  height: 650px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 54%;
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
  }

  h3 {
    font-size: 1.2rem;
    line-height: 140%;
    margin-top: 48px;
  }

  p {
    color: #60636d;
    font-size: 1.2rem;
    line-height: 140%;
    margin-top: 8px;
  }
`;

const MapImageWrapper = styled.div`
  position: relative;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

//FORM
const FormSectionWrapper = styled.section`
  display: flex;

  h2 {
    flex: 35%;
    font-size: 4.5rem;
    line-height: 80%;
    color: #1b1d23;
    font-weight: 600;
  }
`;

const FormBox = styled.div`
  flex: 65%;
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
`;

export default contact;
