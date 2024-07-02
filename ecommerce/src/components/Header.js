import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
  }
`;

function Header() {
  return (
    <NavBar>
      <h1>Sklep Internetowy</h1>
      <div>
        <Link to="/">Strona Główna</Link>
        <Link to="/products">Katalog Produktów</Link>
        <Link to="/cart">Koszyk</Link>
        <Link to="/add-product">Dodaj Produkt</Link>
      </div>
    </NavBar>
  );
}

export default Header;
