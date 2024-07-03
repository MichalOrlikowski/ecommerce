import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
`;

function Cart() {
  return (
    <CartContainer>
      <h2>Twój Koszyk</h2>
      <p>Koszyk jest pusty.</p>
    </CartContainer>
  );
}

export default Cart;
