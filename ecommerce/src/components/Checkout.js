import React from 'react';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  padding: 20px;
`;

function Checkout() {
  return (
    <CheckoutContainer>
      <h2>Realizacja Zamówienia</h2>
      <p>Formularz realizacji zamówienia.</p>
    </CheckoutContainer>
  );
}

export default Checkout;
