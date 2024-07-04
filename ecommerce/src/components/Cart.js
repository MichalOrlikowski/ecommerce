import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-size: 1.2em;
`;

const ItemPrice = styled.span`
  font-size: 1.2em;
  color: #333;
`;

const ItemQuantity = styled.span`
  font-size: 1em;
  color: #666;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TotalPrice = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 20px;
`;

const OrderButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

const Cart = ({ cart, updateCartItem, removeFromCart, handleOrder }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h1>Koszyk</h1>
      {cart.map((item) => (
        <CartItem key={item.id}>
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price} PLN</ItemPrice>
            <ItemQuantity>Ilość: {item.quantity}</ItemQuantity>
          </ItemDetails>
          <div>
            <Button onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</Button>
            <Button onClick={() => updateCartItem(item.id, item.quantity - 1)}>-</Button>
            <Button onClick={() => removeFromCart(item.id)}>Usuń</Button>
          </div>
        </CartItem>
      ))}
      <TotalPrice>Całkowita cena: {totalPrice.toFixed(2)} PLN</TotalPrice>
      <OrderButton onClick={handleOrder}>Zamów</OrderButton>
    </CartContainer>
  );
};

export default Cart;
