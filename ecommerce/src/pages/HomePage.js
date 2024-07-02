import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  background-image: url('https://via.placeholder.com/1200x400');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const HomePage = () => (
  <div>
    <Banner>
      Witamy w naszym Sklepie Internetowym!
    </Banner>
    <p>Zapraszamy do zapoznania się z naszym katalogiem produktów.</p>
  </div>
);

export default HomePage;
