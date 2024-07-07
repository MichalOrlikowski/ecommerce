import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    © 2024 Sklep Internetowy. Wszelkie prawa zastrzeżone.
  </FooterContainer>
);

export default Footer;
