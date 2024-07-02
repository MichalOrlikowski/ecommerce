import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Sklep Internetowy. Wszelkie prawa zastrzeżone.</p>
    </FooterContainer>
  );
}

export default Footer;
