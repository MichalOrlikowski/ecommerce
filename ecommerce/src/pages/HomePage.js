import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const HeroSection = styled.div`
  background: url('https://via.placeholder.com/1200x400') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 100px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const HeroText = styled.h1`
  font-size: 2.5em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const SubText = styled.p`
  font-size: 1.2em;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroText>Witamy w naszym Sklepie Internetowym!</HeroText>
        <SubText>Zapraszamy do zapoznania się z naszym katalogiem produktów.</SubText>
      </HeroSection>
    </HomeContainer>
  );
};

export default HomePage;
