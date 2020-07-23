import React from 'react';
import styled from 'styled-components';
import Nav from '../navigation';

const Container = styled.header`
  background-color: lightBlue;
  height: 100vh;
`;
const H1 = styled.h1`
  margin: unset;
`;

const AboutUs = () => {
  return (
    <>
      <Nav />
      <Container>
        <H1>About us</H1>
      </Container>
    </>
  );
};

export default AboutUs;
