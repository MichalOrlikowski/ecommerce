import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ItemName = styled.span`
  font-size: 1.2em;
`;

const ItemPrice = styled.span`
  font-size: 1.2em;
  color: #333;
`;

const Cart = ({ cart }) => {
  return (
    <CartContainer>
      <h1>Koszyk</h1>
      {cart.map((item, index) => (
        <CartItem key={index}>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price} PLN</ItemPrice>
        </CartItem>
      ))}
    </CartContainer>
  );
};

export default Cart;
