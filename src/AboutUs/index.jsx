import React from 'react';
import styled from 'styled-components';
import Nav from '../navigation';

const Container = styled.div`
  background-color: lightBlue;
  height: 100vh;
`;

const AboutUs = () => {
  return (
    <>
      <Nav />
      <Container>
        <h1>About us</h1>
      </Container>
    </>
  );
};

export default AboutUs;
